const baseUrl = "https://rickandmortyapi.com/api/";

const characterUrl = baseUrl + "character/";

export const getMorty = () => {
  return fetch(characterUrl + "2").then((res) => res.json());
};

const userUrl = "http://localhost:3000/data";
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

export const getUsers = (userEmail: string) => {
  return fetch(userUrl)
    .then((res) => res.json())
    .then((data) => {
      // Find the user with the given userName
      const user = data.users.find((user: User) => user.email === userEmail);
      return user;
    });
};
