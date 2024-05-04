
import React, { createContext, useEffect, useState } from 'react';
import { fs } from '../firebase';
import { collection, onSnapshot, doc } from 'firebase/firestore';

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = collection(fs, 'Products');
      const unsubscribe = onSnapshot(productsRef, (snapshot) => {
        const updatedProducts = [];
        snapshot.forEach((doc) => {
          const newProduct = {
            ProductID: doc.id,
            ProductName: doc.data().ProductName,
            ProductDes: doc.data().ProductDes,
            ProductPrice: doc.data().ProductPrice,
            ProductImg: doc.data().ProductImg,
          };
          updatedProducts.push(newProduct);
        });
        setProducts(updatedProducts);
      });
      return () => unsubscribe();
    };
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

