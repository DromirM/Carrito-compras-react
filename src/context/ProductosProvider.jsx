import { productosContext } from "./ProductosContext";
import { useEffect, useState } from "react";
import { useFetch } from '../hooks/useFetch';

export const ProductosProvider = ({children}) => {
  const [productos, setProductos] = useState([]);
  const {data, isLoading, error} = useFetch('https://fakestoreapi.com/products');

  useEffect(() => {
    if(data){
      setProductos(data);
    }
  }, [data]);

  return (
    <productosContext.Provider value={{productos, isLoading, error}}>
      {children}
    </productosContext.Provider>
  );
};
