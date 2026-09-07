# Consumer Service Centre — Website

Next.js 14 (App Router) + JavaScript + Tailwind CSS website for a home
appliance repair booking business, built on the workflow you described.

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
app/
  layout.js              -> global layout, header/footer/SEO defaults
  page.js                -> homepage (all sections combined)
  services/[slug]/page.js -> service detail page (price list + booking form)
  blog/page.js            -> blog listing
  blog/[slug]/page.js     -> single blog post
  contact/page.js         -> contact page with map
  sitemap.js, robots.js   -> auto-generated SEO files
  api/lead/route.js       -> stub API route for the lead form (see below)

components/               -> all reusable UI sections
data/
  site.js                 -> business info: phone, email, address, map, social links
  services.js              -> every service + its price list (edit here to add/change services)
  blogs.js                 -> blog posts (edit here to add new posts)
  testimonials.js           -> customer testimonials
```

## Things You MUST Update Before Going Live

1. **`data/site.js`** — replace the placeholder phone number, email,
   WhatsApp number, and address with your real details.
2. **`data/site.js` → `mapEmbedUrl`** — go to Google Maps, search your
   business/area, click Share → Embed a map, and paste the `src` URL here.
3. **Images** — every image currently uses `placehold.co` placeholder
   boxes so the site works out of the box with zero setup. Replace the
   `image` fields in `data/services.js` and `data/blogs.js` with your own
   photos (add them to `/public` and reference as `/your-image.jpg`, or
   host them anywhere and use the full URL).
4. **`app/layout.js` and each page's `metadata`** — update
   `metadataBase` and canonical URLs once you have your real domain.

## Connecting the Lead Form to Real Email (Next Step)

Right now the booking/lead form (`components/LeadForm.js`) is fully built
and validated on the frontend, but submission is simulated — it does not
send an email yet, as agreed.

When you're ready:
1. Open `app/api/lead/route.js` — it already validates incoming data and
   has commented examples for **Resend** and **Nodemailer/SMTP**.
2. Pick one, `npm install` it, add your credentials to `.env.local`
   (see `.env.example`).
3. In `components/LeadForm.js`, uncomment the `fetch("/api/lead", ...)`
   block inside `handleSubmit` and remove the `setTimeout` simulation
   line right above it.

That's the only wiring needed — the UI, validation, and success state
are already done.

## Adding / Editing Services

Everything about a service — name, icon, description, common issues,
and price list — lives in one place: `data/services.js`. Add a new
object to the array and it automatically appears in the header menu,
homepage grid, and gets its own page at `/services/your-slug`.

## Adding Blog Posts

Same pattern in `data/blogs.js` — add an entry and it automatically
appears on `/blog` and gets its own page at `/blog/your-slug`.

## Tech Notes

- Framework: Next.js 14 (App Router), plain JavaScript (no TypeScript)
- Styling: Tailwind CSS with a custom brand color palette
  (`tailwind.config.js`)
- Icons: `lucide-react`
- Images use `next/image` for automatic optimization
- SEO: per-page metadata, auto-generated `sitemap.xml` and `robots.txt`
- Mobile: sticky Call / WhatsApp / Book bar on small screens
