# DEPLOY.md — bastard-software.com on Cloud Run

Target: **Cloud Run, region `europe-central2` (Warsaw)**, in its **own GCP project** on the
same billing account as `oncokernel`, image built by Cloud Build from GitHub `main`,
fronted by **Firebase Hosting** for the custom domain. DNS is already **Google Cloud DNS**.

The site is five prerendered pages in a container. No database, no API routes, no server
actions — the contact form opens a `mailto:` link in the visitor's own client.

**Do the steps in the order below, not the order you thought of them.** Vercel is removed
*last*, after the new host is live and its certificate is green. Removing it first would
take the site down for the length of the migration and destroy the rollback path.

## Why Firebase Hosting is in the path

Cloud Run's built-in custom domain mapping is available in ten regions and
**`europe-central2` is not one of them**. The alternatives are a load balancer at roughly
$20/month or Firebase Hosting, which is free, supports `europe-central2` as a rewrite
target, issues a managed TLS certificate, and adds a CDN.

The application, the container and all request handling stay in Warsaw. Firebase caches the
public HTML at edge locations, which involves no personal data because the site collects
none.

## The trade-off, stated once

Vercel's CDN already served this audience — NVIDIA Inception, investors, partners — from
everywhere. A single Warsaw region is, on latency alone, a lateral move. It is largely
neutralised here because all five pages are static HTML with `s-maxage=300`, so the
overwhelming majority of global requests are answered by a Firebase edge cache and never
reach Warsaw. What the move buys is one vendor, one bill, one console, and the same
deployment shape as `oncokernel.com`.

Fill these in once and reuse them below:

| | |
|---|---|
| Project ID | `________________` |
| Billing account | the one already linked to `oncokernel` |
| Region | `europe-central2` |
| Service name | `bastard-software` |
| Repo | `Bastard-Software/bastard-software.com`, branch `main` |
| Cloud DNS zone / project | `________________` (see Part 2, Step 1) |

---

# Part 1 — Deploy to GCP

## Step 1 — Create the project

<https://console.cloud.google.com/projectcreate>, signed in as
**mateusz.bahyrycz@bastard-software.com** (the Workspace account, not the gmail one).

- **Project name**: `bastard-software`
- **Organisation**: `bastard-software.com` — it should be preselected. If it says "No
  organisation", you are on the wrong account; switch and start again.

Note the **Project ID** — it may be `bastard-software-123456` rather than
`bastard-software`, and every command below needs the ID, not the name. If it differs, put
the real ID in `.firebaserc` and in the `--project` flags below.

**A separate project, not a corner of `oncokernel`.** Cloud Run is serverless, so a second
site is a second service, not a tenant on a machine — there is nothing to share by
co-locating them. A project can be moved to another billing account or organisation later;
two applications entangled in one project cannot be separated without a migration.

## Step 2 — Attach the existing billing account

<https://console.cloud.google.com/billing> → Link a billing account → select the new
project → choose the **same billing account already linked to `oncokernel`**.

There is no trial to activate and no new credit to claim — that was done once, on the
account, and it applies here. Linking is also what upgrades the Firebase side of this
project to Blaze, which the Step 5 rewrite requires.

**Set a budget alert for the new project**:
<https://console.cloud.google.com/billing/budgets> → Create budget → scope it to
**this project** → **20 PLN/month**, alerts at 50/90/100 %. At this workload it should
never fire; if it does, something is misconfigured and week one is when you want to know.

## Step 3 — Enable the APIs

<https://console.cloud.google.com/apis/library>, **with the new project selected** — enable
each by name:

- Cloud Run Admin API
- Cloud Build API
- Artifact Registry API
- Cloud Resource Manager API
- Firebase Hosting API

About a minute each, idempotent.

## Step 4 — Connect GitHub and set up continuous deployment

<https://console.cloud.google.com/run> → **Deploy container → Service** →
**Continuously deploy from a repository** → **Set up with Cloud Build**.

