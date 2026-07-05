const RESTAURANT = {
  name: "NANA'S KITCHEN",
  tagline: "ORDER NOW",
  location: "Shop no9, Ground Floor, K-1 Block Marhaba Mall, Valencia Town Lahore",
  whatsappNumber: "923216311367",
  phoneNumbers: ["0321-6311367", "0323-4407289"],
  openingHours: "1:00 PM - 3:00 AM"
};

const MENU_ITEMS = [
  {
    id: "cheetos-burger",
    name: "Cheetos Burger",
    category: "Burgers",
    price: 600,
    badge: "Popular",
    image: "assets/images/menu/zigzag-burger.jpg",
    description: "Crunchy and flavorful burger from the main burger menu."
  },
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    category: "Burgers",
    price: 450,
    badge: "Popular",
    image: "assets/images/menu/zigzag-burger.jpg",
    description: "Crispy chicken burger served hot and fresh."
  },
  {
    id: "tower-burger",
    name: "Tower Burger",
    category: "Burgers",
    price: 650,
    badge: "",
    image: "assets/images/menu/zigzag-burger.jpg",
    description: "A bigger stacked burger option for heavier cravings."
  },
  {
    id: "mighty-burger",
    name: "Mighty Burger",
    category: "Burgers",
    price: 700,
    badge: "Big Bite",
    image: "assets/images/menu/zigzag-burger.jpg",
    description: "A hearty burger option from Nana's burger menu."
  },
  {
    id: "crispy-chicken-burger",
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 430,
    badge: "",
    image: "assets/images/menu/filet-burger.jpg",
    description: "Crispy chicken burger served hot."
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    category: "Burgers",
    price: 430,
    badge: "",
    image: "assets/images/menu/filet-burger.jpg",
    description: "Classic chicken burger."
  },
  {
    id: "shami-burger",
    name: "Shami Burger",
    category: "Burgers",
    price: 200,
    badge: "Budget",
    image: "assets/images/menu/zigzag-burger.jpg",
    description: "A lighter and budget-friendly burger option."
  },
  {
    id: "special-shami-burger",
    name: "Special Shami Burger",
    category: "Burgers",
    price: 270,
    badge: "",
    image: "assets/images/menu/zigzag-burger.jpg",
    description: "Special version of the shami burger."
  },
  {
    id: "pizza-burger",
    name: "Pizza Burger",
    category: "Burgers",
    price: 700,
    badge: "Fusion",
    image: "assets/images/menu/filet-burger.jpg",
    description: "Burger with a pizza-style flavor twist."
  },
  {
    id: "nanas-crunchy-burger",
    name: "Nana's crunchy Burger",
    category: "Burgers",
    price: 650,
    badge: "Signature",
    image: "assets/images/menu/zigzag-burger.jpg",
    description: "One of Nana's signature crunchy burger options."
  },
  {
    id: "tikka-patty-burger",
    name: "Tikka Patty Burger",
    category: "Burgers",
    price: 430,
    badge: "",
    image: "assets/images/menu/filet-burger.jpg",
    description: "Burger with tikka-style patty flavor."
  },

  {
    id: "sp-shawarma",
    name: "SP Shawarma",
    category: "Wraps",
    price: 300,
    badge: "",
    image: "assets/images/menu/nanas-wrap.jpg",
    description: "Classic shawarma wrap."
  },
  {
    id: "cheese-shawarma",
    name: "Cheese Shawarma",
    category: "Wraps",
    price: 350,
    badge: "",
    image: "assets/images/menu/cheesy-wrap-grill.jpg",
    description: "Shawarma with cheesy flavor."
  },
  {
    id: "platter-shawarma",
    name: "Platter Shawarma",
    category: "Wraps",
    price: 600,
    badge: "",
    image: "assets/images/menu/nanas-wrap.jpg",
    description: "A fuller shawarma platter option."
  },
  {
    id: "zinger-shawarma",
    name: "Zinger Shawarma",
    category: "Wraps",
    price: 400,
    badge: "",
    image: "assets/images/menu/fried-chicken-wrap.jpg",
    description: "Shawarma with zinger-style filling."
  },
  {
    id: "paratha-roll-chicken",
    name: "Paratha Roll (Chicken)",
    category: "Wraps",
    price: 400,
    badge: "",
    image: "assets/images/menu/fried-chicken-wrap.jpg",
    description: "Chicken paratha roll."
  },
  {
    id: "paratha-roll-zinger",
    name: "Paratha Roll (Zinger)",
    category: "Wraps",
    price: 400,
    badge: "",
    image: "assets/images/menu/fried-chicken-wrap.jpg",
    description: "Zinger paratha roll."
  },
  {
    id: "shawarma-partha",
    name: "Shawarma Partha",
    category: "Wraps",
    price: 400,
    badge: "",
    image: "assets/images/menu/cheesy-wrap-paper.jpg",
    description: "Shawarma wrapped in paratha."
  },
  {
    id: "zingerta-wrap",
    name: "Zingerta Wrap",
    category: "Wraps",
    price: 600,
    badge: "Popular",
    image: "assets/images/menu/wreto-wrap.jpg",
    description: "Special wrap exactly as named on the menu."
  },
  {
    id: "nanas-wrap",
    name: "Nana's Wrap",
    category: "Wraps",
    price: 600,
    badge: "Signature",
    image: "assets/images/menu/nanas-wrap.jpg",
    description: "Nana's own wrap option."
  },
  {
    id: "arabian-wrap",
    name: "Arabian wrap",
    category: "Wraps",
    price: 700,
    badge: "",
    image: "assets/images/menu/cheesy-wrap-paper.jpg",
    description: "Arabian-style wrap."
  },
  {
    id: "filly-wrap",
    name: "Filly Wrap",
    category: "Wraps",
    price: 600,
    badge: "",
    image: "assets/images/menu/cheesy-wrap-paper.jpg",
    description: "Another wrap option from the menu."
  },

  {
    id: "club-sandwich",
    name: "Club Sandwich",
    category: "Sandwiches",
    price: 650,
    badge: "",
    image: "assets/images/menu/club-sandwich.jpg",
    description: "Classic club sandwich."
  },
  {
    id: "tikka-sandwich",
    name: "Tikka Sandwich",
    category: "Sandwiches",
    price: 650,
    badge: "",
    image: "assets/images/menu/club-sandwich.jpg",
    description: "Sandwich with tikka flavor."
  },
  {
    id: "crispy-sandwich",
    name: "Crispy Sandwich",
    category: "Sandwiches",
    price: 650,
    badge: "",
    image: "assets/images/menu/club-sandwich.jpg",
    description: "Crispy chicken sandwich."
  },
  {
    id: "mughlai-sandwich",
    name: "Mughlai Sandwich",
    category: "Sandwiches",
    price: 650,
    badge: "",
    image: "assets/images/menu/club-sandwich.jpg",
    description: "Mughlai-style sandwich."
  },

  {
    id: "hot-wings-10pc",
    name: "Hot Wings (10pc)",
    category: "Sides",
    price: 750,
    badge: "Popular",
    image: "assets/images/menu/nana-promo.jpg",
    description: "10 pieces of hot wings."
  },
  {
    id: "chicken-nugget",
    name: "Chicken Nugget",
    category: "Sides",
    price: 650,
    badge: "",
    image: "assets/images/menu/nana-promo.jpg",
    description: "Chicken nuggets served hot."
  },
  {
    id: "french-fries-side",
    name: "French Fries",
    category: "Sides",
    price: 250,
    badge: "",
    image: "assets/images/menu/nana-promo.jpg",
    description: "Classic fries."
  },
  {
    id: "hot-shots",
    name: "Hot Shots",
    category: "Sides",
    price: 650,
    badge: "",
    image: "assets/images/menu/nana-promo.jpg",
    description: "Spicy bite-sized chicken option."
  },

  {
    id: "loaded-fries",
    name: "Loaded Fries",
    category: "Fries",
    price: 700,
    badge: "Popular",
    image: "assets/images/menu/nana-promo.jpg",
    description: "Loaded fries with rich toppings."
  },
  {
    id: "cheese-fries",
    name: "Cheese Fries",
    category: "Fries",
    price: 450,
    badge: "",
    image: "assets/images/menu/nana-promo.jpg",
    description: "Fries with cheese topping."
  },
  {
    id: "garlic-mayo-fries",
    name: "Garlic Mayo Fries",
    category: "Fries",
    price: 300,
    badge: "",
    image: "assets/images/menu/nana-promo.jpg",
    description: "Fries with garlic mayo flavor."
  },
  {
    id: "fries-small",
    name: "Fries Small",
    category: "Fries",
    price: 150,
    badge: "Budget",
    image: "assets/images/menu/nana-promo.jpg",
    description: "Small portion fries."
  },
  {
    id: "fries-large",
    name: "Fries Large",
    category: "Fries",
    price: 300,
    badge: "",
    image: "assets/images/menu/nana-promo.jpg",
    description: "Large portion fries."
  },
  {
    id: "crunchy-loaded-fries",
    name: "Crunchy loaded Fries",
    category: "Fries",
    price: 600,
    badge: "",
    image: "assets/images/menu/nana-promo.jpg",
    description: "Crunchy loaded fries."
  },

  {
    id: "grill-burger",
    name: "Grill Burger",
    category: "Our Special",
    price: 450,
    badge: "",
    image: "assets/images/menu/zigzag-burger.jpg",
    description: "Special grilled burger."
  },
  {
    id: "grill-sandwich",
    name: "Grill Sandwich",
    category: "Our Special",
    price: 650,
    badge: "",
    image: "assets/images/menu/club-sandwich.jpg",
    description: "Grilled sandwich."
  },
  {
    id: "grill-shawarma",
    name: "Grill Shawarma",
    category: "Our Special",
    price: 400,
    badge: "",
    image: "assets/images/menu/nanas-wrap.jpg",
    description: "Grilled shawarma."
  },
  {
    id: "chicken-cheese-pasta",
    name: "Chicken Cheese Pasta",
    category: "Our Special",
    price: 750,
    badge: "Popular",
    image: "assets/images/menu/pasta.jpg",
    description: "Chicken pasta with cheese."
  },
  {
    id: "pizza-pratha",
    name: "Pizza Pratha",
    category: "Our Special",
    price: 750,
    badge: "",
    image: "assets/images/menu/pizza-pratha.jpg",
    description: "Special pizza pratha exactly as written on the menu."
  },

  {
    id: "tea",
    name: "Tea",
    category: "Drinks & Extras",
    price: 100,
    badge: "",
    image: "assets/images/menu/special-drinks-2.jpg",
    description: "Regular tea."
  },
  {
    id: "sp-tea",
    name: "Sp Tea",
    category: "Drinks & Extras",
    price: 150,
    badge: "",
    image: "assets/images/menu/special-drinks-2.jpg",
    description: "Special tea."
  },
  {
    id: "lemon-soda",
    name: "Lemon Soda",
    category: "Drinks & Extras",
    price: 150,
    badge: "",
    image: "assets/images/menu/lemon-soda.jpg",
    description: "Refreshing lemon soda."
  },
  {
    id: "diet-soda",
    name: "Diet Soda",
    category: "Drinks & Extras",
    price: 200,
    badge: "",
    image: "assets/images/menu/special-drinks-1.jpg",
    description: "Diet soda option."
  },
  {
    id: "sting-soda",
    name: "Sting Soda",
    category: "Drinks & Extras",
    price: 200,
    badge: "",
    image: "assets/images/menu/special-drinks-2.jpg",
    description: "Energy drink option."
  },
  {
    id: "mayo-dip",
    name: "Mayo Dip",
    category: "Drinks & Extras",
    price: 50,
    badge: "Extra",
    image: "assets/images/menu/special-drinks-1.jpg",
    description: "Extra mayo dip."
  },
  {
    id: "mint-margarita-drink",
    name: "Mint Margarita Drink",
    category: "Drinks & Extras",
    price: 200,
    badge: "Cool",
    image: "assets/images/menu/mint-margarita.jpg",
    description: "Mint Margarita Drink - Rs. 200/-"
  },

  {
    id: "chicken-tikka-pizza",
    name: "Chicken Tikka + Cold Drink",
    category: "Pizza Flavours",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: "Onion, Capsicum, Tomato, Black Olives, Tikka Chicken, Cheese",
    priceOptions: [
      { label: "S", price: 730 },
      { label: "M", price: 1230 },
      { label: "L", price: 1650 }
    ]
  },
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza + Cold Drink",
    category: "Pizza Flavours",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: "Onion, Capsicum, Tomato, Chicken Pepperoni, Cheese",
    priceOptions: [
      { label: "S", price: 730 },
      { label: "M", price: 1230 },
      { label: "L", price: 1650 }
    ]
  },
  {
    id: "chicken-fajita-pizza",
    name: "Chicken Fajita + Cold Drink",
    category: "Pizza Flavours",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-cheesy-olives.jpg",
    description: "Onion, Capsicum, Fajita Chicken, Cheese",
    priceOptions: [
      { label: "S", price: 730 },
      { label: "M", price: 1230 },
      { label: "L", price: 1650 }
    ]
  },
  {
    id: "seekh-kabab-pizza",
    name: "Seekh kabab Pizza + Cold Drink",
    category: "Pizza Flavours",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: "Onion, Capsicum, Tomato, Black Olives, K&K Chappli Kabab",
    priceOptions: [
      { label: "S", price: 730 },
      { label: "M", price: 1230 },
      { label: "L", price: 1650 }
    ]
  },
  {
    id: "mughlai-pizza",
    name: "Mughlai Pizza + Cold Drink",
    category: "Pizza Flavours",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-veggie.jpg",
    description: "Onion, Capsicum, Tomato, Black Olives, Mughlai Chicken",
    priceOptions: [
      { label: "S", price: 730 },
      { label: "M", price: 1230 },
      { label: "L", price: 1650 }
    ]
  },
  {
    id: "cheese-lover-pizza",
    name: "Cheese lover Pizza + Cold Drink",
    category: "Pizza Flavours",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-cheesy-olives.jpg",
    description: "Onion",
    priceOptions: [
      { label: "S", price: 730 },
      { label: "M", price: 1230 },
      { label: "L", price: 1650 }
    ]
  },
  {
    id: "veggie-delight-pizza",
    name: "Veggie Delight Pizza + Cold Drink",
    category: "Pizza Flavours",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-veggie.jpg",
    description: "Pizza with lots of pure Mozzarella Cheese",
    priceOptions: [
      { label: "S", price: 730 },
      { label: "M", price: 1230 },
      { label: "L", price: 1650 }
    ]
  },
  {
    id: "maxi-pizza",
    name: "Maxi Pizza + Cold Drink",
    category: "Pizza Flavours",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: "Onion, Capsicum, Tomato, Olives, Mashrooms, Sweet corn, Bell Pepper, Lots of Cheese",
    priceOptions: [
      { label: "S", price: 730 },
      { label: "M", price: 1230 },
      { label: "L", price: 1650 }
    ]
  },
  {
    id: "kelzon-pizza",
    name: "kelzon Pizza + Cold Drink",
    category: "Pizza Flavours",
    badge: "S / M / L",
    image: "assets/images/menu/kelzon-pizza.jpg",
    description: "Pizza flavour exactly as written on the menu.",
    priceOptions: [
      { label: "S", price: 800 },
      { label: "M", price: 1300 },
      { label: "L", price: 1850 }
    ]
  },

  {
    id: "malai-boti-pizza",
    name: "Malai Boti Pizza + Cold drink",
    category: "Signature Pizza",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-veggie.jpg",
    description: "Onion, Capsicum, Tomato, Olives, Mashrooms, Sweet corns, Bell Pepper, Lots of Cheese",
    priceOptions: [
      { label: "S", price: 800 },
      { label: "M", price: 1300 },
      { label: "L", price: 1850 }
    ]
  },
  {
    id: "behari-kabab-pizza",
    name: "Behari kabab Pizza + Cold Drink",
    category: "Signature Pizza",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: "Signature Behari kabab pizza combo.",
    priceOptions: [
      { label: "S", price: 800 },
      { label: "M", price: 1300 },
      { label: "L", price: 1850 }
    ]
  },
  {
    id: "peri-peri-pizza",
    name: "Peri Peri Pizza",
    category: "Signature Pizza",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: "Onion, Capsicum, Tomato, Olives, Peri Peri Chicken, Cheese",
    priceOptions: [
      { label: "S", price: 800 },
      { label: "M", price: 1300 },
      { label: "L", price: 1850 }
    ]
  },
  {
    id: "supreme-pizza",
    name: "Supreme Pizza",
    category: "Signature Pizza",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: "Sausages, Tikka, Onion, Capsicum, Mashrooms",
    priceOptions: [
      { label: "S", price: 800 },
      { label: "M", price: 1300 },
      { label: "L", price: 1850 }
    ]
  },
  {
    id: "chez-stuffer-pizza",
    name: "Chez Stuffer Pizza",
    category: "Signature Pizza",
    badge: "S / M / L",
    image: "assets/images/menu/pizza-cheesy-olives.jpg",
    description: "Sausages, Tikka, Onion, Capsicum, Mashrooms",
    priceOptions: [
      { label: "S", price: 850 },
      { label: "M", price: 1400 },
      { label: "L", price: 1900 }
    ]
  },

  {
    id: "deal-1",
    name: "Deal 1",
    category: "Best Deals",
    price: 550,
    badge: "Deal",
    image: "assets/images/menu/zigzag-burger.jpg",
    description: ["1 Zinger", "1 Fries", "1 Coke (350ml)"]
  },
  {
    id: "deal-2",
    name: "Deal 2",
    category: "Best Deals",
    price: 870,
    badge: "Deal",
    image: "assets/images/menu/nana-promo.jpg",
    description: ["1 Shawarma", "1 Zinger", "1 Fries", "1 Coke (500ml)"]
  },
  {
    id: "deal-3",
    name: "Deal 3",
    category: "Best Deals",
    price: 1100,
    badge: "Deal",
    image: "assets/images/menu/nana-promo.jpg",
    description: ["2 Shawarma", "2 Shami Burger", "1 Fries", "1 Coke (500ml)"]
  },
  {
    id: "deal-4",
    name: "Deal 4",
    category: "Best Deals",
    price: 1290,
    badge: "Deal",
    image: "assets/images/menu/nana-promo.jpg",
    description: ["1 Wings", "1 Club Sandwich", "1 Coke (350ml)"]
  },
  {
    id: "deal-5",
    name: "Deal 5",
    category: "Best Deals",
    price: 1100,
    badge: "Deal",
    image: "assets/images/menu/nana-promo.jpg",
    description: ["1 Crispy Chicken", "1 Crispy Sandwich", "1 Coke (350ml)"]
  },
  {
    id: "deal-6",
    name: "Deal 6",
    category: "Best Deals",
    price: 3550,
    badge: "Deal",
    image: "assets/images/menu/nana-promo.jpg",
    description: ["5 Shawarma", "5 Zinger", "1 Family Fries", "1 Coke (1.5ltr)"]
  },
  {
    id: "deal-7",
    name: "Deal 7",
    category: "Best Deals",
    price: 1000,
    badge: "Deal",
    image: "assets/images/menu/zigzag-burger.jpg",
    description: ["2 Zinger", "1 Fries", "1 Coke (500ml)"]
  },
  {
    id: "deal-8",
    name: "Deal 8",
    category: "Best Deals",
    price: 700,
    badge: "Deal",
    image: "assets/images/menu/nana-promo.jpg",
    description: ["1 Shami Burger", "1 Shawarma", "1 Fries", "1 Coke (500ml)"]
  },
  {
    id: "deal-9",
    name: "Deal 9",
    category: "Best Deals",
    price: 1300,
    badge: "Deal",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: ["1 Zinger Burger", "1 Small Pizza", "1 Fries", "1 Coke (500ml)"]
  },
  {
    id: "deal-10",
    name: "Deal 10",
    category: "Best Deals",
    price: 1200,
    badge: "Deal",
    image: "assets/images/menu/nana-promo.jpg",
    description: ["1 Zinger + Fries", "1 Sandwich", "1 Coke (500ml)"]
  },
  {
    id: "deal-11",
    name: "Deal 11",
    category: "Best Deals",
    price: 1650,
    badge: "Deal",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: ["5 Pc Wings", "1 Zinger Burger", "1 Small Pizza", "1 Coke (500ml)"]
  },
  {
    id: "deal-12",
    name: "Deal 12",
    category: "Best Deals",
    price: 1750,
    badge: "Deal",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: ["2 Small Pizza", "+ 1 Free Pizza"]
  },
  {
    id: "deal-13",
    name: "Deal 13",
    category: "Best Deals",
    price: 3300,
    badge: "Deal",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: ["2 Medium Pizza", "+ 1 Free Pizza"]
  },
  {
    id: "deal-14",
    name: "Deal 14",
    category: "Best Deals",
    price: 4300,
    badge: "Deal",
    image: "assets/images/menu/pizza-loaded.jpg",
    description: ["2 Large Pizza", "+ 1 Free Pizza"]
  }
];


