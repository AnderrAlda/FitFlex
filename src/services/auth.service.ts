interface Review {
  id: number;
  userId: number;
  rating: number;
  comment: string;
  date: string;
}
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string[];
  description: string;
  category: string;
  brand: string;
  rating: number;
  reviews: Review[];
}

interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  wishlist: WishlistItem[];
}

const userUrl = "http://localhost:3000/data";

export const getUsers = (userEmail: string) => {
  return fetch(userUrl)
    .then((res) => res.json())
    .then((data) => {
      // Find the user with the given userName
      const user = data.users.find((user: User) => user.email === userEmail);
      return user;
    });
};

export const getAllUsers = () => {
  return fetch(userUrl).then((res) => res.json());
};

const productUrl = "http://localhost:3000/productsResponse";

export const getProducts = () => {
  return fetch(productUrl).then((res) => res.json());
};
