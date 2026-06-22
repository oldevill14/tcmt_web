# Decap CMS OAuth Worker (Cloudflare)

This Cloudflare Worker is the **GitHub OAuth provider** for Decap CMS at `/admin`.
The website builds and deploys to GitHub Pages **without** this worker — it only
enables **CMS login** once you set it up.

## Why it's needed

Decap's GitHub backend needs a server-side endpoint to exchange the OAuth `code`
for an access token (the client secret must never live in the browser). GitHub
Pages is static, so we run that tiny endpoint on a free Cloudflare Worker.

## Setup (one time)

### 1. Create a GitHub OAuth App

GitHub → Settings → Developer settings → **OAuth Apps** → New OAuth App:

- **Application name**: `TCM Technology CMS`
- **Homepage URL**: `https://oldevill14.github.io/tcmt_web/`
- **Authorization callback URL**: `https://<worker-name>.<subdomain>.workers.dev/callback`
  (fill in after the first `wrangler deploy` prints the worker URL)

Note the **Client ID** and generate a **Client Secret**.

### 2. Deploy the worker

```bash
cd oauth-worker
npm install
npx wrangler login
npx wrangler secret put GITHUB_CLIENT_ID       # paste Client ID
npx wrangler secret put GITHUB_CLIENT_SECRET   # paste Client Secret
npx wrangler deploy
```

Wrangler prints the worker URL, e.g. `https://tcmt-decap-oauth.<you>.workers.dev`.
Go back to the GitHub OAuth App and set the callback URL to that origin + `/callback`.

### 3. Point Decap at the worker

In `public/admin/config.yml`, uncomment and set under `backend:`:

```yaml
backend:
  name: github
  repo: oldevill14/tcmt_web
  branch: main
  base_url: https://tcmt-decap-oauth.<you>.workers.dev
  auth_endpoint: auth
```

Commit + push → rebuild → visit `/tcmt_web/admin/` → **Login with GitHub**.

## Local CMS editing (no worker)

`config.yml` has `local_backend: true`. To edit content locally without OAuth:

```bash
npx decap-server      # in one terminal
npm run dev           # in another
# open http://localhost:4321/tcmt_web/admin/
```

## Endpoints

- `GET /auth` — redirects to GitHub's authorize page.
- `GET /callback` — exchanges `code` for a token and `postMessage`s it back to the
  CMS window, then closes the popup.

## Security notes

- Secrets (`GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`) are stored as Wrangler
  secrets — never commit them.
- `ALLOWED_ORIGIN` in `wrangler.toml` restricts which origin receives the token
  via `postMessage`. Keep it set to the live site origin.
