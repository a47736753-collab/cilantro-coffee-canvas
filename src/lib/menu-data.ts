export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  cat: string;
  popular?: boolean;
  chefSpecial?: boolean;
  veg?: boolean;
  spice?: 0 | 1 | 2 | 3;
  ingredients?: string[];
  pairing?: string;
};

export const CATEGORIES: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "cold-coffee", label: "Cold Coffee" },
  { id: "shakes", label: "Milkshakes" },
  { id: "mojitos", label: "Mojitos" },
  { id: "sandwich", label: "Sandwiches" },
  { id: "burger", label: "Burgers" },
  { id: "pizza", label: "Pizza" },
  { id: "pasta", label: "Pasta" },
  { id: "fries", label: "Fries" },
  { id: "wraps", label: "Wraps" },
  { id: "chinese", label: "Chinese" },
  { id: "dessert", label: "Desserts" },
];

const p = (spice: 0 | 1 | 2 | 3 = 0) => spice;

export const MENU: MenuItem[] = [
  // Coffee (hot)
  { name: "Hot Coffee", desc: "Freshly brewed, aromatic hot coffee.", price: 30, cat: "coffee", veg: true, ingredients: ["Espresso", "Milk", "Sugar"], spice: p(0) },
  { name: "Hot Chocolate", desc: "Rich Belgian-style molten cocoa.", price: 70, cat: "coffee", veg: true, ingredients: ["Cocoa", "Milk", "Sugar"], pairing: "Chocolate Brownie" },
  { name: "CAD B", desc: "Signature cold-brewed coffee with a twist.", price: 80, cat: "coffee", veg: true, chefSpecial: true, ingredients: ["Cold brew", "Milk", "House syrup"], pairing: "Tiramisu" },

  // Cold Coffee
  { name: "Cold Coffee", desc: "Thick, chilled, classic cold coffee.", price: 40, cat: "cold-coffee", veg: true, ingredients: ["Coffee", "Milk", "Sugar", "Ice"] },
  { name: "Cold Coffee with Crush", desc: "Crushed ice, silky cream top.", price: 50, cat: "cold-coffee", veg: true },
  { name: "Cold Coffee with Ice Cream", desc: "Crowned with vanilla ice cream.", price: 60, cat: "cold-coffee", veg: true, popular: true },
  { name: "Cold Coffee with Crush & Ice Cream", desc: "The full house indulgence.", price: 70, cat: "cold-coffee", veg: true, popular: true, chefSpecial: true, pairing: "Cheese Fries" },

  // Milkshakes
  { name: "Vanilla Milkshake", desc: "Smooth Madagascar vanilla.", price: 60, cat: "shakes", veg: true },
  { name: "Strawberry Milkshake", desc: "Fresh strawberries, cream.", price: 70, cat: "shakes", veg: true },
  { name: "Chocolate Milkshake", desc: "Rich cocoa milkshake.", price: 80, cat: "shakes", veg: true, popular: true },
  { name: "Oreo Shake", desc: "Cookies-and-cream classic.", price: 80, cat: "shakes", veg: true, popular: true },
  { name: "Blueberry Milkshake", desc: "Sweet blueberry blend.", price: 80, cat: "shakes", veg: true },
  { name: "Brownie Shake", desc: "Chocolate brownie milkshake.", price: 90, cat: "shakes", veg: true, chefSpecial: true },
  { name: "KitKat Milkshake", desc: "KitKat crumble milkshake.", price: 90, cat: "shakes", veg: true },

  // Mojitos & mocktails
  { name: "Virgin Mojito", desc: "Mint, lime, soda — the classic.", price: 70, cat: "mojitos", veg: true, popular: true },
  { name: "Blue Mojito", desc: "Blue curaçao mint mojito.", price: 80, cat: "mojitos", veg: true },
  { name: "Watermelon Mojito", desc: "Fresh watermelon, mint, lime.", price: 80, cat: "mojitos", veg: true },
  { name: "Green Apple Mojito", desc: "Crisp green apple mojito.", price: 80, cat: "mojitos", veg: true },
  { name: "Cool Blue", desc: "Blue curaçao cooler.", price: 70, cat: "mojitos", veg: true },
  { name: "Pina Colada", desc: "Coconut, pineapple, cream.", price: 70, cat: "mojitos", veg: true },
  { name: "Watermelon Cooler", desc: "Fresh watermelon, lime.", price: 70, cat: "mojitos", veg: true },
  { name: "Chilli Guava Cooler", desc: "Guava with a chilli kick.", price: 80, cat: "mojitos", veg: true, spice: p(2) },
  { name: "Apple Green Cooler", desc: "Green apple cooler.", price: 80, cat: "mojitos", veg: true },
  { name: "Lemonade", desc: "Classic sweet lemonade.", price: 60, cat: "mojitos", veg: true },
  { name: "Lemon Squash (Salted)", desc: "Salted fresh lime cooler.", price: 50, cat: "mojitos", veg: true },
  { name: "Lemon Ice Tea", desc: "Chilled lemon iced tea.", price: 40, cat: "mojitos", veg: true },

  // Sandwiches
  { name: "Chutney Sandwich", desc: "Mint-coriander chutney classic.", price: 40, cat: "sandwich", veg: true },
  { name: "Plain Veg Sandwich", desc: "Crisp fresh veggies.", price: 50, cat: "sandwich", veg: true },
  { name: "Cold Veg & Cheese Sandwich", desc: "Veggies with cheddar.", price: 60, cat: "sandwich", veg: true },
  { name: "Grilled Veg", desc: "Grilled vegetables, herbed butter.", price: 60, cat: "sandwich", veg: true },
  { name: "Grilled Veg & Cheese", desc: "Vegetables, oozing cheese.", price: 80, cat: "sandwich", veg: true },
  { name: "Aloo Cheese Toast", desc: "Spiced potato & melted cheese.", price: 80, cat: "sandwich", veg: true },
  { name: "Cole Slaw Sandwich", desc: "Creamy slaw filling.", price: 80, cat: "sandwich", veg: true },
  { name: "Russian Sandwich", desc: "Special creamy Russian filling.", price: 80, cat: "sandwich", veg: true },
  { name: "Grilled Chocolate", desc: "Warm chocolate, buttery bread.", price: 80, cat: "sandwich", veg: true },
  { name: "Pahadi Sandwich", desc: "Mint-coriander, mild heat.", price: 90, cat: "sandwich", veg: true, spice: p(1) },
  { name: "Club Sandwich", desc: "Triple-decker classic.", price: 100, cat: "sandwich", veg: true, popular: true },
  { name: "Mexican Grilled", desc: "Beans, salsa, cheese.", price: 100, cat: "sandwich", veg: true, spice: p(2) },
  { name: "Chilli Cheese Sandwich", desc: "Green chilli, cheese.", price: 100, cat: "sandwich", veg: true, spice: p(2) },
  { name: "Paneer Makhani Sandwich", desc: "Tandoori paneer, makhani sauce.", price: 100, cat: "sandwich", veg: true },
  { name: "Chef's Special Sandwich", desc: "Double-decker house signature.", price: 130, cat: "sandwich", veg: true, chefSpecial: true, popular: true, pairing: "Cheese Fries" },

  // Burgers
  { name: "Aloo Tikki Burger", desc: "Spiced potato patty, soft bun.", price: 40, cat: "burger", veg: true },
  { name: "Veg Burger", desc: "Crisp veg patty, garden fresh.", price: 50, cat: "burger", veg: true },
  { name: "Veg & Cheese Burger", desc: "Veg patty with cheddar.", price: 60, cat: "burger", veg: true, popular: true },
  { name: "Spicy Veg Cheese Burger", desc: "Spiced patty, molten cheese.", price: 70, cat: "burger", veg: true, spice: p(2) },
  { name: "Mexican Burger", desc: "Beans, salsa, jalapeño.", price: 80, cat: "burger", veg: true, spice: p(2) },
  { name: "Schezwan Burger", desc: "Schezwan-glazed patty.", price: 80, cat: "burger", veg: true, spice: p(2) },
  { name: "Cheese Corn Burger", desc: "Sweet corn, cheese, patty.", price: 90, cat: "burger", veg: true },
  { name: "Maharaja Burger", desc: "Double patty, loaded.", price: 90, cat: "burger", veg: true, popular: true },
  { name: "Cilantro Special Burger", desc: "Our signature paneer burger.", price: 100, cat: "burger", veg: true, chefSpecial: true, pairing: "Cold Coffee with Crush" },

  // Pizza (8")
  { name: "Margherita Pizza", desc: "San Marzano sauce, mozzarella, basil.", price: 120, cat: "pizza", veg: true },
  { name: "Veggie Pizza", desc: "Garden vegetables, mozzarella.", price: 130, cat: "pizza", veg: true },
  { name: "Farmhouse Pizza", desc: "Onion, capsicum, tomato, mushroom.", price: 150, cat: "pizza", veg: true, popular: true },
  { name: "Schezwan Pizza", desc: "House schezwan, peppers.", price: 150, cat: "pizza", veg: true, spice: p(2) },
  { name: "Texas Pizza", desc: "Smoky BBQ, corn, jalapeño.", price: 150, cat: "pizza", veg: true },
  { name: "Paneer Pizza", desc: "Cottage cheese, peppers, mozzarella.", price: 150, cat: "pizza", veg: true },
  { name: "Barbecue Paneer Pizza", desc: "Smoky BBQ paneer, onions.", price: 160, cat: "pizza", veg: true },
  { name: "Kadai Paneer Pizza", desc: "Kadai masala, paneer, peppers.", price: 160, cat: "pizza", veg: true },
  { name: "Paneer Makhani Pizza", desc: "Creamy makhani, paneer.", price: 160, cat: "pizza", veg: true, popular: true },
  { name: "Tandoori Paneer Pizza", desc: "Tandoori paneer, mint mayo.", price: 170, cat: "pizza", veg: true },
  { name: "Peri Peri Pizza", desc: "Peri peri spice, peppers.", price: 170, cat: "pizza", veg: true, spice: p(3) },
  { name: "Cilantro Cheesy Loaded", desc: "House signature — loaded with cheese.", price: 180, cat: "pizza", veg: true, chefSpecial: true, popular: true, pairing: "Virgin Mojito" },
  { name: "Cheese Burst Pizza", desc: "Molten cheese-filled crust.", price: 260, cat: "pizza", veg: true },

  // Pasta
  { name: "Alfredo (White Sauce)", desc: "Creamy parmesan, cracked pepper.", price: 150, cat: "pasta", veg: true, popular: true, pairing: "Garlic Cheese Bread" },
  { name: "Arrabiata (Red Sauce)", desc: "Garlic, chilli, slow-cooked tomato.", price: 150, cat: "pasta", veg: true, spice: p(2) },
  { name: "Mixed Sauce Pasta", desc: "White & red, best of both.", price: 150, cat: "pasta", veg: true },
  { name: "Creamy Pesto", desc: "Green basil pesto, cream.", price: 170, cat: "pasta", veg: true },
  { name: "Makhani Pasta", desc: "Chef's special buttery makhani.", price: 170, cat: "pasta", veg: true, chefSpecial: true },
  { name: "Schezwan Pasta", desc: "Wok-tossed schezwan.", price: 170, cat: "pasta", veg: true, spice: p(2) },
  { name: "Mac N Cheese (Baked)", desc: "Classic macaroni, molten cheese.", price: 170, cat: "pasta", veg: true, popular: true },
  { name: "Baked Alfredo", desc: "Alfredo, oven-finished mozzarella.", price: 170, cat: "pasta", veg: true },
  { name: "Lasagna", desc: "Layered pasta, cheese, tomato.", price: 200, cat: "pasta", veg: true, chefSpecial: true },

  // Fries
  { name: "French Fries", desc: "Golden, crisp, salted.", price: 60, cat: "fries", veg: true },
  { name: "Mayo Fries", desc: "Fries drizzled with mayo.", price: 70, cat: "fries", veg: true },
  { name: "Schezwan Fries", desc: "Spicy schezwan-tossed.", price: 80, cat: "fries", veg: true, spice: p(2) },
  { name: "Peri Peri Fries", desc: "Smoky African chilli dust.", price: 80, cat: "fries", veg: true, spice: p(2), popular: true },
  { name: "Cheese Fries", desc: "House cheese sauce, herbs.", price: 80, cat: "fries", veg: true, popular: true },
  { name: "Chipotle Fries", desc: "Smoky chipotle seasoning.", price: 80, cat: "fries", veg: true },
  { name: "Cilantro Masala Fries", desc: "House masala blend.", price: 80, cat: "fries", veg: true, chefSpecial: true },

  // Wraps / Rolls
  { name: "Veg Roll", desc: "Fresh veggies, soft wrap.", price: 70, cat: "wraps", veg: true },
  { name: "Schezwan Roll", desc: "Spicy schezwan wrap.", price: 90, cat: "wraps", veg: true, spice: p(2) },
  { name: "Spicy Paneer Roll", desc: "Fiery spiced paneer.", price: 90, cat: "wraps", veg: true, spice: p(2) },
  { name: "Paneer Makhani Roll", desc: "Creamy makhani paneer.", price: 100, cat: "wraps", veg: true, popular: true },
  { name: "Kadai Paneer Roll", desc: "Kadai-spiced paneer.", price: 100, cat: "wraps", veg: true },
  { name: "Burritos (Mexican Roll)", desc: "Beans, salsa, rice.", price: 100, cat: "wraps", veg: true },
  { name: "Tandoori Paneer Roll", desc: "Smoky tandoori paneer.", price: 110, cat: "wraps", veg: true },
  { name: "Cilantro Special Roll", desc: "Our signature loaded roll.", price: 120, cat: "wraps", veg: true, chefSpecial: true },

  // Chinese / Noodles / Momos
  { name: "Veg Hakka Noodles", desc: "Wok-tossed, soy-glazed.", price: 100, cat: "chinese", veg: true, popular: true },
  { name: "Schezwan Noodles", desc: "Fiery schezwan noodles.", price: 120, cat: "chinese", veg: true, spice: p(2) },
  { name: "Singapore Noodles", desc: "Curry-tinged Singapore style.", price: 140, cat: "chinese", veg: true },
  { name: "Veg Fried Rice", desc: "Wok-tossed, soy-glazed.", price: 100, cat: "chinese", veg: true },
  { name: "Schezwan Fried Rice", desc: "Spicy schezwan wok rice.", price: 120, cat: "chinese", veg: true, spice: p(2) },
  { name: "Momos (Steamed)", desc: "Steamed dumplings, chilli sauce.", price: 70, cat: "chinese", veg: true, popular: true },
  { name: "Momos (Fried)", desc: "Crisp golden dumplings.", price: 80, cat: "chinese", veg: true },
  { name: "Masala Maggi", desc: "Classic spiced maggi.", price: 70, cat: "chinese", veg: true },
  { name: "Cheese Maggi", desc: "Molten cheese maggi.", price: 80, cat: "chinese", veg: true, popular: true },
  { name: "Cheesy Quesadillas", desc: "Grilled tortilla, molten cheese.", price: 130, cat: "chinese", veg: true },

  // Desserts
  { name: "Chocolate Mousse", desc: "Silky dark chocolate.", price: 50, cat: "dessert", veg: true },
  { name: "Lava Cake", desc: "Molten chocolate centre.", price: 60, cat: "dessert", veg: true, popular: true },
  { name: "Chocolate Brownie", desc: "Fudgy, warm brownie.", price: 60, cat: "dessert", veg: true },
  { name: "Brownie with Ice Cream", desc: "Warm brownie, cold vanilla.", price: 80, cat: "dessert", veg: true, popular: true },
  { name: "Tiramisu", desc: "Coffee-soaked Italian classic.", price: 80, cat: "dessert", veg: true, chefSpecial: true },
  { name: "Pancakes", desc: "Fluffy stack, maple drizzle.", price: 100, cat: "dessert", veg: true },
  { name: "Waffles", desc: "Golden waffles, toppings.", price: 100, cat: "dessert", veg: true },
  { name: "Sizzling Brownie", desc: "Sizzling brownie, ice cream, chocolate.", price: 120, cat: "dessert", veg: true, chefSpecial: true, popular: true, pairing: "Hot Coffee" },
];

