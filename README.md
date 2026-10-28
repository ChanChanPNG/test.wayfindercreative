# Wayfinder Creative — Test Site

A static test site for `test.wayfindercreative.net`.

## Deploy with Vercel
1. Create a new GitHub repository and upload `index.html`, `styles.css`, and `script.js` (README optional).
2. In Vercel, choose **Add New → Project**, import the repository, select **Other** framework, and deploy. No build command or output directory is needed.
3. Open the Vercel project → **Settings → Domains** and add `test.wayfindercreative.net`.
4. At the DNS provider for `wayfindercreative.net`, add the exact CNAME record Vercel specifies for the `test` subdomain (often `test` → `cname.vercel-dns.com`, but follow the value Vercel displays).
5. Wait for Vercel to verify DNS and issue HTTPS. This does not require changing the apex/root domain or its existing email records.

The site uses Google Fonts, so fonts need internet access. The rest is static and has no external APIs.
