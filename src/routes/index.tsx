import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Coffee, Pizza, Sandwich, Search, Star, MapPin, Phone, Clock,
  Instagram, Facebook, MessageCircle, ArrowUpRight, Leaf, Heart, ChevronRight, X,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import coldCoffee from "@/assets/cold-coffee.jpg";
import alfredo from "@/assets/alfredo.jpg";
import pizza from "@/assets/pizza.jpg";
import burger from "@/assets/burger.jpg";
import interior from "@/assets/interior.jpg";
import sandwich from "@/assets/sandwich.jpg";
import fries from "@/assets/fries.jpg";
import dessert from "@/assets/dessert.jpg";
import shake from "@/assets/shake.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cafe Cilantro | Best Cafe in Chinchwad" },
      { name: "description", content: "Handcrafted coffee, creamy pasta, stone-baked pizza and comfort food in Chinchwad. Where every bite feels like home." },
      { property: "og:title", content: "Cafe Cilantro | Where Every Bite Feels Like Home" },
      { property: "og:description", content: "A premium café experience in Chinchwad." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

type Item = { name: string; desc: string; price: number; cat: string; img?: string; popular?: boolean; veg?: boolean };

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "pizza", label: "Pizza" },
  { id: "pasta", label: "Pasta" },
  { id: "baked", label: "Baked Pasta" },
  { id: "sandwich", label: "Sandwiches" },
  { id: "burger", label: "Burgers" },
  { id: "hotdog", label: "Hot Dogs" },
  { id: "rolls", label: "Rolls" },
  { id: "rice", label: "Rice" },
  { id: "noodles", label: "Maggi & Noodles" },
  { id: "bread", label: "Bread" },
  { id: "fries", label: "Fries" },
  { id: "intl", label: "International" },
  { id: "coffee", label: "Cold Coffee" },
  { id: "shakes", label: "Milkshakes" },
  { id: "mocktails", label: "Mocktails" },
  { id: "beverages", label: "Beverages" },
  { id: "dessert", label: "Desserts" },
];