export type Combo = {
  title: string;
  items: string[];
  original: number;
  price: number;
  tag?: string;
};

export const COMBOS: Combo[] = [
  { title: "Cold Coffee + Fries", items: ["Cold Coffee", "French Fries"], original: 100, price: 89 },
  { title: "Burger + Cold Coffee", items: ["Veg & Cheese Burger", "Cold Coffee"], original: 100, price: 89 },
  { title: "Pasta + Garlic Bread", items: ["Alfredo Pasta", "Garlic Bread"], original: 210, price: 179, tag: "Most loved" },
  { title: "Pizza + Mojito", items: ["8\" Margherita", "Virgin Mojito"], original: 190, price: 169 },
  { title: "Sandwich Combo", items: ["Grilled Sandwich", "Fries", "Cold Drink"], original: 170, price: 149 },
  { title: "Roll Combo", items: ["Paneer Roll", "Fries", "Cold Drink"], original: 180, price: 159 },
];

export const ORDER_LINKS = {
  swiggy: "https://www.swiggy.com/",
  zomato: "https://www.zomato.com/",
};

export const CONTACT = {
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  email: "hello@cafecilantro.in",
  address: "Sector 18, Chinchwad, Pune, Maharashtra 411019",
  instagram: "https://instagram.com/cafecilantro",
  hours: [
    { d: "Mon – Thu", t: "10:00 AM – 11:00 PM" },
    { d: "Fri – Sat", t: "10:00 AM – 12:00 AM" },
    { d: "Sunday", t: "11:00 AM – 11:00 PM" },
  ],
};
