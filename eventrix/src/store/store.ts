import { Eventrix } from "eventrix";
import receiversList from "./cart/receivers";

const initialState = {
  cartItems: [],
  products: [
    {
      id: 1,
      name: "Blue T-Shirt",
      price: 20.99,
      image: "https://example.com/blue-t-shirt.jpg",
    },
    {
      id: 2,
      name: "Red Hoodie",
      price: 35.99,
      image: "https://example.com/red-hoodie.jpg",
    },
    {
      id: 3,
      name: "Black Jeans",
      price: 49.99,
      image: "https://example.com/black-jeans.jpg",
    },
    {
      id: 4,
      name: "Gray Sweatshirt",
      price: 28.99,
      image: "https://example.com/gray-sweatshirt.jpg",
    },
    {
      id: 5,
      name: "White Sneakers",
      price: 65.99,
      image: "https://example.com/white-sneakers.jpg",
    },
    {
      id: 6,
      name: "Pink Skirt",
      price: 22.99,
      image: "https://example.com/pink-skirt.jpg",
    },
    {
      id: 7,
      name: "Brown Leather Boots",
      price: 89.99,
      image: "https://example.com/brown-leather-boots.jpg",
    },
    {
      id: 8,
      name: "Yellow Raincoat",
      price: 45.99,
      image: "https://example.com/yellow-raincoat.jpg",
    },
    {
      id: 9,
      name: "Green Backpack",
      price: 39.99,
      image: "https://example.com/green-backpack.jpg",
    },
    {
      id: 10,
      name: "Purple Dress",
      price: 55.99,
      image: "https://example.com/purple-dress.jpg",
    },
  ],
};

const eventrixStore = new Eventrix(initialState, receiversList);

export default eventrixStore;
