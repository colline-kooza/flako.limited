"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState();
  //   const [creals, setCreals] = useState();
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("/api/products");
        const productData = await response.json();
        setProducts(productData);
      } catch (error) {
        console.log("error", error);
      }
    }
    getProducts();
  }, []);
  return (
    <CartProvider.provider value={{ products }}>
      {children}
    </CartProvider.provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
