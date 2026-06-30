const products = [
  {
    id: "chair-meeting",
    name: "Chair From A Meeting That Could Have Been An Email",
    category: "Office",
    price: 340,
    rating: 4.8,
    reviews: 912,
    badge: "Best avoided",
    image: "https://picsum.photos/id/237/800/800",
    description: "Ergonomic posture, emotional fatigue, and the faint memory of quarterly planning.",
    condition: "Lightly sighed in",
    delivery: "Arrives in 47 fake minutes",
    seller: "Cubicle Outlet",
    review: "It rolled away during a status update. Five stars."
  },
  {
    id: "toaster-witness",
    name: "Chrome Toaster That Has Seen Too Much",
    category: "Kitchen",
    price: 218,
    rating: 4.6,
    reviews: 1440,
    badge: "Limited crumbs",
    image: "https://picsum.photos/id/1060/800/800",
    description: "Two slots, seven opinions, and a polished finish that reflects your choices.",
    condition: "Refurbished by breakfast",
    delivery: "Arrives before imaginary brunch",
    seller: "Countertop Classics",
    review: "Made my bagel feel judged, which improved texture."
  },
  {
    id: "printer-haunted",
    name: "Slightly Haunted Wireless Printer",
    category: "Tech",
    price: 666,
    rating: 4.2,
    reviews: 384,
    badge: "Almost connects",
    image: "https://picsum.photos/id/180/800/800",
    description: "Prints shipping labels, apology letters, and one mysterious page at 3:14 AM.",
    condition: "Spiritually open box",
    delivery: "Out for spectral delivery",
    seller: "Device Dungeon",
    review: "It found the Wi-Fi once. I still think about it."
  },
  {
    id: "lamp-meeting",
    name: "Lamp That Was On During The Meeting",
    category: "Home",
    price: 129,
    rating: 4.9,
    reviews: 231,
    badge: "Warm glow",
    image: "https://picsum.photos/id/106/800/800",
    description: "A warm desk lamp with institutional memory and no actionable takeaways.",
    condition: "Emotionally dented",
    delivery: "Arrives after one calendar refresh",
    seller: "Soft Light Surplus",
    review: "Created ambiance without resolving anything."
  },
  {
    id: "coupon-expired",
    name: "Expired Moon Coupon",
    category: "Collectible",
    price: 88,
    rating: 4.7,
    reviews: 77,
    badge: "Edition 88/500",
    image: "https://picsum.photos/id/903/800/800",
    description: "Redeemable nowhere, printed beautifully, and widely misunderstood by collectors.",
    condition: "Mint, but useless",
    delivery: "Delivered by lunar paperwork",
    seller: "Orbit Receipts",
    review: "Could not redeem it. Framing it anyway."
  },
  {
    id: "hdmi-support",
    name: "Emotional Support HDMI Cable",
    category: "Tech",
    price: 54,
    rating: 4.5,
    reviews: 803,
    badge: "Plugs in",
    image: "https://picsum.photos/id/119/800/800",
    description: "Transfers video, audio, and reassurance across a confidently braided exterior.",
    condition: "New in coping sleeve",
    delivery: "Arrives when your monitor forgives you",
    seller: "Cable Feelings Inc.",
    review: "My second screen finally felt seen."
  },
  {
    id: "crouton-luxury",
    name: "Luxury Single Crouton",
    category: "Kitchen",
    price: 31,
    rating: 4.1,
    reviews: 2219,
    badge: "Crunch drop",
    image: "https://picsum.photos/id/292/800/800",
    description: "One artisanal cube of bread confidence, packed with unnecessary seriousness.",
    condition: "Dry aged",
    delivery: "Arrives in a padded envelope",
    seller: "Salad Authority",
    review: "Too powerful for soup. Perfect for display."
  },
  {
    id: "receipt-nothing",
    name: "Signed Receipt For Nothing",
    category: "Collectible",
    price: 117,
    rating: 5.0,
    reviews: 49,
    badge: "Cult item",
    image: "https://picsum.photos/id/20/800/800",
    description: "Proof that an event may have occurred, authenticated by a pen with confidence.",
    condition: "Archival nonsense",
    delivery: "Ships in a legal-size sigh",
    seller: "Paperwork Museum",
    review: "Finally, a receipt that understands me."
  },
  {
    id: "desk-invisible",
    name: "Premium Invisible Desk",
    category: "Office",
    price: 490,
    rating: 3.9,
    reviews: 118,
    badge: "Space saver",
    image: "https://picsum.photos/id/1/800/800",
    description: "A modern workspace solution that disappears exactly when you need support.",
    condition: "Unseen",
    delivery: "Carrier cannot confirm location",
    seller: "Minimal Maximal",
    review: "I misplaced it immediately. Very clean look."
  }
];

