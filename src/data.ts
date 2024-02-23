import { RogueAlpacaSled } from "./assets/images";
import { RogueEchoDogSled } from "./assets/images";

import { RogueSliceSled } from "./assets/images";

interface StaticAsset {
  RogueAlpacaSled: string;
  RogueEchoDogSled: string;
}
type Image = StaticAsset | string;
interface Review {
  id: number;
  userId: number;
  rating: number;
  comment: string;
  date: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: Image[];
  description: string;
  category: string;
  brand: string;
  rating: number;
  reviews: Review[];
}

interface ProductsResponse {
  products: Product[];
}

interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  cart: any[]; // You might want to define a type for cart items
  wishlist: Product[];
}

interface Data {
  users: User[];
}

export const productsResponse: ProductsResponse = {
  products: [
    {
      id: "64c9faed738507dddfc7c73c",
      name: "RogueAlpacaSled",
      price: 10,
      stock: 50,
      image: [RogueAlpacaSled, RogueAlpacaSled],
      description: "This is Product 1. It's a great product for your needs.",
      category: "Slice Sed",
      brand: "Rogue",
      rating: 4.5,
      reviews: [
        {
          id: 1,
          userId: 1,
          rating: 5,
          comment: "Great product! I love it.",
          date: "2023-08-01",
        },
        {
          id: 2,
          userId: 2,
          rating: 4,
          comment: "Good product. Recommended.",
          date: "2023-08-02",
        },
      ],
    },
    {
      id: "64c9faed738507dddfc7c73c",
      name: "RogueEchoDogSled",
      price: 10,
      stock: 50,
      image: [RogueEchoDogSled, RogueEchoDogSled],
      description: "This is Product 1. It's a great product for your needs.",
      category: "Slice Sed",
      brand: "Rogue",
      rating: 4.5,
      reviews: [
        {
          id: 1,
          userId: 1,
          rating: 5,
          comment: "Great product! I love it.",
          date: "2023-08-01",
        },
        {
          id: 2,
          userId: 2,
          rating: 4,
          comment: "Good product. Recommended.",
          date: "2023-08-02",
        },
      ],
    },
    {
      id: "64c9faed738507dddfc7c73c",
      name: "RogueSliceSled",
      price: 10,
      stock: 50,
      image: [RogueSliceSled, RogueSliceSled],
      description: "This is Product 1. It's a great product for your needs.",
      category: "Slice Sed",
      brand: "Rogue",
      rating: 4.5,
      reviews: [
        {
          id: 1,
          userId: 1,
          rating: 5,
          comment: "Great product! I love it.",
          date: "2023-08-01",
        },
        {
          id: 2,
          userId: 2,
          rating: 4,
          comment: "Good product. Recommended.",
          date: "2023-08-02",
        },
      ],
    },
  ],
};

export const data: Data = {
  users: [
    {
      id: 1,
      name: "random_user_123",
      password: "RandomPassword123!",
      email: "random_user_123@example.com",
      cart: [],
      wishlist: [
        {
          id: "64c9faed738507dddfc7c73c",
          name: "Product_1",
          price: 10,
          stock: 50,
          image: [
            "/src/assets/images/productsSmall/product_1.webp",
            "/src/assets/images/productsMedium/product_1.webp",
          ],
          description:
            "This is Product 1. It's a great product for your needs.",
          category: "Electronics",
          brand: "Brand_XYZ",
          rating: 4.5,
          reviews: [
            {
              id: 1,
              userId: 1,
              rating: 5,
              comment: "Great product! I love it.",
              date: "2023-08-01",
            },
            {
              id: 2,
              userId: 2,
              rating: 4,
              comment: "Good product. Recommended.",
              date: "2023-08-02",
            },
          ],
        },
        {
          id: "f91eb86a8f36c973d5e80a7c",
          name: "Product_2",
          price: 15,
          stock: 30,
          image: [
            "/src/assets/images/productsSmall/product_2.webp",
            "/src/assets/images/productsMedium/product_2.webp",
          ],
          description:
            "Product 2 is a high-quality product with great features.",
          category: "Home & Kitchen",
          brand: "Brand_ABC",
          rating: 4.0,
          reviews: [
            {
              id: 3,
              userId: 1,
              rating: 4,
              comment: "Nice product. Worth the price.",
              date: "2023-08-03",
            },
          ],
        },
      ],
    },
  ],
};
