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
  image: string[];
  description: string;
  category: string;
  brand: string;
  rating: number;
  reviews: Review[];
}

interface Bank {
  nameCard: string;
  cardNumber: number;
  expireDate: string;
  cvv: number;
}

interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  rol: string;
  address: string;
  bank: Bank;
  profilePicture: string;
}
