export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  image: string;
};

export type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  image: string;
  qty: number;
};
