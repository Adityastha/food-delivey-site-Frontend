import logo from "./logo.png";
import search_icon from "./search-icon.png";
import take_away from "./take-away.png";

import item_1 from "./icon-all.png";
import item_2 from "./icon-breakfast.png";
import item_3 from "./icon-lunch.png";
import item_4 from "./icon-dinner.png";
import item_5 from "./icon-dessert.png";
import item_6 from "./icon-drink.png";

import food_1 from "./food_1.jpg";
import food_2 from "./food_2.jpg";
import food_3 from "./food_3.avif";
import food_4 from "./food_4.avif";
import food_5 from "./food_5.jpg";
import food_6 from "./food_6.jpg";
import food_7 from "./food_7.jpg";
import food_8 from "./food_8.jpg";
import food_9 from "./food_9.avif";
import food_10 from "./food_10.jpg";
import food_11 from "./food_11.jpg";
import food_12 from "./food_12.jpg";
import food_13 from "./food_13.jpg";
import food_14 from "./food_14.jpg";
import food_15 from "./food_15.avif";
import food_16 from "./food_16.jpg";
import food_17 from "./food_17.jpg";
import food_18 from "./food_18.png";
import food_19 from "./food_19.avif";
import food_20 from "./food_20.jpg";
import food_21 from "./food_21.jpg";
import food_22 from "./food_22.jpg";
import food_23 from "./food_23.jpg";
import food_24 from "./food_24.jpg";

import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import rating_starts from "./rating_starts.png";

export const assets = {
  logo,
  search_icon,
  take_away,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
};

export const categories = [
  {
    id: 1,
    name: "All",
    image: item_1,
  },
  {
    id: 2,
    name: "Breakfast",
    image: item_2,
  },
  {
    id: 3,
    name: "Lunch",
    image: item_3,
  },
  {
    id: 4,
    name: "Dinner",
    image: item_4,
  },
  {
    id: 5,
    name: "Desserts",
    image: item_5,
  },
  {
    id: 6,
    name: "Drinks",
    image: item_6,
  },
];
export const food_list = [
  {
    _id: "1",
    name: "Scrambled eggs",
    image: food_1,
    price: 12,
    description:
      "A protein-rich dish that fuels your body with essential nutrients.",
    category: "Breakfast",
  },
  {
    _id: "2",
    name: "Pancakes",
    image: food_2,
    price: 18,
    description:
      "Pancakes are a fluffy, satisfying meal that provides quick energy.",
    category: "Breakfast",
  },
  {
    _id: "3",
    name: "Omelete",
    image: food_3,
    price: 16,
    description: "Fluffy eggs with your choice of delicious fillings.",
    category: "Breakfast",
  },
  {
    _id: "4",
    name: "Sandwich",
    image: food_4,
    price: 24,
    description: "A quick, delicious meal with fresh ingredients.",
    category: "Breakfast",
  },
  {
    _id: "5",
    name: "Curry with Rice",
    image: food_5,
    price: 14,
    description: " A flavorful, aromatic dish served with steamed rice.",
    category: "Lunch",
  },
  {
    _id: "6",
    name: "Thakali Khana Set",
    image: food_6,
    price: 12,
    description: "A traditional Nepali meal with dal, rice, curry, and pickles",
    // category: ["Lunch", "Dinner"],
    category: "Lunch",
  },
  {
    _id: "7",
    name: "Newari Khaja Set",
    image: food_7,
    price: 20,
    description:
      "A flavorful Newari feast with beaten rice, meat, and traditional sides.",
    category: "Lunch",
  },
  {
    _id: "8",
    name: "Puri Tarkari",
    image: food_8,
    price: 15,
    description: "Fluffy fried bread served with spiced vegetable curry",
    category: "Lunch",
  },
  {
    _id: "9",
    name: "Chicken wings",
    image: food_9,
    price: 14,
    description: "Crispy, juicy wings tossed in flavorful sauces.",
    category: "Dinner",
  },
  {
    _id: "10",
    name: "Butter Chicken",
    image: food_10,
    price: 22,
    description: "Tender chicken in a rich, creamy tomato sauce.",
    category: "Dinner",
  },
  {
    _id: "11",
    name: "Jira Rice",
    image: food_11,
    price: 10,
    description:
      "Fragrant basmati rice seasoned with cumin for a flavorful side dish.",
    category: "Dinner",
  },
  {
    _id: "12",
    name: "Tandoori Panner",
    image: food_12,
    price: 12,
    description:
      "Marinated paneer grilled to perfection with smoky, aromatic flavors.",
    category: "Dinner",
  },
  {
    _id: "13",
    name: "Gulab jamun",
    image: food_13,
    price: 12,
    description: "Soft, syrup-soaked dough balls for a sweet, indulgent treat.",
    category: "Desserts",
  },
  {
    _id: "14",
    name: "Kheer",
    image: food_14,
    price: 18,
    description:
      "Creamy rice pudding flavored with cardamom and sweetened to perfection.",
    category: "Desserts",
  },
  {
    _id: "15",
    name: "Cheese Cake",
    image: food_15,
    price: 16,
    description:
      "A rich, creamy dessert with a buttery crust and smooth cheese filling.",
    category: "Desserts",
  },
  {
    _id: "16",
    name: "Ladu",
    image: food_16,
    price: 24,
    description: "Sweet, bite-sized treats made from flour, sugar, and ghee",
    category: "Desserts",
  },
  {
    _id: "17",
    name: "Veg momo",
    image: food_17,
    price: 14,
    description:
      "teamed dumplings filled with seasoned vegetables, served with a tangy dipping sauce.",
    category: "Lunch",
  },
  {
    _id: "18",
    name: "Tibetian Thukpa",
    image: food_18,
    price: 12,
    description: "A hearty noodle soup with vegetables and savory broth.",
    category: "Lunch",
  },
  {
    _id: "19",
    name: "Cheese Pizza",
    image: food_19,
    price: 20,
    description:
      "A classic pizza topped with gooey melted cheese on a crispy crust.",
    category: "Lunch",
  },
  {
    _id: "20",
    name: "Jhol Momo",
    image: food_20,
    price: 15,
    description: "Steamed dumplings served in a flavorful, spicy broth.",
    category: "Lunch",
  },
  {
    _id: "21",
    name: "Lassi ",
    image: food_21,
    price: 14,
    description:
      "A refreshing yogurt-based drink, perfect for cooling down and revitalizing.",
    category: "Pure Veg",
  },
  {
    _id: "22",
    name: "Mojito mint",
    image: food_22,
    price: 22,
    description:
      "A refreshing mix of mint, lime, and soda, perfect for a cool, tangy treat.",
    category: "Pure Veg",
  },
  {
    _id: "23",
    name: "Strawberry Smoothie",
    image: food_23,
    price: 10,
    description: "A creamy, refreshing blend of fresh strawberries and yogurt.",
    category: "Pure Veg",
  },
  {
    _id: "24",
    name: "Lemonade",
    image: food_24,
    price: 12,
    description:
      "A tangy, refreshing drink made with fresh lemon juice and a hint of sweetness.",
    category: "Pure Veg",
  },
];
