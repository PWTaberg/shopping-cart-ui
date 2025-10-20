// Context and Provider use separate files - vite hot reload
// See CartContext-working.jsx for a single file version

import { type Product, type CartItem } from "../types";

export type CartState = {
  cart: CartItem[];
};

type CartContextValue = CartState & {
  addToCart: (product: Product) => void;
  removeFromCart: (cartId: number) => void;
  clearCart: () => void;
};
import { createContext, useContext } from "react";

export const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must have a value");
  }
  return context;
}
