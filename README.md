# Bilima Restaurant

A production-minded restaurant platform built with Next.js and TypeScript.

## Product surface
- Premium responsive customer website
- Menu discovery and cart foundation
- Reservation and ordering flows
- Customer accounts
- Admin dashboard architecture
- Menu, orders, reservations, promotions, reviews and media management
- API boundaries designed for a real database/payment integration
- Accessible loading, empty and error states
- SEO-ready metadata and mobile-first layout

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Next backend layer
The repository is intentionally structured so Supabase/Postgres, authentication, storage and payment providers can be connected without rebuilding the UI.