const state = {
  category: "All",
  search: "",
  sort: "featured",
  checkoutStep: 0,
  checkout: JSON.parse(localStorage.getItem("oddcart_checkout") || "null") || {
    destination: "porch",
    payment: "coupon",
    shipping: "prime"
  },
  cart: JSON.parse(localStorage.getItem("oddcart_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("oddcart_wishlist") || "[]"),
  orders: JSON.parse(localStorage.getItem("oddcart_orders") || "[]")
};

const els = {
  grid: document.getElementById("productGrid"),
  search: document.getElementById("searchInput"),
  resultsTitle: document.getElementById("resultsTitle"),
  sort: document.getElementById("sortSelect"),
  cartDrawer: document.getElementById("cartDrawer"),
  checkoutDrawer: document.getElementById("checkoutDrawer"),
  wishlistDrawer: document.getElementById("wishlistDrawer"),
  ordersDrawer: document.getElementById("ordersDrawer"),
  checkoutContent: document.getElementById("checkoutContent"),
  cartItems: document.getElementById("cartItems"),
  wishlistItems: document.getElementById("wishlistItems"),
  ordersList: document.getElementById("ordersList"),
  cartCount: document.getElementById("cartCount"),
  wishlistCount: document.getElementById("wishlistCount"),
  cartTotal: document.getElementById("cartTotal"),
  modal: document.getElementById("productModal"),
  trackingModal: document.getElementById("trackingModal"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  modalContent: document.getElementById("modalContent"),
  trackingModalContent: document.getElementById("trackingModalContent"),
  toast: document.getElementById("toast"),
  filters: document.getElementById("filters")
};

state.checkout.destination ||= "porch";
state.checkout.payment ||= "coupon";
state.checkout.shipping ||= "prime";
delete state.checkout.name;
delete state.checkout.address;
delete state.checkout.city;
delete state.checkout.state;
delete state.checkout.zip;
delete state.checkout.cardName;
delete state.checkout.cardNumber;
delete state.checkout.cardExpiry;

function credits(value) {
  return `${value.toLocaleString()} credits`;
}

function save() {
  localStorage.setItem("oddcart_cart", JSON.stringify(state.cart));
  localStorage.setItem("oddcart_wishlist", JSON.stringify(state.wishlist));
  localStorage.setItem("oddcart_orders", JSON.stringify(state.orders));
  localStorage.setItem("oddcart_checkout", JSON.stringify(state.checkout));
}

save();

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function filteredProducts() {
  let result = products.filter((product) => {
    const categoryMatch = state.category === "All" || product.category === state.category;
    const query = state.search.toLowerCase();
    const searchMatch = !query || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });

  if (state.sort === "rating") result = result.sort((a, b) => b.rating - a.rating);
  if (state.sort === "price-low") result = result.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") result = result.sort((a, b) => b.price - a.price);
  return result;
}

function renderProducts() {
  const items = filteredProducts();
  els.resultsTitle.textContent = state.search ? `Results for "${state.search}"` : `${state.category} products`;
  els.grid.innerHTML = items.map(productCard).join("") || `<div class="empty-state">No fake products found.</div>`;
}

function productCard(product) {
  const wished = state.wishlist.includes(product.id);
  return `
    <article class="product-card">
      <button class="product-image" data-view="${product.id}" aria-label="View ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="badge">${product.badge}</span>
      </button>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="rating">${"★".repeat(Math.round(product.rating))} ${product.rating} (${product.reviews})</div>
        <div class="price-line">
          <span class="price">${credits(product.price)}</span>
          <span class="delivery">${product.delivery}</span>
        </div>
      </div>
      <div class="product-actions">
        <button class="secondary-button" data-cart="${product.id}">Add to cart</button>
        <button class="ghost-button" data-wish="${product.id}">${wished ? "Saved" : "Wishlist"}</button>
      </div>
    </article>
  `;
}

function renderDrawers() {
  renderCart();
  renderWishlist();
  renderOrders();
  renderCheckout();
  els.cartCount.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
  els.wishlistCount.textContent = state.wishlist.length;
}

function renderCart() {
  const total = state.cart.reduce((sum, item) => sum + getProduct(item.id).price * item.qty, 0);
  els.cartTotal.textContent = credits(total);
  els.cartItems.innerHTML = state.cart.length
    ? `
      <div class="tray-banner">
        <strong>🛍️ Your bag</strong>
        <span>${state.cart.reduce((sum, item) => sum + item.qty, 0)} pretend item${state.cart.length === 1 ? "" : "s"} · tap checkout when the craving peaks</span>
      </div>
      ${state.cart.map((item) => {
        const product = getProduct(item.id);
        return `
          <div class="line-item">
            <img src="${product.image}" alt="${product.name}">
            <div>
              <h3>${product.name}</h3>
              <p>${credits(product.price)} x ${item.qty}</p>
              <div class="mini-actions">
                <button data-dec="${product.id}">-</button>
                <button data-inc="${product.id}">+</button>
                <button data-remove="${product.id}">Remove</button>
              </div>
            </div>
          </div>
        `;
      }).join("")}
      ${cartBagSummary()}
      <div class="bill-box">
        <div><span>Subtotal</span><strong>${credits(total)}</strong></div>
        <div><span>OddPrime delivery</span><strong>0 credits</strong></div>
        <div><span>Joy tax</span><strong>0 credits</strong></div>
        <div class="bill-total"><span>To pay</span><strong>${credits(total)}</strong></div>
      </div>
    `
    : `<div class="empty-state">Your cart is empty. This is financially responsible, but less fun.</div>`;
}

function cartBagSummary() {
  const categories = [...new Set(state.cart.map((item) => getProduct(item.id).category))];
  return `
    <div class="bag-summary">
      <div>
        <strong>Almost purchased</strong>
        <span>${categories.join(", ")}</span>
      </div>
      <p>Your bag is saved locally in this browser. No account, checkout data, or personal information required.</p>
    </div>
  `;
}

function renderWishlist() {
  els.wishlistItems.innerHTML = state.wishlist.length
    ? state.wishlist.map((id) => {
        const product = getProduct(id);
        return `
          <div class="line-item">
            <img src="${product.image}" alt="${product.name}">
            <div>
              <h3>${product.name}</h3>
              <p>${credits(product.price)}. ${product.badge}.</p>
              <div class="mini-actions">
                <button data-cart="${product.id}">Add to cart</button>
                <button data-wish="${product.id}">Remove</button>
              </div>
            </div>
          </div>
        `;
      }).join("")
    : `<div class="empty-state">No saved fake purchases yet.</div>`;
}

function renderOrders() {
  els.ordersList.innerHTML = state.orders.length
    ? state.orders.map(orderCard).join("")
    : `<div class="empty-state">No fake orders yet. Place one and watch nothing arrive.</div>`;
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + getProduct(item.id).price * item.qty, 0);
}

function shippingLabel(key = state.checkout.shipping) {
  return {
    prime: "OddPrime rush - delivered in under a minute",
    standard: "Standard pretend shipping - gentle and decorative",
    saver: "No-rush box meditation - cheapest fake option"
  }[key];
}

function destinationLabel(key = state.checkout.destination) {
  return {
    porch: "Tiny front porch in Parcel Town",
    locker: "OddCart locker behind the cloud",
    desk: "Desk drawer labeled important nonsense"
  }[key];
}

function paymentLabel(key = state.checkout.payment) {
  return {
    coupon: "Unlimited pretend coupon",
    lint: "Pocket lint rewards balance",
    vibes: "Good vibes installment plan"
  }[key];
}

function renderCheckout() {
  const steps = ["Review", "Destination", "Payment", "Shipping"];
  const total = cartTotal();
  els.checkoutContent.innerHTML = `
    <div class="checkout-progress">
      ${steps.map((step, index) => `<button class="progress-pill ${index === state.checkoutStep ? "active" : ""}" data-checkout-step="${index}">${step}</button>`).join("")}
    </div>
    <div class="checkout-panel">
      ${checkoutStepContent(total)}
      <div class="checkout-actions">
        <button class="ghost-button" data-checkout-prev ${state.checkoutStep === 0 ? "disabled" : ""}>Back</button>
        ${state.checkoutStep < 3
          ? `<button class="primary-button" data-checkout-next>Continue</button>`
          : `<button class="primary-button" data-place-order>Place totally fake order</button>`}
      </div>
    </div>
  `;
}

function checkoutStepContent(total) {
  if (!state.cart.length) {
    return `<div class="empty-state">Your cart is empty. Add something useless before checking out.</div>`;
  }

  if (state.checkoutStep === 0) {
    return `
      <section class="checkout-section">
        <h3>🧾 Your order</h3>
        ${state.cart.map((item) => {
          const product = getProduct(item.id);
          return `
            <div class="line-item">
              <img src="${product.image}" alt="${product.name}">
              <div>
                <h3>${product.name}</h3>
                <p>${credits(product.price)} x ${item.qty} · Sold by ${product.seller}</p>
              </div>
            </div>
          `;
        }).join("")}
        <div class="delivery-card">OddPrime is active. No actual money, no actual trucks, maximum tiny anticipation.</div>
      </section>
      <section class="checkout-section">
        <h3>Bill details</h3>
        <div class="summary-table">
          <div class="summary-row"><span>Items</span><strong>${credits(total)}</strong></div>
          <div class="summary-row savings"><span>Item discount</span><strong>- ${credits(Math.ceil(total * 0.18))}</strong></div>
          <div class="summary-row"><span>Shipping</span><strong>0 credits</strong></div>
          <div class="summary-row"><span>Taxes & charges</span><strong>0 credits</strong></div>
          <div class="summary-row"><span>Total</span><strong>${credits(total)}</strong></div>
        </div>
        <div class="delivery-card">🎉 You saved ${credits(Math.ceil(total * 0.18))} on this order and still pay $0.</div>
      </section>
    `;
  }

  if (state.checkoutStep === 1) {
    return `
      <section class="checkout-section">
        <h3>Pick a fake destination</h3>
        <div class="choice-grid">
          ${["porch", "locker", "desk"].map((key) => `
            <button class="choice-card ${state.checkout.destination === key ? "active" : ""}" data-destination="${key}">
              <strong>${destinationLabel(key).split(" at ")[0]}</strong>
              <span>${destinationLabel(key)}</span>
            </button>
          `).join("")}
        </div>
      </section>
      <section class="checkout-section">
        <h3>Delivery instructions</h3>
        <div class="delivery-card">No real address needed. The courier already knows the route because the route is imaginary.</div>
      </section>
    `;
  }

  if (state.checkoutStep === 2) {
    return `
      <section class="checkout-section">
        <h3>Pick a pretend payment method</h3>
        <div class="choice-grid">
          ${["coupon", "lint", "vibes"].map((key) => `
            <button class="choice-card ${state.checkout.payment === key ? "active" : ""}" data-payment="${key}">
              <strong>${paymentLabel(key)}</strong>
              <span>No real card. No real money. No user information.</span>
            </button>
          `).join("")}
        </div>
        <div class="delivery-card">OddCart never asks for real payment details. The dopamine is free.</div>
      </section>
      <section class="checkout-section">
        <h3>Balance</h3>
        <div class="summary-row"><span>Available credits</span><strong>9,999 credits</strong></div>
        <div class="summary-row"><span>This order</span><strong>${credits(total)}</strong></div>
      </section>
    `;
  }

  return `
    <section class="checkout-section">
      <h3>Pick your fake shipping</h3>
      <div class="choice-grid">
        ${["prime", "standard", "saver"].map((key) => `
          <button class="choice-card ${state.checkout.shipping === key ? "active" : ""}" data-shipping="${key}">
            <strong>${shippingLabel(key).split(" - ")[0]}</strong>
            <span>${shippingLabel(key).split(" - ")[1]}</span>
          </button>
        `).join("")}
      </div>
    </section>
    <section class="checkout-section">
      <h3>Final review</h3>
      <div class="summary-table">
        <div class="summary-row"><span>Ship to</span><strong>${destinationLabel()}</strong></div>
        <div class="summary-row"><span>Pay with</span><strong>${paymentLabel()}</strong></div>
        <div class="summary-row"><span>Delivery</span><strong>${shippingLabel()}</strong></div>
        <div class="summary-row"><span>Total</span><strong>${credits(total)}</strong></div>
      </div>
      <div class="delivery-card">The product will not come, but the delivery ping will.</div>
    </section>
  `;
}

function orderCard(order) {
  const product = getProduct(order.id);
  const status = orderStatus(order.createdAt);
  return `
    <article class="order-card">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h3>${product.name}</h3>
        <p>Order #${order.number} · ${credits(product.price * order.qty)} · Qty ${order.qty}</p>
        <strong>${status.label}</strong>
        <div class="tracking">
          ${["Confirmed", "Packed", "Out for delivery", "It's here"].map((label, index) => `
            <span class="tracking-step ${index <= status.index ? "active" : ""}">${label}</span>
          `).join("")}
        </div>
        ${trackingMap(status.index)}
        <div class="tracking-detail">${status.detail}</div>
        <div class="mini-actions">
          <button data-track-order="${order.number}">View live tracking</button>
        </div>
        ${status.index === 3 ? `
          <div class="arrival-scene delivered-pop">
            <div class="confetti" aria-hidden="true">
              ${Array.from({ length: 18 }, (_, index) => `<i style="--i:${index};"></i>`).join("")}
            </div>
            <div class="box-graphic" aria-hidden="true"></div>
            <strong>Your ${product.name} has arrived.</strong>
            <span>It is now sitting peacefully in your order history.</span>
          </div>
        ` : ""}
      </div>
    </article>
  `;
}

function trackingModal(orderNumber) {
  const order = state.orders.find((entry) => entry.number === orderNumber);
  if (!order) return;
  const product = getProduct(order.id);
  const status = orderStatus(order.createdAt);
  const minutes = Math.max(0, 4 - status.index);
  els.trackingModalContent.innerHTML = `
    <div class="tracking-hero">
      <p class="eyebrow">${status.index === 3 ? "Package delivered" : "On the way"}</p>
      <h2>${status.index === 3 ? "It's here!" : "Your package is moving"}</h2>
      <p>Order #${order.number} · “paid” ${credits(product.price * order.qty)}</p>
    </div>
    ${trackingMap(status.index)}
    <div class="arrival-card">
      <div>
        <h3>${status.index === 3 ? "Delivered just now" : `Arriving in ~${minutes} min`}</h3>
        <p>${status.detail}</p>
      </div>
      <strong>${status.index === 3 ? "✓" : minutes}</strong>
    </div>
    <div class="courier-card">
      <span>🚚</span>
      <div>
        <strong>Buzz the Box is on the way</strong>
        <p>box-lining straight to your imaginary destination</p>
      </div>
      <button>☎</button>
    </div>
    <div class="tracking-list">
      ${["Order confirmed", "Warehouse packed your object", "Courier picked up your package", "Delivered to your door"].map((label, index) => `
        <div class="${index <= status.index ? "active" : ""}">
          <span>${["✅", "🔎", "🛵", "🏠"][index]}</span>
          <strong>${label}</strong>
        </div>
      `).join("")}
    </div>
    ${status.index === 3 ? `
      <div class="arrival-scene delivered-pop">
        <div class="confetti" aria-hidden="true">
          ${Array.from({ length: 22 }, (_, index) => `<i style="--i:${index};"></i>`).join("")}
        </div>
        <div class="box-graphic" aria-hidden="true"></div>
        <strong>${product.name} is here.</strong>
        <span>Nothing arrived, but the feeling did.</span>
      </div>
    ` : ""}
  `;
  els.trackingModal.hidden = false;
  els.modalBackdrop.hidden = false;
}

function trackingMap(index) {
  const progress = [8, 34, 67, 92][index];
  return `
    <div class="map-card">
      <div class="map-path"></div>
      <div class="map-pin warehouse">W</div>
      <div class="map-pin home">H</div>
      <div class="carrier" style="left:${progress}%;">
        <span></span>
      </div>
    </div>
  `;
}

function orderStatus(createdAt) {
  const age = Date.now() - createdAt;
  if (age > 45000) return { index: 3, label: "It's here", detail: "Delivered to the front step of the imagination. No signature required." };
  if (age > 30000) return { index: 2, label: "Out for fake delivery", detail: "A tiny courier is circling the block with unreasonable confidence." };
  if (age > 15000) return { index: 1, label: "Packing unnecessary object", detail: "Box selected. Tissue paper fluffed. Receipt made dramatic." };
  return { index: 0, label: "Order confirmed", detail: "The warehouse has been informed that a very important fake purchase occurred." };
}

function addToCart(id) {
  const item = state.cart.find((entry) => entry.id === id);
  if (item) item.qty += 1;
  else state.cart.push({ id, qty: 1 });
  save();
  renderDrawers();
  showToast(`${getProduct(id).name} is in your pretend cart.`);
  openDrawer(els.cartDrawer);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    els.toast.classList.remove("show");
  }, 1800);
}