const MENU: Item[] = [
  // Pizza (8") — extra cheese ₹30
  { name: "Margherita Pizza", desc: "San Marzano sauce, mozzarella, fresh basil", price: 120, cat: "pizza", veg: true },
  { name: "Corn / Capsicum / Onion Pizza", desc: "Choose any one topping", price: 130, cat: "pizza", veg: true },
  { name: "Veggie Pizza", desc: "Garden vegetables, mozzarella", price: 130, cat: "pizza", veg: true },
  { name: "Indian Style Pizza", desc: "Spicy masala, mozzarella (spicy)", price: 140, cat: "pizza", veg: true },
  { name: "Farmhouse Pizza", desc: "Onion, capsicum, tomato, mushroom", price: 150, cat: "pizza", veg: true },
  { name: "Schezwan Pizza", desc: "House schezwan, peppers (spicy)", price: 150, cat: "pizza", veg: true },
  { name: "Texas Pizza", desc: "Smoky BBQ, corn, jalapeño", price: 150, cat: "pizza", veg: true },
  { name: "Paneer Pizza", desc: "Cottage cheese, peppers, mozzarella", price: 150, cat: "pizza", veg: true },
  { name: "Barbecue Paneer Pizza", desc: "Smoky BBQ paneer, onions", price: 160, cat: "pizza", veg: true },
  { name: "Kadai Paneer Pizza", desc: "Kadai masala, paneer, peppers", price: 160, cat: "pizza", veg: true },
  { name: "Paneer Makhani Pizza", desc: "Creamy makhani, paneer", price: 160, cat: "pizza", veg: true },
  { name: "Tandoori Paneer Pizza", desc: "Tandoori paneer, mint mayo", price: 170, cat: "pizza", veg: true },
  { name: "Peri Peri Pizza", desc: "Peri peri spice, peppers (spicy)", price: 170, cat: "pizza", veg: true },
  { name: "Cilantro Special Cheesy Loaded Pizza", desc: "Our house signature — loaded with cheese", price: 180, cat: "pizza", img: pizza, popular: true, veg: true },
  { name: "Chocolate Cheese Pizza", desc: "Molten chocolate on a cheesy base", price: 180, cat: "pizza", veg: true },
  { name: "Cheese Burst Pizza", desc: "Molten cheese-filled crust", price: 260, cat: "pizza", veg: true },

  // Pasta
  { name: "Alfredo (White Sauce)", desc: "Creamy parmesan sauce, cracked pepper", price: 150, cat: "pasta", img: alfredo, popular: true, veg: true },
  { name: "Arrabiata (Red Sauce)", desc: "Garlic, chilli, slow-cooked tomato", price: 150, cat: "pasta", veg: true },
  { name: "Mixed Sauce Pasta", desc: "White & red, best of both", price: 150, cat: "pasta", veg: true },
  { name: "Curry Pasta", desc: "Indian-style spiced curry pasta", price: 150, cat: "pasta", veg: true },
  { name: "Creamy Pesto", desc: "Green basil pesto, cream", price: 170, cat: "pasta", veg: true },
  { name: "Creamy Tomato Pesto", desc: "Tomato-basil pesto, cream", price: 170, cat: "pasta", veg: true },
  { name: "Makhani Pasta", desc: "Chef's special — buttery makhani", price: 170, cat: "pasta", veg: true },
  { name: "Schezwan Pasta", desc: "Wok-tossed schezwan pasta", price: 170, cat: "pasta", veg: true },
  { name: "Kadai Pasta", desc: "Kadai masala, peppers, pasta", price: 170, cat: "pasta", veg: true },
  { name: "Penne Pesto", desc: "Penne tossed in fresh pesto", price: 200, cat: "pasta", veg: true },

  // Baked Pasta
  { name: "Mac N Cheese", desc: "Classic macaroni, molten cheese", price: 170, cat: "baked", veg: true },
  { name: "Baked Alfredo", desc: "Alfredo, oven-finished with mozzarella", price: 170, cat: "baked", veg: true },
  { name: "Primavera Pasta", desc: "Garden vegetables, baked", price: 200, cat: "baked", veg: true },
  { name: "Baked Ravioli", desc: "Stuffed ravioli, baked golden", price: 200, cat: "baked", veg: true },
  { name: "Lasagna Pasta", desc: "Layered pasta, cheese, tomato", price: 200, cat: "baked", veg: true },

  // Sandwiches — Cold
  { name: "Chutney Sandwich", desc: "Mint-coriander chutney", price: 40, cat: "sandwich", veg: true },
  { name: "Plain Veg Sandwich", desc: "Crisp fresh veggies", price: 50, cat: "sandwich", veg: true },
  { name: "Cold Veg & Cheese Sandwich", desc: "Veggies with cheese", price: 60, cat: "sandwich", veg: true },
  { name: "Plain Cheese Sandwich", desc: "Simple, cheesy comfort", price: 60, cat: "sandwich", veg: true },
  { name: "Cole Slaw Sandwich", desc: "Creamy slaw filling", price: 80, cat: "sandwich", veg: true },
  { name: "Russian Sandwich", desc: "Special creamy Russian filling", price: 80, cat: "sandwich", veg: true },
  // Sandwiches — Toasted
  { name: "Aloo Cheese Toast", desc: "Spiced potato & melted cheese", price: 80, cat: "sandwich", veg: true },
  { name: "Only Cheese Toasted", desc: "Golden toasted, all cheese", price: 80, cat: "sandwich", veg: true },
  { name: "Club Sandwich", desc: "Triple-decker classic", price: 100, cat: "sandwich", veg: true },
  // Sandwiches — Grilled
  { name: "Grilled Veg", desc: "Grilled vegetables, herbed butter", price: 60, cat: "sandwich", veg: true },
  { name: "Grilled Veg & Cheese", desc: "Vegetables, oozing cheese", price: 80, cat: "sandwich", veg: true },
  { name: "Only Cheese Grill", desc: "All cheese, grilled golden", price: 80, cat: "sandwich", veg: true },
  { name: "Grilled Chocolate", desc: "Warm chocolate, buttery bread", price: 80, cat: "sandwich", veg: true },
  { name: "Creamy Corn & Capsicum", desc: "Sweet corn, capsicum, cream", price: 90, cat: "sandwich", veg: true },
  { name: "Pahadi Sandwich", desc: "Mint-coriander chutney, spicy", price: 90, cat: "sandwich", veg: true },
  { name: "Mexican Grilled", desc: "Beans, salsa, cheese (spicy)", price: 100, cat: "sandwich", veg: true },
  { name: "Chilli Cheese Sandwich", desc: "Green chilli, cheese (spicy)", price: 100, cat: "sandwich", veg: true },
  { name: "Cheese Corn Sandwich", desc: "Sweet corn, mozzarella", price: 100, cat: "sandwich", veg: true },
  { name: "Paneer Makhani Sandwich", desc: "Tandoori paneer, makhani sauce", price: 100, cat: "sandwich", veg: true },
  { name: "Kadai Paneer Sandwich", desc: "Kadai spiced paneer", price: 100, cat: "sandwich", veg: true },
  { name: "Paneer Cheese Sandwich", desc: "Paneer with molten cheese", price: 100, cat: "sandwich", veg: true },
  { name: "Veg Pizza Sandwich", desc: "Pizza flavours, grilled bread", price: 100, cat: "sandwich", veg: true },
  { name: "Chef's Special Sandwich", desc: "Double-decker signature", price: 130, cat: "sandwich", img: sandwich, popular: true, veg: true },

  // Rice
  { name: "Masala Veg Pulao", desc: "Fragrant spiced rice", price: 90, cat: "rice", veg: true },
  { name: "Veg Biryani", desc: "Aromatic layered biryani", price: 100, cat: "rice", veg: true },
  { name: "Paneer Biryani", desc: "Paneer-rich biryani", price: 120, cat: "rice", veg: true },
  { name: "Veg Fried Rice", desc: "Wok-tossed, soy-glazed", price: 100, cat: "rice", veg: true },
  { name: "Schezwan Fried Rice", desc: "Spicy schezwan wok rice", price: 120, cat: "rice", veg: true },
  { name: "Fusion Masti", desc: "Cilantro special — noodle-rice fusion", price: 140, cat: "rice", veg: true },

  // Bread
  { name: "Garlic Bread", desc: "Toasted, herbed butter", price: 60, cat: "bread", veg: true },
  { name: "Garlic Cheese Bread", desc: "Bubbly, golden, addictive", price: 80, cat: "bread", veg: true },
  { name: "Cheese Chilli Toast", desc: "Cheese, green chilli, toasted", price: 100, cat: "bread", veg: true },
  { name: "Tomato Bruschettas", desc: "Tomato-basil on toast", price: 100, cat: "bread", veg: true },
  { name: "Mushroom Bruschettas", desc: "Sautéed mushrooms on toast", price: 110, cat: "bread", veg: true },

  // Maggi & Noodles
  { name: "Masala Maggi", desc: "Classic spiced maggi", price: 70, cat: "noodles", veg: true },
  { name: "Cheese Maggi", desc: "Molten cheese maggi", price: 80, cat: "noodles", veg: true },
  { name: "Schezwan Maggi", desc: "Fiery schezwan maggi", price: 80, cat: "noodles", veg: true },
  { name: "Paneer Cheese Maggi", desc: "Paneer, cheese, maggi", price: 100, cat: "noodles", veg: true },
  { name: "Masala Noodles", desc: "Indian spiced noodles", price: 100, cat: "noodles", veg: true },
  { name: "Hakka Noodles", desc: "Wok-tossed, soy-glazed", price: 100, cat: "noodles", veg: true },
  { name: "Schezwan Noodles", desc: "Spicy schezwan noodles", price: 120, cat: "noodles", veg: true },
  { name: "Singapore Noodles", desc: "Curry-tinged Singapore style", price: 140, cat: "noodles", veg: true },

  // Burgers — extra cheese +₹10
  { name: "Aloo Tikki Burger", desc: "Spiced potato patty", price: 40, cat: "burger", veg: true },
  { name: "Veg Burger", desc: "Crisp veg patty, garden fresh", price: 50, cat: "burger", veg: true },
  { name: "Veg & Cheese Burger", desc: "Veg patty with cheddar", price: 60, cat: "burger", veg: true },
  { name: "Spicy Veg Cheese Burger", desc: "Spiced patty, molten cheese", price: 70, cat: "burger", veg: true },
  { name: "Mexican Burger", desc: "Beans, salsa, jalapeño", price: 80, cat: "burger", veg: true },
  { name: "Schezwan Burger", desc: "Schezwan-glazed patty", price: 80, cat: "burger", veg: true },
  { name: "Cheese Corn Burger", desc: "Sweet corn, cheese, patty", price: 90, cat: "burger", veg: true },
  { name: "Maharaja Burger", desc: "Double patty, loaded", price: 90, cat: "burger", veg: true },
  { name: "Cilantro Special Burger", desc: "Signature paneer burger", price: 100, cat: "burger", img: burger, popular: true, veg: true },

  // Hot Dogs — extra cheese +₹10
  { name: "Veg Hot Dog", desc: "Soft bun, veg sausage", price: 60, cat: "hotdog", veg: true },
  { name: "Veg & Cheese Hot Dog", desc: "Veg dog with cheese", price: 70, cat: "hotdog", veg: true },
  { name: "Schezwan Hot Dog", desc: "Spicy schezwan glaze", price: 80, cat: "hotdog", veg: true },
  { name: "Mexican Hot Dog", desc: "Beans, salsa, spice", price: 80, cat: "hotdog", veg: true },
  { name: "Paneer Cheese Hot Dog", desc: "Paneer, molten cheese", price: 100, cat: "hotdog", veg: true },
  { name: "Paneer Makhani Hot Dog", desc: "Buttery makhani paneer", price: 100, cat: "hotdog", veg: true },

  // Fries
  { name: "French Fries", desc: "Golden, crisp, salted", price: 60, cat: "fries", veg: true },
  { name: "Mayo Fries", desc: "Fries drizzled with mayo", price: 70, cat: "fries", veg: true },
  { name: "Schezwan Fries", desc: "Spicy schezwan-tossed", price: 80, cat: "fries", veg: true },
  { name: "Chilli Garlic Fries", desc: "Chilli-garlic seasoning", price: 80, cat: "fries", veg: true },
  { name: "Peri Peri Fries", desc: "Smoky African chilli dust", price: 80, cat: "fries", veg: true },
  { name: "Cheese Fries", desc: "House cheese sauce, herbs", price: 80, cat: "fries", img: fries, popular: true, veg: true },
  { name: "Chipotle Fries", desc: "Smoky chipotle seasoning", price: 80, cat: "fries", veg: true },
  { name: "Cilantro Masala Fries", desc: "House masala blend", price: 80, cat: "fries", veg: true },

  // Thick Cold Coffee
  { name: "Cold Coffee", desc: "Thick, cold, classic", price: 40, cat: "coffee", veg: true },
  { name: "Cold Coffee with Crush", desc: "Crushed ice, soft cream", price: 50, cat: "coffee", veg: true },
  { name: "Cold Coffee with Ice Cream", desc: "Crowned with vanilla scoop", price: 60, cat: "coffee", veg: true },
  { name: "Cold Coffee with Crush & Ice Cream", desc: "The full indulgence", price: 70, cat: "coffee", img: coldCoffee, popular: true, veg: true },

  // Rolls — extra cheese +₹10
  { name: "Veg Roll", desc: "Fresh veggies, soft wrap", price: 70, cat: "rolls", veg: true },
  { name: "Schezwan Roll", desc: "Spicy schezwan wrap", price: 90, cat: "rolls", veg: true },
  { name: "Spicy Paneer Roll", desc: "Fiery spiced paneer", price: 90, cat: "rolls", veg: true },
  { name: "Paneer Corn Roll", desc: "Paneer with sweet corn", price: 90, cat: "rolls", veg: true },
  { name: "Soya Paneer Roll", desc: "Soya & paneer, wrapped", price: 90, cat: "rolls", veg: true },
  { name: "Paneer Makhani Roll", desc: "Creamy makhani paneer", price: 100, cat: "rolls", veg: true },
  { name: "Kadai Paneer Roll", desc: "Kadai-spiced paneer", price: 100, cat: "rolls", veg: true },
  { name: "Cheese Corn Roll", desc: "Molten cheese, corn", price: 100, cat: "rolls", veg: true },
  { name: "Burritos (Mexican Roll)", desc: "Beans, salsa, rice", price: 100, cat: "rolls", veg: true },
  { name: "Tandoori Paneer Roll", desc: "Smoky tandoori paneer", price: 110, cat: "rolls", veg: true },
  { name: "Cilantro Special Roll", desc: "Our signature loaded roll", price: 120, cat: "rolls", veg: true },

  // International
  { name: "Veggie Nuggets (8 pcs)", desc: "Golden crumb-fried bites", price: 70, cat: "intl", veg: true },
  { name: "Veggie Fingers (6 pcs)", desc: "Crispy vegetable fingers", price: 70, cat: "intl", veg: true },
  { name: "Momos (Steamed)", desc: "Steamed dumplings, chilli sauce", price: 70, cat: "intl", veg: true },
  { name: "Momos (Fried)", desc: "Crisp golden dumplings", price: 80, cat: "intl", veg: true },
  { name: "Corn Fritters", desc: "Sweet corn fritters, crisp", price: 80, cat: "intl", veg: true },
  { name: "Cheesy Pizza Sticks", desc: "Pizza-stuffed cheesy sticks", price: 100, cat: "intl", veg: true },
  { name: "Cheese Corn Nuggets", desc: "Molten cheese-corn bites", price: 100, cat: "intl", veg: true },
  { name: "Cheesy Quesadillas", desc: "Grilled tortilla, molten cheese", price: 130, cat: "intl", veg: true },
  { name: "Chimichangas", desc: "Crisp-fried Mexican rolls", price: 150, cat: "intl", veg: true },
  { name: "Veg Au-Gratin", desc: "Baked with béchamel & cheese", price: 180, cat: "intl", veg: true },
  { name: "Moussaka", desc: "Layered vegetable Greek bake", price: 180, cat: "intl", veg: true },
  { name: "Veg Enchiladas", desc: "Baked tortillas, smoky sauce", price: 180, cat: "intl", veg: true },
  { name: "Shepherd's Pie", desc: "Vegetable pie, mash top", price: 180, cat: "intl", veg: true },

  // Milkshakes
  { name: "Vanilla Milkshake", desc: "Smooth Madagascar vanilla", price: 60, cat: "shakes", veg: true },
  { name: "Strawberry Milkshake", desc: "Fresh strawberries, cream", price: 70, cat: "shakes", veg: true },
  { name: "Chocolate Milkshake", desc: "Rich cocoa milkshake", price: 80, cat: "shakes", veg: true },
  { name: "Oreo Shake", desc: "Cookies-and-cream classic", price: 80, cat: "shakes", veg: true },
  { name: "Blueberry Milkshake", desc: "Sweet blueberry blend", price: 80, cat: "shakes", veg: true },
  { name: "Brownie Shake", desc: "Chocolate brownie milkshake", price: 90, cat: "shakes", img: shake, popular: true, veg: true },
  { name: "KitKat Milkshake", desc: "KitKat crumble milkshake", price: 90, cat: "shakes", veg: true },

  // Mocktails
  { name: "Lemon Squash (Salted)", desc: "Salted fresh lime", price: 50, cat: "mocktails", veg: true },
  { name: "Lemonade (Sweet)", desc: "Classic sweet lemonade", price: 60, cat: "mocktails", veg: true },
  { name: "Cool Blue", desc: "Blue curaçao cooler", price: 70, cat: "mocktails", veg: true },
  { name: "Virgin Mojito", desc: "Mint, lime, soda", price: 70, cat: "mocktails", veg: true },
  { name: "Pina Colada", desc: "Coconut, pineapple, cream", price: 70, cat: "mocktails", veg: true },
  { name: "Watermelon Cooler", desc: "Fresh watermelon, lime", price: 70, cat: "mocktails", veg: true },
  { name: "Chilli Guava Cooler", desc: "Guava with a chilli kick", price: 80, cat: "mocktails", veg: true },
  { name: "Apple Green Cooler", desc: "Green apple cooler", price: 80, cat: "mocktails", veg: true },
  { name: "Blue Mojito", desc: "Blue curaçao mint mojito", price: 80, cat: "mocktails", veg: true },
  { name: "Watermelon Mojito", desc: "Watermelon mint mojito", price: 80, cat: "mocktails", veg: true },
  { name: "Green Apple Mojito", desc: "Green apple mint mojito", price: 80, cat: "mocktails", veg: true },

  // Beverages
  { name: "Mineral Water", desc: "Small / Large bottle", price: 20, cat: "beverages", veg: true },
  { name: "Cold Drinks", desc: "Chilled soft drink", price: 20, cat: "beverages", veg: true },
  { name: "Hot Coffee", desc: "Freshly brewed hot coffee", price: 30, cat: "beverages", veg: true },
  { name: "Lemon Ice Tea", desc: "Chilled lemon iced tea", price: 40, cat: "beverages", veg: true },
  { name: "Blue Lagoon", desc: "Blue curaçao sparkler", price: 40, cat: "beverages", veg: true },
  { name: "Hot Chocolate", desc: "Rich Belgian-style cocoa", price: 70, cat: "beverages", veg: true },
  { name: "CAD B", desc: "Cold Coffee with a twist", price: 80, cat: "beverages", veg: true },

  // Desserts
  { name: "Chocolate Mousse", desc: "Silky dark chocolate", price: 50, cat: "dessert", img: dessert, veg: true },
  { name: "Lava Cake", desc: "Molten chocolate centre", price: 60, cat: "dessert", veg: true },
  { name: "Chocolate Brownie", desc: "Fudgy, warm brownie", price: 60, cat: "dessert", veg: true },
  { name: "Brownie with Ice Cream", desc: "Warm brownie, cold vanilla", price: 80, cat: "dessert", veg: true },
  { name: "Tiramisu", desc: "Coffee-soaked Italian classic", price: 80, cat: "dessert", veg: true },
  { name: "Pancakes", desc: "Fluffy stack, maple drizzle", price: 100, cat: "dessert", veg: true },
  { name: "Waffles", desc: "Golden waffles, toppings", price: 100, cat: "dessert", veg: true },
  { name: "Sizzling Brownie", desc: "Sizzling brownie, ice cream, chocolate", price: 120, cat: "dessert", popular: true, veg: true },
];

