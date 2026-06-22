/**
 * Decap CMS GitHub OAuth provider — Cloudflare Worker.
 *
 * Implements the two endpoints Decap's GitHub backend expects:
 *   GET /auth      -> redirect the user to GitHub's authorize page
 *   GET /callback  -> exchange ?code for an access token, then postMessage it
 *                     back to the CMS window and close the popup.
 *
 * The site builds/deploys WITHOUT this worker; it only enables CMS login.
 *
 * Required secrets: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET.
 * Optional var:     ALLOWED_ORIGIN (defaults to '*').
 */

const GITHUB_AUTHORIZE = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN = 'https://github.com/login/oauth/access_token';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/auth' || url.pathname === '/') {
      const redirectUri = `${url.origin}/callback`;
      const authorize = new URL(GITHUB_AUTHORIZE);
      authorize.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      authorize.searchParams.set('redirect_uri', redirectUri);
      authorize.searchParams.set('scope', 'repo,user');
      authorize.searchParams.set('state', crypto.randomUUID());
      return Response.redirect(authorize.toString(), 302);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) return new Response('Missing code', { status: 400 });

      const tokenRes = await fetch(GITHUB_TOKEN, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const data = await tokenRes.json();
      const origin = env.ALLOWED_ORIGIN || '*';

      if (data.error || !data.access_token) {
        return postMessagePage('error', data.error || 'no_token', origin);
      }
      return postMessagePage('success', data.access_token, origin);
    }

    return new Response('Not found', { status: 404 });
  },
};

/**
 * Returns an HTML page that messages the opener window with the Decap-expected
 * `authorization:github:<status>:<payload>` handshake, then closes the popup.
 */
function postMessagePage(status, payload, origin) {
  const message =
    status === 'success'
      ? `authorization:github:success:${JSON.stringify({ token: payload, provider: 'github' })}`
      : `authorization:github:error:${JSON.stringify({ message: payload })}`;

  const html = `<!doctype html><html><body><script>
    (function () {
      function send() {
        window.opener && window.opener.postMessage(${JSON.stringify(message)}, ${JSON.stringify(origin)});
      }
      window.addEventListener('message', function () { send(); }, { once: true });
      send();
      setTimeout(function () { window.close(); }, 500);
    })();
  </script>Authentication complete. You may close this window.</body></html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
