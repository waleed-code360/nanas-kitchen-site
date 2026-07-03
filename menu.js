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
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    description: "Crunchy and flavorful burger from the main burger menu."
  },
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    category: "Burgers",
    price: 450,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80",
    description: "Crispy chicken burger served hot and fresh."
  },
  {
    id: "tower-burger",
    name: "Tower Burger",
    category: "Burgers",
    price: 650,
    badge: "",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=900&q=80",
    description: "A bigger stacked burger option for heavier cravings."
  },
  {
    id: "mighty-burger",
    name: "Mighty Burger",
    category: "Burgers",
    price: 700,
    badge: "Big Bite",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    description: "A hearty burger option from Nana's burger menu."
  },
  {
    id: "crispy-chicken-burger",
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 430,
    badge: "",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80",
    description: "Crispy chicken burger served hot."
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    category: "Burgers",
    price: 430,
    badge: "",
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=900&q=80",
    description: "Classic chicken burger."
  },
  {
    id: "shami-burger",
    name: "Shami Burger",
    category: "Burgers",
    price: 200,
    badge: "Budget",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80",
    description: "A lighter and budget-friendly burger option."
  },
  {
    id: "special-shami-burger",
    name: "Special Shami Burger",
    category: "Burgers",
    price: 270,
    badge: "",
    image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=900&q=80",
    description: "Special version of the shami burger."
  },
  {
    id: "pizza-burger",
    name: "Pizza Burger",
    category: "Burgers",
    price: 700,
    badge: "Fusion",
    image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=80",
    description: "Burger with a pizza-style flavor twist."
  },
  {
    id: "nanas-crunchy-burger",
    name: "Nana's crunchy Burger",
    category: "Burgers",
    price: 650,
    badge: "Signature",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80",
    description: "One of Nana's signature crunchy burger options."
  },
  {
    id: "tikka-patty-burger",
    name: "Tikka Patty Burger",
    category: "Burgers",
    price: 430,
    badge: "",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
    description: "Burger with tikka-style patty flavor."
  },

  {
    id: "sp-shawarma",
    name: "SP Shawarma",
    category: "Wraps",
    price: 300,
    badge: "",
    image: "https://images.unsplash.com/photo-1640871223021-3e0a5c0e4e06?auto=format&fit=crop&w=900&q=80",
    description: "Classic shawarma wrap."
  },
  {
    id: "cheese-shawarma",
    name: "Cheese Shawarma",
    category: "Wraps",
    price: 350,
    badge: "",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
    description: "Shawarma with cheesy flavor."
  },
  {
    id: "platter-shawarma",
    name: "Platter Shawarma",
    category: "Wraps",
    price: 600,
    badge: "",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
    description: "A fuller shawarma platter option."
  },
  {
    id: "zinger-shawarma",
    name: "Zinger Shawarma",
    category: "Wraps",
    price: 400,
    badge: "",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08f?auto=format&fit=crop&w=900&q=80",
    description: "Shawarma with zinger-style filling."
  },
  {
    id: "paratha-roll-chicken",
    name: "Paratha Roll (Chicken)",
    category: "Wraps",
    price: 400,
    badge: "",
    image: "https://images.unsplash.com/photo-1662116765994-1e4200c43589?auto=format&fit=crop&w=900&q=80",
    description: "Chicken paratha roll."
  },
  {
    id: "paratha-roll-zinger",
    name: "Paratha Roll (Zinger)",
    category: "Wraps",
    price: 400,
    badge: "",
    image: "https://images.unsplash.com/photo-1683536620875-703c11f3fc0f?auto=format&fit=crop&w=900&q=80",
    description: "Zinger paratha roll."
  },
  {
    id: "shawarma-partha",
    name: "Shawarma Partha",
    category: "Wraps",
    price: 400,
    badge: "",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80",
    description: "Shawarma wrapped in paratha."
  },
  {
    id: "zingerta-wrap",
    name: "Zingerta Wrap",
    category: "Wraps",
    price: 600,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    description: "Special wrap exactly as named on the menu."
  },
  {
    id: "nanas-wrap",
    name: "Nana's Wrap",
    category: "Wraps",
    price: 600,
    badge: "Signature",
    image: "https://images.unsplash.com/photo-1628191011825-7ee7db5cfb8c?auto=format&fit=crop&w=900&q=80",
    description: "Nana's own wrap option."
  },
  {
    id: "arabian-wrap",
    name: "Arabian wrap",
    category: "Wraps",
    price: 700,
    badge: "",
    image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&w=900&q=80",
    description: "Arabian-style wrap."
  },
  {
    id: "filly-wrap",
    name: "Filly Wrap",
    category: "Wraps",
    price: 600,
    badge: "",
    image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=900&q=80",
    description: "Another wrap option from the menu."
  },

  {
    id: "club-sandwich",
    name: "Club Sandwich",
    category: "Sandwiches",
    price: 650,
    badge: "",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    description: "Classic club sandwich."
  },
  {
    id: "tikka-sandwich",
    name: "Tikka Sandwich",
    category: "Sandwiches",
    price: 650,
    badge: "",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=900&q=80",
    description: "Sandwich with tikka flavor."
  },
  {
    id: "crispy-sandwich",
    name: "Crispy Sandwich",
    category: "Sandwiches",
    price: 650,
    badge: "",
    image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&fit=crop&w=900&q=80",
    description: "Crispy chicken sandwich."
  },
  {
    id: "mughlai-sandwich",
    name: "Mughlai Sandwich",
    category: "Sandwiches",
    price: 650,
    badge: "",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
    description: "Mughlai-style sandwich."
  },

  {
    id: "hot-wings-10pc",
    name: "Hot Wings (10pc)",
    category: "Sides",
    price: 750,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=80",
    description: "10 pieces of hot wings."
  },
  {
    id: "chicken-nugget",
    name: "Chicken Nugget",
    category: "Sides",
    price: 650,
    badge: "",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80",
    description: "Chicken nuggets served hot."
  },
  {
    id: "french-fries-side",
    name: "French Fries",
    category: "Sides",
    price: 250,
    badge: "",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80",
    description: "Classic fries."
  },
  {
    id: "hot-shots",
    name: "Hot Shots",
    category: "Sides",
    price: 650,
    badge: "",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=80",
    description: "Spicy bite-sized chicken option."
  },

  {
    id: "loaded-fries",
    name: "Loaded Fries",
    category: "Fries",
    price: 700,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80",
    description: "Loaded fries with rich toppings."
  },
  {
    id: "cheese-fries",
    name: "Cheese Fries",
    category: "Fries",
    price: 450,
    badge: "",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80",
    description: "Fries with cheese topping."
  },
  {
    id: "garlic-mayo-fries",
    name: "Garlic Mayo Fries",
    category: "Fries",
    price: 300,
    badge: "",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=80",
    description: "Fries with garlic mayo flavor."
  },
  {
    id: "fries-small",
    name: "Fries Small",
    category: "Fries",
    price: 150,
    badge: "Budget",
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=900&q=80",
    description: "Small portion fries."
  },
  {
    id: "fries-large",
    name: "Fries Large",
    category: "Fries",
    price: 300,
    badge: "",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    description: "Large portion fries."
  },
  {
    id: "crunchy-loaded-fries",
    name: "Crunchy loaded Fries",
    category: "Fries",
    price: 600,
    badge: "",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80",
    description: "Crunchy loaded fries."
  },

  {
    id: "grill-burger",
    name: "Grill Burger",
    category: "Our Special",
    price: 450,
    badge: "",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80",
    description: "Special grilled burger."
  },
  {
    id: "grill-sandwich",
    name: "Grill Sandwich",
    category: "Our Special",
    price: 650,
    badge: "",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
    description: "Grilled sandwich."
  },
  {
    id: "grill-shawarma",
    name: "Grill Shawarma",
    category: "Our Special",
    price: 400,
    badge: "",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
    description: "Grilled shawarma."
  },
  {
    id: "chicken-cheese-pasta",
    name: "Chicken Cheese Pasta",
    category: "Our Special",
    price: 750,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    description: "Chicken pasta with cheese."
  },
  {
    id: "pizza-pratha",
    name: "Pizza Pratha",
    category: "Our Special",
    price: 750,
    badge: "",
    image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=900&q=80",
    description: "Special pizza pratha exactly as written on the menu."
  },

  {
    id: "tea",
    name: "Tea",
    category: "Drinks & Extras",
    price: 100,
    badge: "",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
    description: "Regular tea."
  },
  {
    id: "sp-tea",
    name: "Sp Tea",
    category: "Drinks & Extras",
    price: 150,
    badge: "",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    description: "Special tea."
  },
  {
    id: "lemon-soda",
    name: "Lemon Soda",
    category: "Drinks & Extras",
    price: 150,
    badge: "",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
    description: "Refreshing lemon soda."
  },
  {
    id: "diet-soda",
    name: "Diet Soda",
    category: "Drinks & Extras",
    price: 200,
    badge: "",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=900&q=80",
    description: "Diet soda option."
  },
  {
    id: "sting-soda",
    name: "Sting Soda",
    category: "Drinks & Extras",
    price: 200,
    badge: "",
    image: "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=900&q=80",
    description: "Energy drink option."
  },
  {
    id: "mayo-dip",
    name: "Mayo Dip",
    category: "Drinks & Extras",
    price: 50,
    badge: "Extra",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=900&q=80",
    description: "Extra mayo dip."
  },
  {
    id: "mint-margarita-drink",
    name: "Mint Margarita Drink",
    category: "Drinks & Extras",
    price: 200,
    badge: "Cool",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
    description: "Mint Margarita Drink - Rs. 200/-"
  },

  {
    id: "chicken-tikka-pizza",
    name: "Chicken Tikka + Cold Drink",
    category: "Pizza Flavours",
    badge: "S / M / L",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1548365328-9f547fb0953e?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2e?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    description: ["1 Zinger", "1 Fries", "1 Coke (350ml)"]
  },
  {
    id: "deal-2",
    name: "Deal 2",
    category: "Best Deals",
    price: 870,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80",
    description: ["1 Shawarma", "1 Zinger", "1 Fries", "1 Coke (500ml)"]
  },
  {
    id: "deal-3",
    name: "Deal 3",
    category: "Best Deals",
    price: 1100,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    description: ["2 Shawarma", "2 Shami Burger", "1 Fries", "1 Coke (500ml)"]
  },
  {
    id: "deal-4",
    name: "Deal 4",
    category: "Best Deals",
    price: 1290,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=900&q=80",
    description: ["1 Wings", "1 Club Sandwich", "1 Coke (350ml)"]
  },
  {
    id: "deal-5",
    name: "Deal 5",
    category: "Best Deals",
    price: 1100,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    description: ["1 Crispy Chicken", "1 Crispy Sandwich", "1 Coke (350ml)"]
  },
  {
    id: "deal-6",
    name: "Deal 6",
    category: "Best Deals",
    price: 3550,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    description: ["5 Shawarma", "5 Zinger", "1 Family Fries", "1 Coke (1.5ltr)"]
  },
  {
    id: "deal-7",
    name: "Deal 7",
    category: "Best Deals",
    price: 1000,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=900&q=80",
    description: ["2 Zinger", "1 Fries", "1 Coke (500ml)"]
  },
  {
    id: "deal-8",
    name: "Deal 8",
    category: "Best Deals",
    price: 700,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
    description: ["1 Shami Burger", "1 Shawarma", "1 Fries", "1 Coke (500ml)"]
  },
  {
    id: "deal-9",
    name: "Deal 9",
    category: "Best Deals",
    price: 1300,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=80",
    description: ["1 Zinger Burger", "1 Small Pizza", "1 Fries", "1 Coke (500ml)"]
  },
  {
    id: "deal-10",
    name: "Deal 10",
    category: "Best Deals",
    price: 1200,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
    description: ["1 Zinger + Fries", "1 Sandwich", "1 Coke (500ml)"]
  },
  {
    id: "deal-11",
    name: "Deal 11",
    category: "Best Deals",
    price: 1650,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=80",
    description: ["5 Pc Wings", "1 Zinger Burger", "1 Small Pizza", "1 Coke (500ml)"]
  },
  {
    id: "deal-12",
    name: "Deal 12",
    category: "Best Deals",
    price: 1750,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=900&q=80",
    description: ["2 Small Pizza", "+ 1 Free Pizza"]
  },
  {
    id: "deal-13",
    name: "Deal 13",
    category: "Best Deals",
    price: 3300,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    description: ["2 Medium Pizza", "+ 1 Free Pizza"]
  },
  {
    id: "deal-14",
    name: "Deal 14",
    category: "Best Deals",
    price: 4300,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=900&q=80",
    description: ["2 Large Pizza", "+ 1 Free Pizza"]
  }
];

