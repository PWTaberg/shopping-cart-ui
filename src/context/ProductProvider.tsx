// See ProductContext-working.jsx
// A single file holding the Context and Provider

import { useState, useEffect, type ReactNode} from "react";
import {ProductContext} from './ProductContext'
import {type Product} from '../types'

export function ProductProvider({ children }:{children:ReactNode}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string |  null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
  
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        if( err instanceof Error) {

          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}
