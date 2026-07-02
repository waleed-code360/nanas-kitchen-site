const formatPKR = (amount) => `PKR ${Number(amount).toLocaleString("en-PK")}`;
const orderBaseMessage = `Hi ${RESTAURANT.name}, I'd like to place an order.`;
const storageKey = "nanasKitchenCart";

let cart = JSON.parse(localStorage.getItem(storageKey) || "[]");
let menuObserver = null;

const categoryOrder = [
  "Best Deals",
  "Burgers",
  "Pizza Flavours",
  "Signature Pizza",
  "Wraps",
  "Sandwiches",
  "Fries",
  "Sides",
  "Our Special",
  "Drinks & Extras"
];

const menuTabs = document.querySelector("#menuTabs");
const menuGrid = document.querySelector("#menuGrid");
const dealStrip = document.querySelector("#dealStrip");
const floatingDeals = document.querySelector("#floatingDeals");
const cartPanel = document.querySelector("#cartPanel");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const customerAddressInput = document.querySelector("#customerAddress");

function renderIcons() {
  if (window.lucide) lucide.createIcons();
}

function slugify(value) {
  return String(value).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function whatsappLink(message) {
  return `https://wa.me/${RESTAURANT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function setContactLinks() {
  const basicMessage = `${orderBaseMessage} Please share availability.`;
  document.querySelector("#heroWhatsApp").href = whatsappLink(basicMessage);
  document.querySelector("#floatingWhatsApp").href = whatsappLink(basicMessage);
  document.querySelector("#footerWhatsApp").href = whatsappLink(basicMessage);
}

function getOrderedCategories() {
  const existing = [...new Set(MENU_ITEMS.map((item) => item.category))];
  return categoryOrder.filter((category) => existing.includes(category));
}

function setActiveCategory(category) {
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });
}

function renderTabs() {
  const categories = getOrderedCategories();
  menuTabs.innerHTML = categories
    .map(
      (category, index) => `
        <button class="tab-btn ${index === 0 ? "active" : ""}" data-category="${category}" data-target="menu-${slugify(category)}">
          ${category}
        </button>
      `
    )
    .join("");
}

function descriptionMarkup(item) {
  if (Array.isArray(item.description)) {
    return `<ul class="menu-points">${item.description.map((line) => `<li>${line}</li>`).join("")}</ul>`;
  }

  if (!item.description) return "";
  return `<p>${item.description}</p>`;
}

function priceText(item) {
  if (item.priceOptions?.length) {
    return item.priceOptions.map((option) => `${option.label}: ${formatPKR(option.price)}`).join(" | ");
  }

  return formatPKR(item.price);
}

function priceMarkup(item) {
  if (item.priceOptions?.length) {
    return `
      <div class="option-grid">
        ${item.priceOptions
          .map(
            (option) => `
              <button class="option-btn" data-add="${item.id}" data-option="${option.label}" data-price="${option.price}">
                <span>${option.label}</span>
                <strong>${formatPKR(option.price)}</strong>
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  return `<div class="menu-price">${formatPKR(item.price)}</div>`;
}

function orderLink(item) {
  return whatsappLink(`Hi, I'd like to order ${item.name} - ${priceText(item)}\nCustomer address:`);
}

function actionMarkup(item) {
  if (item.priceOptions?.length) {
    return `
      <div class="menu-actions compact-actions">
        <a class="btn whatsapp full" href="${orderLink(item)}" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-whatsapp"></i>
          Order on WhatsApp
        </a>
      </div>
    `;
  }

  return `
    <div class="menu-actions">
      <button class="btn primary" data-add="${item.id}">
        <i data-lucide="plus"></i>
        Add
      </button>
      <a class="btn whatsapp" href="${orderLink(item)}" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-whatsapp"></i>
        Order
      </a>
    </div>
  `;
}

function cardMarkup(item) {
  return `
    <article class="menu-card">
      <div class="menu-img">
        <img src="${item.image}" data-fallback="${item.fallbackImage || item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src=this.dataset.fallback;" />
        ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}
      </div>
      <div class="menu-body">
        <div class="menu-card-head">
          <h3>${item.name}</h3>
        </div>
        ${descriptionMarkup(item)}
        ${priceMarkup(item)}
        ${actionMarkup(item)}
      </div>
    </article>
  `;
}

function renderMenu() {
  const categories = getOrderedCategories();

  menuGrid.innerHTML = categories
    .map((category) => {
      const items = MENU_ITEMS.filter((item) => item.category === category);
      return `
        <section class="menu-category-section" id="menu-${slugify(category)}" data-menu-section="${category}">
          <div class="category-title-row">
            <div>
              <span>${items.length} items</span>
              <h2>${category}</h2>
            </div>
            ${category === "Best Deals" ? `<a class="category-whatsapp" href="${whatsappLink("Hi, please share today's best deals.")}" target="_blank" rel="noreferrer"><i class="fa-brands fa-whatsapp"></i> Ask for deals</a>` : ""}
          </div>
          <div class="category-grid">
            ${items.map(cardMarkup).join("")}
          </div>
        </section>
      `;
    })
    .join("");

  renderIcons();
  observeMenuSections();
}

function renderDealStrip() {
  const deals = MENU_ITEMS.filter((item) => item.category === "Best Deals");
  const featuredDeals = deals.slice(0, 8);

  dealStrip.innerHTML = `
    <div class="deal-strip-label" id="deals">Best Deals</div>
    <div class="deal-strip-list">
      ${featuredDeals
        .map(
          (deal) => `
            <button class="deal-chip" data-add="${deal.id}">
              <span>${deal.name}</span>
              <strong>${formatPKR(deal.price)}</strong>
            </button>
          `
        )
        .join("")}
      <a class="deal-chip view-all" href="#menu-best-deals">View all</a>
    </div>
  `;
}

function renderFloatingDeals() {
  const deals = MENU_ITEMS.filter((item) => item.category === "Best Deals").slice(0, 3);
  floatingDeals.innerHTML = `
    <button class="floating-deals-toggle" type="button" data-toggle-deals>
      <i data-lucide="badge-percent"></i>
      <span>Deals</span>
    </button>
    <div class="floating-deals-card">
      <strong>Quick Deals</strong>
      ${deals
        .map(
          (deal) => `
            <button class="floating-deal-row" data-add="${deal.id}">
              <span>${deal.name}</span>
              <b>${formatPKR(deal.price)}</b>
            </button>
          `
        )
        .join("")}
      <a href="#menu-best-deals">See all deals</a>
    </div>
  `;
}

function observeMenuSections() {
  if (menuObserver) menuObserver.disconnect();

  const sections = document.querySelectorAll("[data-menu-section]");
  menuObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries[0]) setActiveCategory(visibleEntries[0].target.dataset.menuSection);
    },
    { threshold: [0.18, 0.32, 0.5], rootMargin: "-110px 0px -55% 0px" }
  );

  sections.forEach((section) => menuObserver.observe(section));
}

function saveCart() {
  localStorage.setItem(storageKey, JSON.stringify(cart));
}

function cartQuantity() {
  return cart.reduce((sum, line) => sum + line.quantity, 0);
}

function cartAmount() {
  return cart.reduce((sum, line) => sum + line.price * line.quantity, 0);
}

function addToCart(id, optionLabel = "", optionPrice = null) {
  const item = MENU_ITEMS.find((entry) => entry.id === id);
  if (!item) return;

  const finalPrice = optionPrice !== null ? Number(optionPrice) : Number(item.price);
  const finalName = optionLabel ? `${item.name} (${optionLabel})` : item.name;
  const cartId = optionLabel ? `${id}-${optionLabel}` : id;

  const existing = cart.find((line) => line.id === cartId);
  if (existing) existing.quantity += 1;
  else cart.push({ id: cartId, name: finalName, price: finalPrice, quantity: 1 });

  saveCart();
  renderCart();
  cartPanel.classList.add("open");
}

function changeQuantity(id, direction) {
  const existing = cart.find((line) => line.id === id);
  if (!existing) return;

  existing.quantity += direction;
  cart = cart.filter((line) => line.quantity > 0);
  saveCart();
  renderCart();
}

function renderCart() {
  cartCount.textContent = cartQuantity();
  cartTotal.textContent = formatPKR(cartAmount());

  if (!cart.length) {
    cartItems.innerHTML = `<p class="empty-cart">Your cart is empty. Add items and send your order on WhatsApp.</p>`;
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (line) => `
        <div class="cart-line">
          <div>
            <strong>${line.name}</strong>
            <span>${formatPKR(line.price)} each</span>
          </div>
          <div class="qty-group" aria-label="${line.name} quantity">
            <button class="qty-btn" data-qty="${line.id}" data-dir="-1" aria-label="Decrease ${line.name}"><i data-lucide="minus"></i></button>
            <span>${line.quantity}</span>
            <button class="qty-btn" data-qty="${line.id}" data-dir="1" aria-label="Increase ${line.name}"><i data-lucide="plus"></i></button>
          </div>
        </div>
      `
    )
    .join("");

  renderIcons();
}

function sendCartOrder() {
  if (!cart.length) {
    cartPanel.classList.add("open");
    return;
  }

  const customerAddress = customerAddressInput?.value.trim() || "";

  if (!customerAddress) {
    alert("Please enter the customer's delivery address.");
    customerAddressInput?.focus();
    return;
  }

  const lines = cart.map((line) => `- ${line.quantity} x ${line.name} (${formatPKR(line.price * line.quantity)})`);
  const message = [
    orderBaseMessage,
    "",
    "Order:",
    ...lines,
    "",
    `Customer address: ${customerAddress}`,
    `Total: ${formatPKR(cartAmount())}`
  ].join("\n");

  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}

function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-target]");
  if (tab) {
    const target = document.getElementById(tab.dataset.target);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveCategory(tab.dataset.category);
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add, addButton.dataset.option || "", addButton.dataset.price || null);

  const quantityButton = event.target.closest("[data-qty]");
  if (quantityButton) changeQuantity(quantityButton.dataset.qty, Number(quantityButton.dataset.dir));

  const dealsToggle = event.target.closest("[data-toggle-deals]");
  if (dealsToggle) floatingDeals.classList.toggle("open");
});

document.querySelector("#cartToggle").addEventListener("click", () => cartPanel.classList.toggle("open"));
document.querySelector("#cartClose").addEventListener("click", () => cartPanel.classList.remove("open"));
document.querySelector("#sendOrder").addEventListener("click", sendCartOrder);

function initHeroVideo() {
  const video = document.querySelector(".hero-video");
  if (!video) return;

  video.muted = true;
  video.playsInline = true;

  const playPromise = video.play();
  if (playPromise?.catch) {
    playPromise.catch(() => {
      document.body.classList.add("hero-video-paused");
    });
  }
}

setContactLinks();
renderTabs();
renderDealStrip();
renderFloatingDeals();
renderMenu();
renderCart();
renderIcons();
initNavigation();
initHeroVideo();