1. **Repository provider**: GitHub → *Authenticate*.
2. The **Google Cloud Build** GitHub App is already installed from the OncoKernel setup, but
   it was granted access to **only** `oncokernel.com`. Use *Configure* on the GitHub screen
   and add `bastard-software.com` to the selected repositories. Do not grant it the whole
   org.
3. **Branch**: `^main$`
4. **Build type**: **Dockerfile**, path `/Dockerfile`
5. Back on the service form:
   - **Service name**: `bastard-software` — it must match `serviceId` in `firebase.json`
   - **Region**: `europe-central2 (Warsaw)`
   - **Authentication**: **Allow unauthenticated invocations** — it is a public website
   - **Ingress**: All
6. **Container → Edit → Capacity**:
   - **Memory** `512 MiB`, **CPU** `1`
   - **Minimum instances** `0`, **Maximum instances** `4`
   - **Request timeout** `60`
7. **Create**.

The first build takes 3–5 minutes. Watch it at
<https://console.cloud.google.com/cloud-build/builds>. When it finishes you get a URL like
`https://bastard-software-xxxxxxxx.europe-central2.run.app`. Open it and check all five
pages — `/`, `/platform`, `/technology`, `/about`, `/contact` — plus `/sitemap.xml` and
`/robots.txt`, and switch the language once. Do this **before** touching DNS.

**From here, every push to `main` rebuilds and redeploys automatically.** Cloud Run keeps
the old revision serving until the new one passes its health check, and a bad deploy is
rolled back from **Revisions → Manage traffic**.

## Step 5 — Put Firebase Hosting in front

`firebase.json` is already in the repo and points at the `bastard-software` service in
`europe-central2`. Every command below runs **in a local terminal, from the repo root**
(`C:\BastardSoftware\bastard-software.com`) — PowerShell is fine. Not Cloud Shell: the
config being deployed is the one in this working tree.

The Firebase CLI is already installed from the OncoKernel setup. If it is not:

```bash
npm install -g firebase-tools
```

```bash
firebase login
```

Sign in with the **bastard-software.com Workspace account**, the same one that owns the
project. Signing in with the gmail account is the usual reason the next command shows an
empty project list.

**Attach Firebase to the existing project — from the CLI, not the console.** A Cloud
project is not a Firebase project until this is done, and the CLI will not list it
otherwise. Do not use the Firebase console's *Create a project* flow: typing the name there
creates a **second, empty** Cloud project (`bastard-software-64d25` and the like), and the
deploy then fails with a 403 about the Cloud Run Admin API in a project number you do not
recognise.

```bash
firebase projects:addfirebase bastard-software
```

Decline Google Analytics wherever it is offered. The site ships no trackers and no cookies.

`.firebaserc` already aliases `default` to `bastard-software`. Confirm the project has a
Hosting site, and create one if the list comes back empty:

```bash
firebase hosting:sites:list --project bastard-software
```

```bash
firebase hosting:sites:create bastard-software
```

Site IDs are globally unique, so if that name is taken pick another and add a matching
`"site"` field to the `hosting` block in `firebase.json`.

```bash
firebase deploy --only hosting --project bastard-software
```

This uploads nothing and installs one rewrite: every path goes to the Cloud Run service.
You get a `https://PROJECT_ID.web.app` URL — open it and confirm it serves the same site as
the `run.app` URL.

**This step is done once.** The rewrite targets the service, not a revision, so every later
push to `main` flows through automatically: Cloud Build → new Cloud Run revision → Firebase
serves it. There is no second deploy to remember.

### Why `firebase-public/` is empty

`firebase.json` points Hosting at `firebase-public/`, an empty directory, rather than at the
real `public/`. Firebase Hosting serves its own uploaded files in preference to a rewrite.
If `public/` were uploaded, `/bs-logo.png` and the team photos would be served from a
snapshot taken at the last `firebase deploy` — so changing a photo and pushing to `main`
would update Cloud Run and change nothing that visitors see, silently, indefinitely.
Pointing Hosting at an empty directory makes every path fall through to Cloud Run, which is
the only copy.

---

# Part 2 — Cut the domain over

DNS for `bastard-software.com` is edited in the **Squarespace** domain panel:
**Settings → Domains → bastard-software.com → DNS → DNS Settings**, under *Custom records*.

