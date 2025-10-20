import { type ReactNode, useState, useEffect } from "react";
import {CartContext } from './CartContext'
import {type Product, type CartItem} from '../types'

export function CartProvider({ children }:{children:ReactNode}) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


   const addToCart = (product: Product) => {
    setCart((prev:CartItem[]) => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id:number) => {
    setCart((prev:CartItem[]) => prev.filter(item => item.id != id));
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