const COMBOS = [
  { title: "Burger Combo", items: "Burger + Fries + Cold Drink", price: 140 },
  { title: "Roll Combo", items: "Roll + Fries + Cold Drink", price: 150 },
  { title: "Hot Dog Combo", items: "Hot Dog + Fries + Cold Drink", price: 150 },
  { title: "Sandwich Combo", items: "Sandwich + Fries + Cold Drink", price: 150 },
  { title: "Pasta Combo", items: "Pasta + Garlic Bread + Cold Drink", price: 170 },
  { title: "Pizza Combo", items: "8\" Pizza + Fries + Cold Drink", price: 200 },
];

const REVIEWS = [
  { name: "Aarav S.", text: "Excellent ambience, tasty food and great service. A spot we keep returning to.", rating: 5 },
  { name: "Priya M.", text: "The baked pasta was bubbling hot and cheesy — exactly what comfort food should feel like.", rating: 5 },
  { name: "Rohan K.", text: "Cold coffee with crush is a must try. The crowd, the lights, the food — all on point.", rating: 4 },
  { name: "Sneha D.", text: "Affordable prices and delicious food. One of the best cafés in Chinchwad.", rating: 5 },
];

const GALLERY = [coldCoffee, pizza, alfredo, interior, burger, sandwich, fries, shake, dessert];

