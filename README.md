# Yoink!

A fake-money shopping toy: browse a playful collectibles market, claim daily
coins, spin the wheel, yoink items into your cart, and watch a cartoon glove
snatch your order off the screen while an accelerated tracker "delivers" it
to your Pocket.

## Quick start

```bash
cd yoink
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The JSON API is
served by the dev server itself — no second process needed.

Production check:

```bash
cd yoink
npm run build
npm run serve   # serves dist/ + API at http://localhost:5175
```

Tests:

```bash
cd yoink
npm test
```

## What's inside

- **React + Vite frontend** (`yoink/src`) — screens for the market feed,
  product detail, checkout, drops, pocket, and order tracking, all inside an
  iOS device frame with the glove-hand splash animation.
- **Zero-dependency Node backend** (`yoink/server`) — wallet with a daily
  allowance and streak bonuses, a once-a-day spin wheel, order placement that
  spends your coins, accelerated shipment stages (processing → packed →
  shipped → out for delivery → delivered), and a collection that fills up as
  orders arrive. State persists to `yoink/server/db.json` (gitignored) —
  delete it to reset the demo.
- Everything is fake: no real money, payments, or addresses.

## Repo layout

- `yoink/` — the app (start here)
- `app.js`, `index.html`, `styles.css` — the older OddShop static prototype
- `Claude Design Upload.zip`, `React App Source.zip` — design sources the app
  was built from