function selectCategory(category) {
  state.category = category;
  document.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle("active", filter.dataset.category === category);
  });
  els.filters.classList.remove("open");
  renderProducts();
  document.querySelector(".storefront").scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleWishlist(id) {
  state.wishlist = state.wishlist.includes(id)
    ? state.wishlist.filter((itemId) => itemId !== id)
    : [...state.wishlist, id];
  save();
  renderProducts();
  renderDrawers();
}

function changeQty(id, delta) {
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter((entry) => entry.id !== id);
  save();
  renderDrawers();
}

function placeOrder() {
  if (!state.cart.length) return;
  const createdAt = Date.now();
  const newOrders = state.cart.map((item, index) => ({
    ...item,
    createdAt,
    number: Math.floor(createdAt / 1000).toString().slice(-6) + index,
    checkoutSnapshot: { ...state.checkout },
    shipping: state.checkout.shipping
  }));
  state.orders = [...newOrders, ...state.orders];
  state.cart = [];
  state.checkoutStep = 0;
  save();
  renderDrawers();
  openDrawer(els.ordersDrawer);
}

function openDrawer(drawer) {
  closeDrawers();
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawers() {
  document.querySelectorAll(".drawer").forEach((drawer) => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  });
}

function openProduct(id) {
  const product = getProduct(id);
  els.modalContent.innerHTML = `
    <div class="modal-layout">
      <img src="${product.image}" alt="${product.name}">
      <div class="modal-details">
        <p class="eyebrow">${product.category} · ${product.badge}</p>
        <h2>${product.name}</h2>
        <div class="rating">${"★".repeat(Math.round(product.rating))} ${product.rating} (${product.reviews} fake reviews)</div>
        <p>${product.description}</p>
        <div class="price-line">
          <span class="price">${credits(product.price)}</span>
          <span class="delivery">${product.delivery}</span>
        </div>
        <div class="spec-list">
          <div><span>Condition</span><strong>${product.condition}</strong></div>
          <div><span>Seller</span><strong>${product.seller}</strong></div>
          <div><span>Return policy</span><strong>Return to your imagination</strong></div>
        </div>
        <button class="primary-button" data-cart="${product.id}">Add to cart</button>
        <button class="ghost-button" data-wish="${product.id}" style="width:100%;margin-top:8px;">Save for later</button>
        <div class="review-box">
          <strong>Top fake review</strong>
          <p>"${product.review}"</p>
        </div>
      </div>
    </div>
  `;
  els.modal.hidden = false;
  els.modalBackdrop.hidden = false;
}