The nameservers are `ns-cloud-a1..a4.googledomains.com` and the SOA is
`cloud-dns-hostmaster.google.com`, which looks like Cloud DNS and is not. Squarespace
inherited Google Domains and still runs those domains on Google's DNS infrastructure. **There
is no managed zone in your GCP console to find**, and creating one there would change
nothing — the registrar's nameservers decide who answers.

Starting state:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `216.198.79.1` (Vercel) | 1 hr |
| CNAME | `www` | `a832d2309756550a.vercel-dns-017.com` (Vercel) | 30 mins |
| MX | `@` | `smtp.google.com` | 1 hr |
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` | 1 hr |
| TXT | `google._domainkey` | `v=DKIM1; k=rsa; ...` | 1 hr |

**Do not touch MX, SPF or DKIM.** They are Google Workspace email and have nothing to do
with hosting.

## Step 1 — The NAME field trap, before you type anything

Squarespace treats **NAME as a label relative to the zone** and appends the domain to
whatever you type. Firebase's setup dialog labels its column *Domain name* and prints the
value `bastard-software.com`. Pasting that verbatim creates
**`bastard-software.com.bastard-software.com`** — a subdomain nothing will ever query.

**The apex is `@`.** Every record Firebase or Search Console describes as being on
`bastard-software.com` goes in as `@`.

The failure is silent and total. Firebase never sees its verification TXT, so the domain
never verifies; and if the old apex A record was removed in the same sitting, the site stops
resolving altogether while `www` keeps serving from the old host, which disguises it. Check
each record against the authoritative nameserver after adding it:

```bash
nslookup -type=a bastard-software.com ns-cloud-a1.googledomains.com
```

A reply of `SOA` rather than an address means there is no record at that name.

Unlike Cloud DNS, Squarespace allows several separate TXT rows on the same name, so the
verification strings below are added as their own rows rather than appended to the SPF
record. Leave the SPF row untouched.

## Step 2 — Lower the TTLs first, then wait

Edit the `@` **A** row and the `www` **CNAME** row and set **TTL 5 min** on both, changing
nothing else. Then **wait an hour** — the old 1-hour TTL has to expire out of resolver caches
before the new one is in force.

This is the step that makes the rollback fast. Skip it and a bad cutover is stuck in caches
for half an hour.

## Step 3 — Verify ownership with Firebase while Vercel still serves

Firebase console → **Hosting → Add custom domain** → `bastard-software.com`.

**Leave the "Redirect to an existing website" checkbox unticked.** The apex must *serve* the
site: `sitemap.ts`, `robots.ts` and `metadataBase` all declare `https://bastard-software.com`
as canonical, so an apex that redirects away points every canonical URL at a redirect.
Ticking it and naming `www` produces a live certificate, a green "Connected" chip, and a
site that 301s into nothing.

Firebase shows a TXT record, `hosting-site=<site-id>`, and one or more A records. It labels
both as being on `bastard-software.com`.

**Add the TXT record now and nothing else**, as a new row with NAME **`@`** — not
`bastard-software.com`. See Step 1.

Adding the TXT changes nothing a visitor sees. The site keeps serving from Vercel while
Firebase verifies ownership.

## Step 4 — Swap the hosting records

Once Firebase reports the domain verified:

| Type | NAME | Action |
|---|---|---|
| A | `@` | replace `216.198.79.1` with the IPv4 address(es) Firebase shows |
| CNAME | `www` | **delete** the row |
| A | `www` | create, with the address(es) Firebase shows for `www` |

`www` moves from a CNAME to A records because Firebase issues A records for custom domains,
and a name cannot hold both a CNAME and an A record — so the old one is deleted, not edited.

Add `www.bastard-software.com` in the Firebase console as a **second** custom domain, set to
**redirect to the apex** — never the reverse. Between deleting the CNAME and finishing that,
`www` does not resolve. That is expected, not a fault.

## Step 5 — Wait for the certificate

Firebase issues the managed TLS certificate automatically once it sees the A records. This
usually takes fifteen minutes to two hours and can take up to 24.

