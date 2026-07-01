# Market To Product Detail Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved app flow: splash screen, 8a Mono Market, and 11a-style product detail on listing or CTA click.

**Architecture:** `App` owns screen state and selected listing. `MonoMarket` becomes an event-emitting feed screen. `ProductDetail` is a focused PDP component backed by small data/config helpers that are easy to test with Node.

**Tech Stack:** React 18, Vite, inline style helper `s()`, Node test runner.

---

### Task 1: Lock Flow And PDP Data

**Files:**
- Create: `yoink/src/appFlow.js`
- Create: `yoink/src/appFlow.test.js`
- Create: `yoink/src/productDetailData.js`
- Create: `yoink/src/productDetailData.test.js`

- [x] **Step 1: Write failing tests**

Create tests that assert the app starts on `market`, listing actions map to `product-detail`, the PDP variant is `11a`, and the PDP sections include review highlights plus delivery benefit tiles.

- [x] **Step 2: Run tests**

Run: `npm --prefix yoink test`

Expected: fail because `appFlow.js` and `productDetailData.js` do not exist.

- [x] **Step 3: Implement helpers**

Add pure exports for screen constants, action mapping, review highlights, reviews, delivery benefits, and a `makeProductDetail(listing)` helper.

- [x] **Step 4: Verify tests pass**

Run: `npm --prefix yoink test`

Expected: all tests pass.

### Task 2: Wire Market Clicks

**Files:**
- Modify: `yoink/src/screens/MonoMarket.jsx`

- [x] **Step 1: Update `ListingCard`**

Add `onOpenProduct` and make the card, item image, title area, and CTA button call it with the item. Stop CTA propagation so one click does not double-fire.

- [x] **Step 2: Update `MonoMarket`**

Accept `onOpenProduct` as a prop and pass it to every listing card.

- [x] **Step 3: Verify tests**

Run: `npm --prefix yoink test`.

### Task 3: Add 11a Product Detail Screen

**Files:**
- Create: `yoink/src/screens/ProductDetail.jsx`

- [x] **Step 1: Implement PDP**

Render an 11a-style scrollable PDP with hero area, badges, dynamic item title/price/CTA, quantity controls, review chips/thread, delivery tiles, delivery banner, and back button.

- [x] **Step 2: Verify build**

Run: `npm --prefix yoink run build`.

### Task 4: Wire App Flow

**Files:**
- Modify: `yoink/src/App.jsx`

- [x] **Step 1: Add selected listing state**

Render `MonoMarket` when no listing is selected, render `ProductDetail` when selected, and keep `SplashScreen` mounted at app load.

- [x] **Step 2: Remove design-board chrome**

Remove the external `8a` label and explanatory paragraph so users only see the app in the phone frame after the splash.

- [x] **Step 3: Verify**

Run `npm --prefix yoink test` and `npm --prefix yoink run build`.
