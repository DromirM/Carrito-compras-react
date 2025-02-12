import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {

  const {shoppingList, increaseAmount, decreaseAmount, deletePurchase} = useContext(CarritoContext);

  const calculateTotal = () =>{
    return shoppingList.reduce((total, item) => total + (item.price * item.cantidad), 0).toFixed(2);
  };

  const handlePrint = () =>{
    print();
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            shoppingList.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button 
                    className="btn btn-outline-danger"
                    onClick={() => decreaseAmount(item.id)}
                  >
                    -
                  </button>

                  <button className="btn btn-primary">{item.cantidad}</button>

                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => increaseAmount(item.id)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => deletePurchase(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          }

          <th><b>TOTAL:</b> </th>
          <td></td>
          <td>${calculateTotal()}</td>
          <td></td>

        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary" 
          onClick={handlePrint}
          disabled={shoppingList<1}
        >Confirmar Compra</button>
      </div>
    </>
  )
}