function closeModal() {
  els.modal.hidden = true;
  els.trackingModal.hidden = true;
  els.modalBackdrop.hidden = true;
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.cart) addToCart(target.dataset.cart);
  if (target.dataset.wish) toggleWishlist(target.dataset.wish);
  if (target.dataset.view) openProduct(target.dataset.view);
  if (target.dataset.inc) changeQty(target.dataset.inc, 1);
  if (target.dataset.dec) changeQty(target.dataset.dec, -1);
  if (target.dataset.remove) {
    state.cart = state.cart.filter((item) => item.id !== target.dataset.remove);
    save();
    renderDrawers();
  }
  if (target.dataset.checkoutStep !== undefined) {
    state.checkoutStep = Number(target.dataset.checkoutStep);
    renderCheckout();
  }
  if (target.dataset.checkoutNext !== undefined && state.cart.length) {
    state.checkoutStep = Math.min(3, state.checkoutStep + 1);
    renderCheckout();
  }
  if (target.dataset.checkoutPrev !== undefined) {
    state.checkoutStep = Math.max(0, state.checkoutStep - 1);
    renderCheckout();
  }
  if (target.dataset.shipping) {
    state.checkout.shipping = target.dataset.shipping;
    save();
    renderCheckout();
  }
  if (target.dataset.destination) {
    state.checkout.destination = target.dataset.destination;
    save();
    renderCheckout();
  }
  if (target.dataset.payment) {
    state.checkout.payment = target.dataset.payment;
    save();
    renderCheckout();
  }
  if (target.dataset.trackOrder) trackingModal(target.dataset.trackOrder);
  if (target.dataset.category) selectCategory(target.dataset.category);
  if (target.dataset.placeOrder !== undefined) placeOrder();
  if (target.dataset.closeDrawer !== undefined) closeDrawers();
});

