import { useContext } from "react";
import { Card } from "../components/Card";
import { productosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {

  const {productos, isLoading, error} = useContext(productosContext);
  const {addPurchase, deletePurchase} = useContext(CarritoContext);

  const handleAdd = (purchase) =>{
    addPurchase(purchase);
  };

  const handleDelete = (id) =>{
    deletePurchase(id);
  };

  if (isLoading) return (<p>Cargando...</p>);
  if (error) return (<p>Error: {error.message}</p>);

  return (
    <>
      <h1>Seccion de compras</h1>
      <hr />

      {productos.map(producto =>(
        <Card
          key={producto.id}
          image={producto.image} 
          title={producto.title} 
          description={producto.description} 
          price={"$" + producto.price}
          handleAdd={() => handleAdd(producto)}
          handleDelete={() => handleDelete(producto.id)}
        >
        </Card>
      ))}

    </>
  );
};