**Expect `NET::ERR_CERT_COMMON_NAME_INVALID` in the browser until it lands.** Firebase serves
a placeholder certificate naming only `firebaseapp.com` and `*.firebaseapp.com` while
provisioning, so the name does not match the domain yet. It is not a misconfiguration. **Do
not edit DNS to "fix" it** — each change restarts verification, and the certificate is only
issued once verification holds.

Check progress:

```bash
nslookup bastard-software.com
```

```bash
curl -sSI https://bastard-software.com/
```

The domain shows **Connected** in the Firebase Hosting console when it is done. Verify all
five pages, `/sitemap.xml`, `/robots.txt`, and that `www` redirects to the apex.

### If browsers get "Site Not Found" but `curl` gets the site

Firebase answers with a cacheable 404 while a domain is connected but its Hosting site has no
release yet, and its CDN keeps that page. Responses carry `Vary: accept-encoding`, so each
encoding is a **separate cached object**: `curl` sends identity or gzip and gets the real
site, while every browser sends `br`/`zstd` and gets the stale 404. The result looks exactly
like a browser cache problem and survives hard-refresh, incognito and a different browser,
because the stale copy is at Google's edge.

Always reproduce with the encoding browsers actually send:

```bash
curl -s -o /dev/null -w "%{http_code} %{size_download}\n" -H "Accept-Encoding: gzip, deflate, br, zstd" https://bastard-software.com/
```

Redeploying Hosting cuts a new release and invalidates the CDN:

```bash
firebase deploy --only hosting --project bastard-software
```

If the domain was set to redirect by mistake, the domain's **⋮ → Edit domain** dialog
switches it back to *Serve traffic from this domain* in place — no need to remove and
re-add, so the certificate is kept. The browser will keep following the old redirect
afterwards, because a 301 is permanent and Chrome caches it: check in a private window
rather than assuming the fix failed.

---

# Part 3 — Remove the site from Vercel

**Only after the domain shows Connected in Firebase and all five pages load over HTTPS.**
Until then the Vercel deployment is the rollback: putting `216.198.79.1` back in the apex A
record restores the old site within the 300-second TTL, and that only works while the Vercel
project still exists.

Give it a few days of the new host being live before doing this. There is no cost to
waiting — the Vercel project sits idle receiving no traffic.

## Step 1 — Check whether the domain is registered through Vercel

<https://vercel.com/dashboard> → **Domains** (account level, not project level).

If `bastard-software.com` is listed as a **registered** domain rather than only a *configured*
one, Vercel is the registrar and deleting things carelessly puts the domain itself at risk.
In that case **transfer the registration out first** (Domains → the domain → Transfer out,
unlock, take the auth/EPP code) and complete the transfer at the receiving registrar before
continuing. Do not delete the project or the account until that transfer is confirmed.

The domain is registered at **Squarespace**, which absorbed Google Domains, and its DNS is
edited there — so Vercel holds no registration and no zone. This check is a formality, but do
it rather than assume.

## Step 2 — Disconnect the Git integration

Project → **Settings → Git → Disconnect**.

Do this **before** deleting anything else. While it is connected, every push to `main`
triggers a Vercel build in parallel with the Cloud Build one — harmless but noisy, and it
keeps producing deployments that can still answer on a preview URL.

## Step 3 — Remove the domains from the project

Project → **Settings → Domains** → remove `bastard-software.com` and
`www.bastard-software.com`.

Vercel will warn that the domain will stop working. By this point DNS already points
elsewhere, so nothing changes.

## Step 4 — Delete the project

Project → **Settings → General → Advanced → Delete Project**. Type the project name to
confirm.

This removes all deployments, including preview URLs. It is not reversible.

## Step 5 — Revoke the GitHub App

<https://github.com/organizations/Bastard-Software/settings/installations> → **Vercel** →
remove `bastard-software.com` from its repository access, or uninstall the app entirely if
no other repo uses it.

An installed app with repo access is standing permission. Removing it once the integration
is gone is hygiene, not paranoia.

## Step 6 — Local cleanup