/* =========================================================
   IMAGE FIXES - category-correct food photos
   These overrides keep menu names/prices same and only fix wrong images.
========================================================= */
const CATEGORY_FALLBACK_IMAGES = {
  "Burgers": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  "Wraps": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "Sandwiches": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "Fries": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85",
  "Sides": "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=85",
  "Our Special": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=85",
  "Drinks & Extras": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",
  "Pizza Flavours": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "Signature Pizza": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=85",
  "Best Deals": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=85"
};

const FIXED_ITEM_IMAGES = {
  // Burgers
  "cheetos-burger": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=85",
  "zinger-burger": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85",
  "tower-burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  "mighty-burger": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
  "crispy-chicken-burger": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  "chicken-burger": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  "shami-burger": "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=85",
  "special-shami-burger": "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=85",
  "pizza-burger": "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=85",
  "nanas-crunchy-burger": "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85",
  "tikka-patty-burger": "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85",

  // Wraps / shawarma / rolls
  "sp-shawarma": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "cheese-shawarma": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "platter-shawarma": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  "zinger-shawarma": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "paratha-roll-chicken": "https://images.unsplash.com/photo-1662116765994-1e4200c43589?auto=format&fit=crop&w=900&q=85",
  "paratha-roll-zinger": "https://images.unsplash.com/photo-1662116765994-1e4200c43589?auto=format&fit=crop&w=900&q=85",
  "shawarma-partha": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "zingerta-wrap": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "nanas-wrap": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "arabian-wrap": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "filly-wrap": "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=900&q=85",

  // Sandwiches
  "club-sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "tikka-sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "crispy-sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "mughlai-sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",

  // Sides
  "hot-wings-10pc": "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=85",
  "chicken-nugget": "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=85",
  "french-fries-side": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85",
  "hot-shots": "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=85",

  // Fries
  "loaded-fries": "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=85",
  "cheese-fries": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85",
  "garlic-mayo-fries": "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
  "fries-small": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85",
  "fries-large": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85",
  "crunchy-loaded-fries": "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=85",

  // Our Special
  "grill-burger": "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85",
  "grill-sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "grill-shawarma": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "chicken-cheese-pasta": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=85",
  "pizza-pratha": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",

  // Drinks
  "tea": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85",
  "sp-tea": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85",
  "lemon-soda": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",
  "diet-soda": "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=900&q=85",
  "sting-soda": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=85",
  "mayo-dip": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=900&q=85",
  "mint-margarita-drink": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",

  // Pizzas - no sunset / random image
  "chicken-tikka-pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "pepperoni-pizza": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=85",
  "chicken-fajita-pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "seekh-kabab-pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "mughlai-pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "cheese-lover-pizza": "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=900&q=85",
  "veggie-delight-pizza": "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&w=900&q=85",
  "maxi-pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "kelzon-pizza": "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=900&q=85",
  "malai-boti-pizza": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=85",
  "behari-kabab-pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "peri-peri-pizza": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=85",
  "supreme-pizza": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=85",
  "chez-stuffer-pizza": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=85"
};

