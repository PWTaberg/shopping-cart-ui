// See ProductContext-working for a single file version

import { createContext, useContext } from "react";
import {type Product} from '../types'

export type ProductsState = {
  products: Product[];
};

type ProductContextValue = ProductsState & {
  loading: boolean;
  error: string | null;
}
export const ProductContext = createContext<ProductContextValue | null>(null);

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProducts must have a value");
  }
  return context;
}