document.getElementById("cartButton").addEventListener("click", () => openDrawer(els.cartDrawer));
document.getElementById("wishlistButton").addEventListener("click", () => openDrawer(els.wishlistDrawer));
document.getElementById("ordersButton").addEventListener("click", () => openDrawer(els.ordersDrawer));
document.getElementById("heroOrdersButton").addEventListener("click", () => openDrawer(els.ordersDrawer));
document.getElementById("mobileCart").addEventListener("click", () => openDrawer(els.cartDrawer));
document.getElementById("mobileWishlist").addEventListener("click", () => openDrawer(els.wishlistDrawer));
document.getElementById("mobileOrders").addEventListener("click", () => openDrawer(els.ordersDrawer));
document.getElementById("mobileShop").addEventListener("click", closeDrawers);
document.getElementById("checkoutButton").addEventListener("click", () => {
  state.checkoutStep = 0;
  renderCheckout();
  openDrawer(els.checkoutDrawer);
});
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("closeTrackingModal").addEventListener("click", closeModal);
els.modalBackdrop.addEventListener("click", closeModal);

document.getElementById("menuButton").addEventListener("click", () => {
  els.filters.classList.toggle("open");
});

document.getElementById("dailyDealButton").addEventListener("click", () => {
  openProduct("receipt-nothing");
});

document.getElementById("homeButton").addEventListener("click", () => {
  state.search = "";
  state.category = "All";
  els.search.value = "";
  document.querySelectorAll(".filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === "All");
  });
  renderProducts();
});

document.getElementById("searchButton").addEventListener("click", () => {
  state.search = els.search.value.trim();
  renderProducts();
});

els.search.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    state.search = els.search.value.trim();
    renderProducts();
  }
});

els.sort.addEventListener("change", () => {
  state.sort = els.sort.value;
  renderProducts();
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    selectCategory(button.dataset.category);
  });
});

setInterval(renderOrders, 1000);
renderProducts();
renderDrawers();
