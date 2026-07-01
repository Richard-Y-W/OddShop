# Market To Product Detail Design

## Goal

The running React app should show only the approved product flow: the Yoink hand-grab splash on load, then the 8a Mono Market home feed, then an 11a-style product detail page when the user clicks a listing or its Buy, Bid, or Offer action.

## App Flow

`App` owns the selected listing state. On initial load it always renders `SplashScreen` over the app. With no selected listing, the phone frame renders `MonoMarket`. When `MonoMarket` emits a listing click, `App` stores that listing and renders `ProductDetail`. The product detail back button clears the selected listing and returns to `MonoMarket`.

## Screens

`MonoMarket` remains the 8a home feed: mono palette, interactive category chips, infinite scroll, badges, cart count, and listing cards. It should not show the older Bazaar, Drops, Pocket, or design-board labels.

`ProductDetail` ports the 11a direction into React: hero image, rare/deal badges, price and coin-back strip, quantity controls, CTA buttons, review highlight chips, vertical review thread with Helpful affordances, delivery benefit tiles, and delivery estimate banner. It uses the clicked listing for title, price, seller, item image label, and CTA text while keeping the 11a layout and mono palette.

## Testing

Node tests should cover the flow contract without requiring a browser: the app starts on the market, Buy/Bid/Offer/listing clicks target product detail, product detail uses the 11a variant, and the product detail data contains the reviews and delivery sections expected by the design.