function Home() {
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Item | null>(null);
  const [favs, setFavs] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => MENU.filter(m =>
    (cat === "all" || m.cat === cat) &&
    (query === "" || m.name.toLowerCase().includes(query.toLowerCase()) || m.desc.toLowerCase().includes(query.toLowerCase()))
  ), [cat, query]);

  const toggleFav = (n: string) => setFavs(p => { const s = new Set(p); s.has(n) ? s.delete(n) : s.add(n); return s; });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
        <img src={hero} alt="Espresso pour at Cafe Cilantro" width={1600} height={1024} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/85" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20 text-cream">
          <div className="animate-fade-up max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cream/80 backdrop-blur">
              <Leaf className="h-3.5 w-3.5 text-gold" /> Chinchwad · Est. café
            </span>
            <h1 className="mt-8 text-5xl leading-[1.05] sm:text-7xl md:text-[5.5rem]">
              Where every bite<br /><em className="not-italic text-gold">feels like home.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base text-cream/75 sm:text-lg">
              Fresh coffee. Comfort food. Unhurried moments — served warm in the heart of Chinchwad.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#menu" className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-charcoal transition hover:bg-gold">
                Explore Menu <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a href="#visit" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur transition hover:bg-cream/10">
                Visit Us
              </a>
              <a href="#reserve" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-cream/80 transition hover:text-cream">
                Reserve a Table <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Floating badges */}
          <div className="pointer-events-none absolute bottom-10 right-6 hidden flex-col gap-3 md:flex">
            <FloatBadge icon={<Star className="h-3.5 w-3.5 fill-gold text-gold" />} label="4.0 · 850+ reviews" />
            <FloatBadge icon={<Heart className="h-3.5 w-3.5 text-gold" />} label="850+ happy guests" />
            <FloatBadge icon={<Clock className="h-3.5 w-3.5 text-gold" />} label="Open till 11 PM" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-20">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">A warm corner of Chinchwad, made for slow afternoons.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cafe Cilantro is one of Chinchwad's favourite cafés — a place for handcrafted coffee,
              creamy pasta, loaded burgers, stone-baked pizza and desserts that feel like a hug.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Friends gather. Families settle in. The kitchen hums. We've spent years refining a single idea —
              that good food, brewed slowly and served warmly, becomes a memory long after the plate is cleared.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat n="850+" label="Happy guests" />
              <Stat n="4.0★" label="Google rating" />
              <Stat n="20+" label="Signature dishes" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
              <img src={interior} alt="Cafe Cilantro interior" width={1400} height={900} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="glass absolute -bottom-6 -left-6 rounded-2xl p-5 shadow-soft">
              <p className="font-display text-2xl text-forest">Est.</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Chinchwad · Sector 18</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-3 text-3xl sm:text-4xl">A small kitchen, a long menu, one rule — make it well.</h2>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { i: Coffee, t: "Freshly Brewed Coffee" },
              { i: Pizza, t: "Stone-Baked Pizza" },
              { i: Sandwich, t: "Handcrafted Sandwiches" },
              { i: Leaf, t: "100% Vegetarian" },
              { i: Heart, t: "Premium Ambience" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-forest/30 hover:shadow-soft">
                <Icon className="h-6 w-6 text-forest transition group-hover:text-gold" strokeWidth={1.5} />
                <p className="mt-6 font-display text-xl">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Signature</Eyebrow>
              <h2 className="mt-3 text-4xl sm:text-5xl">Dishes our regulars order on repeat.</h2>
            </div>
            <a href="#menu" className="text-sm text-forest underline-offset-4 hover:underline">View full menu →</a>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MENU.filter(m => m.popular && m.img).slice(0, 6).map(m => (
              <article key={m.name} className="hover-lift group cursor-pointer overflow-hidden rounded-3xl bg-card" onClick={() => setActive(m)}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" width={800} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-gold/95 px-3 py-1 text-[10px] uppercase tracking-widest text-charcoal">Popular</span>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl">{m.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                  <p className="font-display text-xl text-forest">₹{m.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="border-t border-border bg-secondary/30 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>The Menu</Eyebrow>
              <h2 className="mt-3 text-4xl sm:text-5xl">Everything we serve, in one calm place.</h2>
            </div>
            <div className="relative w-full max-w-xs">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search a dish…"
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition focus:border-forest"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition ${
                  cat === c.id ? "border-forest bg-forest text-cream" : "border-border bg-card text-muted-foreground hover:border-forest/40 hover:text-forest"
                }`}>
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(m => (
              <div key={m.name} className="group flex gap-5 rounded-2xl border border-border bg-card p-5 transition hover:border-forest/30 hover:shadow-soft">
                {m.img ? (
                  <img src={m.img} alt={m.name} loading="lazy" width={160} height={160} className="h-24 w-24 flex-shrink-0 rounded-xl object-cover" />
                ) : (
                  <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-xl bg-secondary text-forest">
                    <Coffee className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {m.veg && <span className="grid h-3.5 w-3.5 place-items-center border border-emerald-700"><span className="h-1.5 w-1.5 rounded-full bg-emerald-700" /></span>}
                        <h3 className="truncate font-display text-lg leading-tight">{m.name}</h3>
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{m.desc}</p>
                    </div>
                    <button onClick={() => toggleFav(m.name)} aria-label="favourite" className="text-muted-foreground transition hover:text-gold">
                      <Heart className={`h-4 w-4 ${favs.has(m.name) ? "fill-gold text-gold" : ""}`} />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="font-display text-base text-forest">₹{m.price}</p>
                    <div className="flex items-center gap-2">
                      {m.popular && <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-coffee">Popular</span>}
                      <button onClick={() => setActive(m)} className="text-xs text-forest underline-offset-4 hover:underline">Quick view</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && <p className="col-span-full py-10 text-center text-muted-foreground">No dishes match that search.</p>}
          </div>
        </div>
      </section>

      {/* COMBOS */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Combos</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Pair it well. Pay a little less.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMBOS.map(c => (
              <div key={c.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:border-gold/50 hover:shadow-soft">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 transition group-hover:scale-150" />
                <h3 className="relative font-display text-2xl">{c.title}</h3>
                <p className="relative mt-3 text-sm text-muted-foreground">{c.items}</p>
                <p className="relative mt-8 font-display text-3xl text-forest">₹{c.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="border-t border-border bg-secondary/30 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">A look around.</h2>
          <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {GALLERY.map((g, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-2xl">
                <img src={g} alt="" loading="lazy" className="h-auto w-full object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Guests say</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Small notes, kindly written.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map(r => (
              <figure key={r.name} className="rounded-3xl border border-border bg-card p-7">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                </div>
                <blockquote className="mt-5 font-display text-lg leading-snug">"{r.text}"</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="border-t border-border bg-forest py-24 text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Instagram</span>
              <h2 className="mt-3 text-4xl text-cream sm:text-5xl">Loved by foodies <Heart className="inline h-7 w-7 fill-gold text-gold" /></h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm transition hover:bg-cream/10">
              @cafecilantro <Instagram className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[coldCoffee, pizza, alfredo, burger, fries, dessert].map((g, i) => (
              <a key={i} href="#" className="group relative aspect-square overflow-hidden rounded-2xl">
                <img src={g} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 grid place-items-center bg-charcoal/0 transition group-hover:bg-charcoal/40">
                  <Instagram className="h-5 w-5 text-cream opacity-0 transition group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT + RESERVE */}
      <section id="visit" className="py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Find us</Eyebrow>
            <h2 className="mt-3 text-4xl sm:text-5xl">Come say hello.</h2>
            <div className="mt-8 space-y-5 text-sm">
              <Info icon={<MapPin className="h-4 w-4" />} title="Address">
                Shop No. 4, Nakshatra Phase 2, Vitthal Nagar,<br />Sector 18, Chinchwad, Pimpri-Chinchwad, MH – 411019
              </Info>
              <Info icon={<Phone className="h-4 w-4" />} title="Phone">+91 98229 80533</Info>
              <Info icon={<Clock className="h-4 w-4" />} title="Hours">Daily · 10:00 AM – 11:00 PM</Info>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+919822980533" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm text-cream transition hover:bg-forest-deep">
                <Phone className="h-4 w-4" /> Call now
              </a>
              <a href="https://maps.google.com/?q=Cafe+Cilantro+Chinchwad" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition hover:border-forest hover:text-forest">
                <MapPin className="h-4 w-4" /> Get directions
              </a>
            </div>
            <div className="mt-10 aspect-[16/10] overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Cafe Cilantro on Google Maps"
                src="https://maps.google.com/maps?q=Cafe%20Cilantro%20Chinchwad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full" loading="lazy"
              />
            </div>
          </div>

          <form id="reserve" onSubmit={e => { e.preventDefault(); alert("Thank you — we'll confirm shortly."); }}
            className="self-start rounded-3xl border border-border bg-card p-8 sm:p-10">
            <Eyebrow>Reserve</Eyebrow>
            <h3 className="mt-3 font-display text-3xl">Book a table.</h3>
            <p className="mt-2 text-sm text-muted-foreground">We'll keep a corner warm for you.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Date" name="date" type="date" />
              <Field label="Time" name="time" type="time" />
              <Field label="Guests" name="guests" type="number" defaultValue={2} />
              <Field label="Occasion (optional)" name="occasion" />
            </div>
            <label className="mt-4 block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Notes</span>
              <textarea name="notes" rows={3} className="mt-2 w-full resize-none rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-forest" />
            </label>
            <button className="mt-6 w-full rounded-full bg-forest py-3.5 text-sm text-cream transition hover:bg-forest-deep">
              Request reservation
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-charcoal py-16 text-cream/80">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl text-cream">Cafe Cilantro</p>
            <p className="mt-3 max-w-sm text-sm">Where every bite feels like home. A small café in Chinchwad serving coffee, comfort and quiet afternoons.</p>
            <div className="mt-6 flex gap-3">
              <Social href="#" icon={<Instagram className="h-4 w-4" />} />
              <Social href="#" icon={<Facebook className="h-4 w-4" />} />
              <Social href="https://wa.me/919822980533" icon={<MessageCircle className="h-4 w-4" />} />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/50">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["home", "about", "menu", "gallery", "reviews", "visit"].map(l => (
                <li key={l}><a href={`#${l}`} className="capitalize transition hover:text-gold">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/50">Newsletter</p>
            <p className="mt-4 text-sm">Slow updates. New dishes. No spam.</p>
            <form onSubmit={e => { e.preventDefault(); alert("Subscribed."); }} className="mt-4 flex gap-2">
              <input type="email" required placeholder="you@email.com" className="min-w-0 flex-1 rounded-full border border-cream/15 bg-cream/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-gold" />
              <button className="rounded-full bg-gold px-4 py-2.5 text-sm text-charcoal transition hover:bg-cream">Join</button>
            </form>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-cream/10 px-6 pt-6 text-xs text-cream/40">
          © {new Date().getFullYear()} Cafe Cilantro · Chinchwad
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/919822980533" target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-forest text-cream shadow-lift transition hover:scale-105 hover:bg-gold hover:text-charcoal">
        <MessageCircle className="h-5 w-5" />
      </a>

      {/* Quick view modal */}
      {active && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-charcoal/70 p-4 backdrop-blur" onClick={() => setActive(null)}>
          <div className="grid w-full max-w-3xl overflow-hidden rounded-3xl bg-card md:grid-cols-2" onClick={e => e.stopPropagation()}>
            <div className="aspect-square bg-secondary">
              {active.img ? <img src={active.img} alt={active.name} className="h-full w-full object-cover" /> :
                <div className="grid h-full place-items-center text-forest"><Coffee className="h-12 w-12" strokeWidth={1.2} /></div>}
            </div>
            <div className="relative p-8 sm:p-10">
              <button onClick={() => setActive(null)} className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full hover:bg-secondary"><X className="h-4 w-4" /></button>
              {active.popular && <span className="rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-widest text-coffee">Popular</span>}
              <h3 className="mt-4 font-display text-3xl">{active.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{active.desc}</p>
              <p className="mt-8 font-display text-3xl text-forest">₹{active.price}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Served fresh · Vegetarian</p>
              <a href="https://wa.me/919822980533" target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest py-3 text-sm text-cream hover:bg-forest-deep">
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 py-3 transition ${scrolled ? "glass mx-4 shadow-soft sm:mx-auto" : "text-cream"}`}>
        <a href="#home" className={`font-display text-xl tracking-wide ${scrolled ? "text-forest" : "text-cream"}`}>
          Cafe <em className="not-italic text-gold">Cilantro</em>
        </a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.18em] md:flex">
          {[["About", "about"], ["Menu", "menu"], ["Gallery", "gallery"], ["Reviews", "reviews"], ["Visit", "visit"]].map(([l, h]) => (
            <a key={h} href={`#${h}`} className={`transition hover:text-gold ${scrolled ? "text-charcoal/70" : "text-cream/80"}`}>{l}</a>
          ))}
        </nav>
        <a href="#reserve" className={`rounded-full px-5 py-2 text-xs uppercase tracking-widest transition ${scrolled ? "bg-forest text-cream hover:bg-forest-deep" : "bg-cream text-charcoal hover:bg-gold"}`}>Reserve</a>
      </div>
    </header>
  );
}

function FloatBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="glass-dark animate-float pointer-events-auto flex items-center gap-2 rounded-full px-4 py-2 text-xs text-cream/90">
      {icon} {label}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-xs uppercase tracking-[0.3em] text-coffee">{children}</span>;
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-forest">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

function Info({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-forest/10 text-forest">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="mt-1 leading-relaxed text-foreground">{children}</p>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", defaultValue }: { label: string; name: string; type?: string; defaultValue?: string | number }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input name={name} type={type} defaultValue={defaultValue} required={type !== "text" || name === "name"}
        className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-forest" />
    </label>
  );
}

function Social({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 transition hover:border-gold hover:text-gold">
      {icon}
    </a>
  );
}