```bash
rm -rf .vercel
```

`.vercel` holds the local project link and is already gitignored, so this only tidies the
working tree.

---

# Part 4 — Guardrails, once it is live

**Budget alert** — done in Part 1, Step 2. Confirm it exists and is scoped to the new
project at <https://console.cloud.google.com/billing/budgets>.

**Artifact Registry cleanup** — every deploy pushes an image into a 0.5 GB free tier, so a
handful of deploys fill it. This is the only line item that grows on its own.

`artifact-cleanup-policy.json` in the repo holds the intent: **keep the 3 most recent
versions, delete anything older than 30 days.** The two rules work as a pair — a keep policy
always wins over a delete policy, so the live image survives even once it is older than 30
days. Three rather than one because rolling a bad deploy back to an earlier Cloud Run
revision needs that revision's image to still exist.

### Applying it in the console

1. <https://console.cloud.google.com/artifacts> → open the **`cloud-run-source-deploy`**
   repository in `europe-central2` (the name Cloud Run's build trigger creates).
2. **Edit repository** → scroll to **Cleanup policies**.
3. Set the mode to **Dry run** first. Policies are evaluated and logged, nothing is deleted.
4. **Add a cleanup policy** → type **Keep most recent versions**
   - Name: `keep-recent-releases`
   - Keep count: `3`
5. **Add a cleanup policy** again → type **Conditional delete**
   - Name: `delete-stale`
   - Tag state: **Any tag state**
   - Older than: `30d`
6. **Update**.
7. Leave it in dry run for one or two deploys, check what it reports, then come back and
   switch the mode to **Delete artifacts**.

With only a few images present, dry run will likely match nothing. That is the expected
result — the policy is being set now so it is already in force by the tenth deploy, rather
than discovered when the quota is hit.

---

# Part 5 — Google Search Console

The sitemap is generated by `src/app/sitemap.ts` and served at
<https://bastard-software.com/sitemap.xml>. `src/app/robots.ts` advertises it in
`robots.txt`, so Google will find it unprompted. Submitting it explicitly is what gets you
the per-URL indexing report, which is the actual reason to bother.

**Do this only after the certificate is green.** Submitting a sitemap on a domain whose TLS
handshake fails produces a "Couldn't fetch" error and a crawl cycle spent on nothing.

## Step 1 — Add a Domain property

<https://search.google.com/search-console> → property dropdown → **Add property** →
**Domain** (the left-hand option) → `bastard-software.com`.

Use **Domain**, not URL prefix. A domain property covers the apex, `www`, `http` and `https`
in one place, so the `www` redirect and the protocol do not each need their own property. It
is verified by DNS, which you control.

If a URL-prefix property already exists from the Vercel period, leave it — the domain
property is a superset and the two coexist.

## Step 2 — Verify with a TXT record

Search Console shows a value like `google-site-verification=xxxxxxxxxxxxxxxxxxxxxxxx`.

Add it in Squarespace as a **new TXT row with NAME `@`** — the same rule as the Firebase
string, and the same trap if you type the domain instead. The apex then carries three TXT
rows: SPF, `hosting-site=...`, and `google-site-verification=...`. That is correct and does
not affect mail.

Click **Verify**. It usually succeeds within a minute or two; if not, wait out the TTL and
retry rather than editing the record again.

Leave both verification values in place permanently. Removing the Search Console one
unverifies the property; removing the Firebase one can cost you the certificate at renewal.

## Step 3 — Submit the sitemap

Property → **Sitemaps** in the left sidebar → under *Add a new sitemap*, enter:

```
sitemap.xml
```

The domain part is prefilled — enter only the path. **Submit**.

Status goes to *Success* with **5 discovered URLs** once Google has fetched it, usually
within minutes to a day. *Couldn't fetch* almost always means the certificate was not ready,
not that the sitemap is wrong; confirm with the command below and resubmit.

```bash
curl -sS https://bastard-software.com/sitemap.xml
```

## Step 4 — Request indexing for the five pages

**URL Inspection** (the search bar at the top) → paste each URL → **Request indexing**:

```
https://bastard-software.com/
https://bastard-software.com/platform
https://bastard-software.com/technology
https://bastard-software.com/about
https://bastard-software.com/contact
```

This is a queue nudge, not a guarantee, and it is rate-limited to a handful per day — five is
fine. Without it, discovery from the sitemap alone typically takes days to weeks on a new
property.

## Step 5 — Check back after a week

- **Pages** report — the five URLs should be *Indexed*. Anything under *Not indexed* names
  its reason.
- **Sitemaps** — *Last read* should be recent, *Discovered URLs* should be 5.
- **Settings → Ownership verification** — the DNS record should still show as verified.

## Both languages are indexed separately

English is the default and keeps the unprefixed URLs; Polish lives under `/pl`. All ten
pages are prerendered, so Googlebot receives real Polish HTML with a Polish `<title>`,
description and `lang` attribute — no JavaScript required.

Every page declares a canonical plus reciprocal `hreflang` for `en`, `pl` and `x-default`
(English), and the sitemap repeats those annotations on all ten URLs. That is what stops the
two languages being read as duplicate content rather than translations.

There is deliberately **no automatic language redirect**. A Polish visitor landing on `/`
gets English with a PL switch in the header, because redirecting on `Accept-Language` hides
one language from crawlers and overrides a choice the visitor may have made deliberately.

## Optional: Bing

<https://www.bing.com/webmasters> offers **Import from Google Search Console**, which carries
the verification and the sitemap across in about a minute.

---

# What this adds to the repo

| File | Purpose |
|---|---|
| `Dockerfile` | Three-stage build; runs `.next/standalone/server.js` as a non-root user on `$PORT` |
| `.dockerignore` | Keeps `node_modules`, `.next`, `.git` and `.vercel` out of the build context |
| `firebase.json` | One rewrite: every path to the `bastard-software` Cloud Run service in `europe-central2` |
| `.firebaserc` | Aliases `default` to the project ID |
| `firebase-public/` | Deliberately empty — see Part 1, Step 5 |
| `artifact-cleanup-policy.json` | Keep 3 recent images, delete anything over 30 days |
| `next.config.ts` | `output: "standalone"` plus a 5-minute CDN TTL on HTML |
| `src/app/sitemap.ts` | The five URLs |
| `src/app/robots.ts` | Allow all, points at the sitemap |

---

# Costs

| Product | Free allowance | Our usage |
|---|---|---|
| **Cloud Run** | 2 M requests, 360 k GiB-s, 180 k vCPU-s per month | far below — static HTML, scale-to-zero |
| **Firebase Hosting** | 10 GB transfer/month on Blaze | tens of thousands of page loads |
| **Cloud Build** | 120 build-minutes/day | ~4 min per push |
| **Artifact Registry** | 0.5 GB | a few images fit, so **the cleanup policy is not optional** |
| **Cloud DNS** | none | ~$0.20/month per zone, already being paid |
| **Cloud Logging** | 50 GiB/project/month | negligible |

**Expected bill: under 5 PLN/month, most months effectively zero.** The free Cloud Run
allowance is a resource quota rather than a discount, so it applies in Warsaw exactly as
anywhere else. Warsaw is a Tier 2 region, roughly a third more per unit than Tier 1 regions
such as `europe-west1`, but that premium applies only *above* the free tier.

The two sites draw on the same monthly free allowance — per billing account for Cloud Build,
per project for Cloud Run. Two low-traffic sites still cost nothing.

---

# Rollback

**DNS rollback**, if the new host misbehaves during cutover and the Vercel project still
exists: set the `@` A row back to `216.198.79.1` and restore the `www` CNAME to
`a832d2309756550a.vercel-dns-017.com`. With TTL 5 min this takes effect in five minutes.

**Revision rollback**, for a bad deploy after the migration:

```bash
gcloud run services update-traffic bastard-software --region europe-central2 --to-revisions PREVIOUS_REVISION=100
```

Or in the console: **Cloud Run → bastard-software → Revisions → Manage traffic**. `gcloud` is
not currently installed on this machine; the console does the same job.
