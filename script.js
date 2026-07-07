const formatPKR = (amount) => `PKR ${Number(amount).toLocaleString("en-PK")}`;
const orderBaseMessage = `Hi ${RESTAURANT.name}, I'd like to place an order.`;
const storageKey = "nanasKitchenCart";

let cart = JSON.parse(localStorage.getItem(storageKey) || "[]");
let menuObserver = null;
let modalItem = null;
let modalSelectedOption = null;
let modalQty = 1;

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
const mobileCurrentCategory = document.querySelector("#mobileCurrentCategory strong");
const menuGrid = document.querySelector("#menuGrid");
const dealStrip = document.querySelector("#dealStrip");
const floatingDeals = document.querySelector("#floatingDeals");
const cartPanel = document.querySelector("#cartPanel");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const customerAddressInput = document.querySelector("#customerAddress");
const itemModal = document.querySelector("#itemModal");
const modalContent = document.querySelector("#modalContent");

function renderIcons() {
  if (window.lucide) lucide.createIcons();
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function whatsappLink(message) {
  return `https://wa.me/${RESTAURANT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function setContactLinks() {
  const basicMessage = `${orderBaseMessage} Please share availability.`;
  const hero = document.querySelector("#heroWhatsApp");
  const floating = document.querySelector("#floatingWhatsApp");
  const footer = document.querySelector("#footerWhatsApp");
  if (hero) hero.href = whatsappLink(basicMessage);
  if (floating) floating.href = whatsappLink(basicMessage);
  if (footer) footer.href = whatsappLink(basicMessage);
}

function getOrderedCategories() {
  const existing = [...new Set(MENU_ITEMS.map((item) => item.category))];
  return categoryOrder.filter((category) => existing.includes(category));
}

function setActiveCategory(category) {
  const activeButton = [...document.querySelectorAll(".tab-btn")].find((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle("active", isActive);
    return isActive;
  });

  if (mobileCurrentCategory) mobileCurrentCategory.textContent = category;

  // Important mobile fix:
  // Do NOT use activeButton.scrollIntoView() here. On Android/iOS it can move
  // the full page vertically and make the menu feel stuck near the hero section.
  // This only scrolls the category tabs horizontally, keeping page scroll normal.
  if (activeButton && menuTabs && window.matchMedia("(max-width: 768px)").matches) {
    const targetLeft = activeButton.offsetLeft - menuTabs.clientWidth / 2 + activeButton.clientWidth / 2;
    menuTabs.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
  }
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

function descriptionMarkup(item, className = "menu-points") {
  if (Array.isArray(item.description)) {
    return `<ul class="${className}">${item.description.map((line) => `<li>${line}</li>`).join("")}</ul>`;
  }
  if (!item.description) return "";
  return `<p>${item.description}</p>`;
}

function lowestPrice(item) {
  if (item.priceOptions?.length) return Math.min(...item.priceOptions.map((option) => option.price));
  return item.price;
}

function cardPriceMarkup(item) {
  if (item.priceOptions?.length) {
    return `
      <div class="menu-price price-from">
        <span>From</span> ${formatPKR(lowestPrice(item))}
      </div>
      <div class="size-note">S / M / L available</div>
    `;
  }
  return `<div class="menu-price">${formatPKR(item.price)}</div>`;
}

function priceText(item) {
  if (item.priceOptions?.length) {
    return item.priceOptions.map((option) => `${option.label}: ${formatPKR(option.price)}`).join(" | ");
  }
  return formatPKR(item.price);
}

function orderLink(item) {
  return whatsappLink(`Hi, I'd like to order ${item.name} - ${priceText(item)}\nCustomer address:`);
}

function cardActions(item) {
  if (item.priceOptions?.length) {
    return `
      <div class="menu-actions">
        <button class="btn primary" type="button" data-open-detail="${item.id}">
          <i data-lucide="plus"></i>
          Choose Size
        </button>
        <button class="btn ghost" type="button" data-open-detail="${item.id}">
          View Details
        </button>
      </div>
    `;
  }

  return `
    <div class="menu-actions">
      <button class="btn primary" type="button" data-quick-add="${item.id}">
        <i data-lucide="plus"></i>
        Add
      </button>
      <button class="btn ghost" type="button" data-open-detail="${item.id}">
        Details
      </button>
    </div>
  `;
}

function cardMarkup(item) {
  return `
    <article class="menu-card" data-open-detail="${item.id}" tabindex="0" aria-label="View ${item.name} details">
      <div class="menu-img">
        <img src="${item.image}" data-fallback="${item.fallbackImage || item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src=this.dataset.fallback;" />
        ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}
      </div>
      <div class="menu-body">
        <div class="menu-card-head">
          <h3>${item.name}</h3>
        </div>
        ${descriptionMarkup(item)}
        ${cardPriceMarkup(item)}
        ${cardActions(item)}
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
  dealStrip.innerHTML = `
    <div class="deal-strip-label" id="deals">Best Deals</div>
    <div class="deal-strip-list">
      ${deals
        .slice(0, 8)
        .map(
          (deal) => `
            <button class="deal-chip" type="button" data-open-detail="${deal.id}">
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

function renderPopularDeals() {
  const popularWrap = document.querySelector("#popularDeals");
  if (!popularWrap) return;

  const popularIds = ["deal-1", "deal-2", "zinger-burger", "chicken-tikka-pizza"];
  const popularItems = popularIds
    .map((id) => MENU_ITEMS.find((item) => item.id === id))
    .filter(Boolean);

  popularWrap.innerHTML = popularItems
    .map((item) => `
      <article class="popular-card" data-open-detail="${item.id}" tabindex="0" aria-label="View ${item.name} details">
        <div class="popular-img">
          <img src="${item.image}" data-fallback="${item.fallbackImage || item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src=this.dataset.fallback;" />
        </div>
        <div class="popular-body">
          <span>${item.category}</span>
          <h3>${item.name}</h3>
          ${cardPriceMarkup(item)}
          <button class="btn primary" type="button" data-open-detail="${item.id}">
            <i data-lucide="plus"></i> Order This
          </button>
        </div>
      </article>
    `)
    .join("");
  renderIcons();
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
            <button class="floating-deal-row" type="button" data-open-detail="${deal.id}">
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
      const visibleEntries = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visibleEntries[0]) setActiveCategory(visibleEntries[0].target.dataset.menuSection);
    },
    { threshold: [0.16, 0.3, 0.48], rootMargin: "-105px 0px -55% 0px" }
  );
  sections.forEach((section) => menuObserver.observe(section));
}


function setCartOpen(open) {
  if (!cartPanel) return;
  cartPanel.classList.toggle("open", Boolean(open));
  document.body.classList.toggle("cart-open", Boolean(open));
}

function toggleCartOpen() {
  setCartOpen(!cartPanel?.classList.contains("open"));
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

function addToCart(id, optionLabel = "", optionPrice = null, quantity = 1) {
  const item = MENU_ITEMS.find((entry) => entry.id === id);
  if (!item) return;
  const finalPrice = optionPrice !== null ? Number(optionPrice) : Number(item.price);
  const finalName = optionLabel ? `${item.name} (${optionLabel})` : item.name;
  const cartId = optionLabel ? `${id}-${optionLabel}` : id;
  const existing = cart.find((line) => line.id === cartId);
  if (existing) existing.quantity += Number(quantity);
  else cart.push({ id: cartId, name: finalName, price: finalPrice, quantity: Number(quantity) });
  saveCart();
  renderCart();
  setCartOpen(true);
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
    setCartOpen(true);
    return;
  }
  const customerAddress = customerAddressInput?.value.trim() || "";
  if (!customerAddress) {
    alert("Please enter the customer's delivery address.");
    customerAddressInput?.focus();
    return;
  }
  const lines = cart.map((line) => `- ${line.quantity} x ${line.name} (${formatPKR(line.price * line.quantity)})`);
  const message = [orderBaseMessage, "", "Order:", ...lines, "", `Customer address: ${customerAddress}`, `Total: ${formatPKR(cartAmount())}`].join("\n");
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}

function modalDescription(item) {
  if (Array.isArray(item.description)) return item.description.join(" • ");
  return item.description || "Freshly prepared item from NANA'S KITCHEN.";
}

function renderModal() {
  if (!modalItem) return;
  const hasOptions = modalItem.priceOptions?.length;
  if (hasOptions && !modalSelectedOption) modalSelectedOption = modalItem.priceOptions[0];
  const unitPrice = hasOptions ? modalSelectedOption.price : modalItem.price;
  const total = unitPrice * modalQty;

  modalContent.innerHTML = `
    <div class="modal-product">
      <div class="modal-image-wrap">
        <img src="${modalItem.image}" data-fallback="${modalItem.fallbackImage || modalItem.image}" alt="${modalItem.name}" onerror="this.onerror=null;this.src=this.dataset.fallback;" />
      </div>
      <div class="modal-details">
        <span class="modal-badge">${modalItem.category}</span>
        <h2 id="modalItemName">${modalItem.name}</h2>
        <p>${modalDescription(modalItem)}</p>

        ${hasOptions ? `
          <div class="modal-option-box">
            <div class="modal-option-title">Choose size</div>
            <div class="modal-option-grid">
              ${modalItem.priceOptions
                .map(
                  (option) => `
                    <button class="modal-option ${modalSelectedOption.label === option.label ? "active" : ""}" type="button" data-modal-option="${option.label}">
                      <span>${option.label}</span>
                      <strong>${formatPKR(option.price)}</strong>
                    </button>
                  `
                )
                .join("")}
            </div>
          </div>
        ` : ""}

        <div class="modal-qty-row">
          <span>Quantity</span>
          <div class="modal-qty">
            <button type="button" data-modal-qty="-1"><i data-lucide="minus"></i></button>
            <strong>${modalQty}</strong>
            <button type="button" data-modal-qty="1"><i data-lucide="plus"></i></button>
          </div>
        </div>

        <button class="modal-add-btn" type="button" data-modal-add>
          <span>${formatPKR(total)}</span>
          <strong>Add to Cart</strong>
          <i data-lucide="arrow-right"></i>
        </button>
      </div>
    </div>
  `;
  renderIcons();
}

function openItemModal(id) {
  modalItem = MENU_ITEMS.find((item) => item.id === id);
  if (!modalItem) return;
  modalSelectedOption = modalItem.priceOptions?.[0] || null;
  modalQty = 1;
  renderModal();
  itemModal.hidden = false;
  itemModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeItemModal() {
  itemModal.hidden = true;
  itemModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalItem = null;
  modalSelectedOption = null;
  modalQty = 1;
}

function addModalSelectionToCart() {
  if (!modalItem) return;
  if (modalItem.priceOptions?.length) {
    addToCart(modalItem.id, modalSelectedOption.label, modalSelectedOption.price, modalQty);
  } else {
    addToCart(modalItem.id, "", modalItem.price, modalQty);
  }
  closeItemModal();
}

function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");
  if (!toggle || !header) return;
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
  const closeModal = event.target.closest("[data-close-modal]");
  if (closeModal) return closeItemModal();

  const modalOption = event.target.closest("[data-modal-option]");
  if (modalOption && modalItem?.priceOptions) {
    modalSelectedOption = modalItem.priceOptions.find((option) => option.label === modalOption.dataset.modalOption) || modalSelectedOption;
    return renderModal();
  }

  const modalQtyButton = event.target.closest("[data-modal-qty]");
  if (modalQtyButton) {
    modalQty = Math.max(1, modalQty + Number(modalQtyButton.dataset.modalQty));
    return renderModal();
  }

  if (event.target.closest("[data-modal-add]")) return addModalSelectionToCart();

  const tab = event.target.closest("[data-target]");
  if (tab) {
    const target = document.getElementById(tab.dataset.target);
    if (target) {
      const stickyOffset = window.matchMedia("(max-width: 768px)").matches ? 116 : 120;
      const y = target.getBoundingClientRect().top + window.scrollY - stickyOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
    setActiveCategory(tab.dataset.category);
    return;
  }

  const quickAdd = event.target.closest("[data-quick-add]");
  if (quickAdd) {
    addToCart(quickAdd.dataset.quickAdd);
    return;
  }

  const openDetail = event.target.closest("[data-open-detail]");
  if (openDetail) {
    event.preventDefault();
    openItemModal(openDetail.dataset.openDetail);
    return;
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) return addToCart(addButton.dataset.add, addButton.dataset.option || "", addButton.dataset.price || null);

  const quantityButton = event.target.closest("[data-qty]");
  if (quantityButton) return changeQuantity(quantityButton.dataset.qty, Number(quantityButton.dataset.dir));

  const dealsToggle = event.target.closest("[data-toggle-deals]");
  if (dealsToggle) return floatingDeals.classList.toggle("open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !itemModal.hidden) closeItemModal();
  if (event.key === "Enter") {
    const card = event.target.closest(".menu-card[data-open-detail]");
    if (card) openItemModal(card.dataset.openDetail);
  }
});

function initHeroVideo() {
  const video = document.querySelector(".hero-video");
  if (!video) return;
  video.muted = true;
  video.playsInline = true;
  video.load();
  const playPromise = video.play();
  if (playPromise?.catch) playPromise.catch(() => document.body.classList.add("hero-video-paused"));
}

document.querySelector("#cartToggle")?.addEventListener("click", toggleCartOpen);
document.querySelector("#cartClose")?.addEventListener("click", () => setCartOpen(false));
document.querySelector("#sendOrder")?.addEventListener("click", sendCartOrder);

setContactLinks();
renderTabs();
renderDealStrip();
renderFloatingDeals();
renderPopularDeals();
renderMenu();
renderCart();
renderIcons();
initNavigation();
initHeroVideo();