/* FINAL LOCAL IMAGE OVERRIDES - V11 */
const FINAL_ITEM_IMAGES = {
  "cheetos-burger": "assets/images/menu/zigzag-burger.jpg",
  "zinger-burger": "assets/images/menu/zigzag-burger.jpg",
  "tower-burger": "assets/images/menu/zigzag-burger.jpg",
  "mighty-burger": "assets/images/menu/zigzag-burger.jpg",
  "crispy-chicken-burger": "assets/images/menu/filet-burger.jpg",
  "chicken-burger": "assets/images/menu/filet-burger.jpg",
  "shami-burger": "assets/images/menu/zigzag-burger.jpg",
  "special-shami-burger": "assets/images/menu/zigzag-burger.jpg",
  "pizza-burger": "assets/images/menu/filet-burger.jpg",
  "nanas-crunchy-burger": "assets/images/menu/zigzag-burger.jpg",
  "tikka-patty-burger": "assets/images/menu/filet-burger.jpg",
  "sp-shawarma": "assets/images/menu/nanas-wrap.jpg",
  "cheese-shawarma": "assets/images/menu/cheesy-wrap-grill.jpg",
  "platter-shawarma": "assets/images/menu/nanas-wrap.jpg",
  "zinger-shawarma": "assets/images/menu/fried-chicken-wrap.jpg",
  "paratha-roll-chicken": "assets/images/menu/fried-chicken-wrap.jpg",
  "paratha-roll-zinger": "assets/images/menu/fried-chicken-wrap.jpg",
  "shawarma-partha": "assets/images/menu/cheesy-wrap-paper.jpg",
  "zingerta-wrap": "assets/images/menu/wreto-wrap.jpg",
  "nanas-wrap": "assets/images/menu/nanas-wrap.jpg",
  "arabian-wrap": "assets/images/menu/cheesy-wrap-paper.jpg",
  "filly-wrap": "assets/images/menu/cheesy-wrap-paper.jpg",
  "club-sandwich": "assets/images/menu/club-sandwich.jpg",
  "tikka-sandwich": "assets/images/menu/club-sandwich.jpg",
  "crispy-sandwich": "assets/images/menu/club-sandwich.jpg",
  "mughlai-sandwich": "assets/images/menu/club-sandwich.jpg",
  "hot-wings-10pc": "assets/images/menu/nana-promo.jpg",
  "chicken-nugget": "assets/images/menu/nana-promo.jpg",
  "french-fries-side": "assets/images/menu/nana-promo.jpg",
  "hot-shots": "assets/images/menu/nana-promo.jpg",
  "loaded-fries": "assets/images/menu/nana-promo.jpg",
  "cheese-fries": "assets/images/menu/nana-promo.jpg",
  "garlic-mayo-fries": "assets/images/menu/nana-promo.jpg",
  "fries-small": "assets/images/menu/nana-promo.jpg",
  "fries-large": "assets/images/menu/nana-promo.jpg",
  "crunchy-loaded-fries": "assets/images/menu/nana-promo.jpg",
  "grill-burger": "assets/images/menu/zigzag-burger.jpg",
  "grill-sandwich": "assets/images/menu/club-sandwich.jpg",
  "grill-shawarma": "assets/images/menu/nanas-wrap.jpg",
  "chicken-cheese-pasta": "assets/images/menu/pasta.jpg",
  "pizza-pratha": "assets/images/menu/pizza-pratha.jpg",
  "tea": "assets/images/menu/special-drinks-2.jpg",
  "sp-tea": "assets/images/menu/special-drinks-2.jpg",
  "lemon-soda": "assets/images/menu/lemon-soda.jpg",
  "diet-soda": "assets/images/menu/special-drinks-1.jpg",
  "sting-soda": "assets/images/menu/special-drinks-2.jpg",
  "mayo-dip": "assets/images/menu/special-drinks-1.jpg",
  "mint-margarita-drink": "assets/images/menu/mint-margarita.jpg",
  "chicken-tikka-pizza": "assets/images/menu/pizza-loaded.jpg",
  "pepperoni-pizza": "assets/images/menu/pizza-loaded.jpg",
  "chicken-fajita-pizza": "assets/images/menu/pizza-cheesy-olives.jpg",
  "seekh-kabab-pizza": "assets/images/menu/pizza-loaded.jpg",
  "mughlai-pizza": "assets/images/menu/pizza-veggie.jpg",
  "cheese-lover-pizza": "assets/images/menu/pizza-cheesy-olives.jpg",
  "veggie-delight-pizza": "assets/images/menu/pizza-veggie.jpg",
  "maxi-pizza": "assets/images/menu/pizza-loaded.jpg",
  "kelzon-pizza": "assets/images/menu/kelzon-pizza.jpg",
  "malai-boti-pizza": "assets/images/menu/pizza-veggie.jpg",
  "behari-kabab-pizza": "assets/images/menu/pizza-loaded.jpg",
  "peri-peri-pizza": "assets/images/menu/pizza-loaded.jpg",
  "supreme-pizza": "assets/images/menu/pizza-loaded.jpg",
  "chez-stuffer-pizza": "assets/images/menu/pizza-cheesy-olives.jpg",
  "deal-1": "assets/images/menu/zigzag-burger.jpg",
  "deal-2": "assets/images/menu/nana-promo.jpg",
  "deal-3": "assets/images/menu/nana-promo.jpg",
  "deal-4": "assets/images/menu/nana-promo.jpg",
  "deal-5": "assets/images/menu/nana-promo.jpg",
  "deal-6": "assets/images/menu/nana-promo.jpg",
  "deal-7": "assets/images/menu/zigzag-burger.jpg",
  "deal-8": "assets/images/menu/nana-promo.jpg",
  "deal-9": "assets/images/menu/pizza-loaded.jpg",
  "deal-10": "assets/images/menu/nana-promo.jpg",
  "deal-11": "assets/images/menu/pizza-loaded.jpg",
  "deal-12": "assets/images/menu/pizza-loaded.jpg",
  "deal-13": "assets/images/menu/pizza-loaded.jpg",
  "deal-14": "assets/images/menu/pizza-loaded.jpg",
};
MENU_ITEMS.forEach((item) => {
  if (FINAL_ITEM_IMAGES[item.id]) item.image = FINAL_ITEM_IMAGES[item.id];
  item.fallbackImage = item.image;
});