MENU_ITEMS.forEach((item) => {
  item.fallbackImage = CATEGORY_FALLBACK_IMAGES[item.category] || CATEGORY_FALLBACK_IMAGES["Best Deals"];
  item.image = FIXED_ITEM_IMAGES[item.id] || item.fallbackImage;
});


/* =========================================================
   V6 PROFESSIONAL IMAGE + DEAL OVERRIDES
   Keeps all names/prices same; improves category-accurate photos.
========================================================= */
const V6_ITEM_IMAGES = {
  "tikka-patty-burger": "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85",
  "shami-burger": "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=85",
  "special-shami-burger": "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=85",
  "pizza-burger": "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=85",

  "sp-shawarma": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  "cheese-shawarma": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  "platter-shawarma": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  "zinger-shawarma": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  "paratha-roll-chicken": "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=900&q=85",
  "paratha-roll-zinger": "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=900&q=85",
  "shawarma-partha": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  "zingerta-wrap": "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=900&q=85",
  "nanas-wrap": "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=900&q=85",
  "arabian-wrap": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  "filly-wrap": "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=900&q=85",

  "club-sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "tikka-sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "crispy-sandwich": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=85",
  "mughlai-sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",

  "loaded-fries": "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=85",
  "cheese-fries": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85",
  "garlic-mayo-fries": "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
  "fries-small": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85",
  "fries-large": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85",
  "crunchy-loaded-fries": "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=85",

  "hot-wings-10pc": "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=85",
  "chicken-nugget": "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=85",
  "french-fries-side": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85",
  "hot-shots": "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=85",

  "grill-burger": "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85",
  "grill-sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "grill-shawarma": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  "chicken-cheese-pasta": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=85",
  "pizza-pratha": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",

  "kelzon-pizza": "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=900&q=85",
  "mughlai-pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "behari-kabab-pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",

  "deal-1": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
  "deal-2": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=85",
  "deal-3": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=85",
  "deal-4": "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=85",
  "deal-5": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "deal-6": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=85",
  "deal-7": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85",
  "deal-8": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=85",
  "deal-9": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
  "deal-10": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "deal-11": "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=85",
  "deal-12": "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=900&q=85",
  "deal-13": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "deal-14": "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=900&q=85"
};

MENU_ITEMS.forEach((item) => {
  if (V6_ITEM_IMAGES[item.id]) item.image = V6_ITEM_IMAGES[item.id];
  item.fallbackImage = CATEGORY_FALLBACK_IMAGES[item.category] || item.image;
});
