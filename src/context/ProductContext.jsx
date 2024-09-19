import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProduct(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
}
// custom hook
const useProduct = ()=>{
     const product = useContext(ProductContext)
     return product
}

const useProductDetasil = id =>{
  const product = useContext(ProductContext)
  const result = product.find(item => item.id === id)
  return result
}

export default ProductProvider;
export{useProduct,useProductDetasil}  