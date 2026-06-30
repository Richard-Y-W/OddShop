# OddShop

All the joy of buying, none of the financial pain.

OddShop is a fake online shopping dopamine toy: browse whimsical products, fill a cart, choose pretend checkout options, follow the tiny delivery truck on a map, and celebrate when the order says "It's here."

```
      _________
     /_______/|
    | ODD   | |
    | SHOP  | /
    |_______|/
       v  v
```

## What It Does

- Polished fake storefront with search, categories, product pages, ratings, and reviews
- Wishlist and cart
- Checkout flow with only pretend choices
- No real address, no real card, no personal information
- Fake shipping tracker with a mini map
- Confetti and a cute delivery moment when the order arrives
- Order history stored locally in the browser
- Recently bought and related item rails powered by local browser state

## Recommendations

The MVP does not use vector search or a server profile. Related items are ranked locally from product category, tags, price similarity, and rating. Recently bought items come from the fake order history in `localStorage`.

## Run It

Open `index.html` in a browser.

No build step, backend, account, payment system, or install is required.

## Principle

OddShop should feel like the dopamine loop of online shopping without asking users for anything sensitive. The checkout ritual is the toy.
