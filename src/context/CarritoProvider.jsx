import { CarritoContext } from './CarritoContext';
import { useReducer } from 'react';

const initialState = [];

const shoppingReducer = (state = initialState, action = {}) =>{
  switch(action.type){
    case '[CARRITO] Agregar Compra':
      return [...state, action.payload];

    case '[CARRITO] Aumentar Cantidad Compra':
      return state.map(item => {
        const cant = item.cantidad + 1;
        if(item.id === action.payload) return {...item, cantidad: cant};
        return item;
      });
    case '[CARRITO] Disminuir Cantidad Compra':
      return state.map(item =>{
        const cant = item.cantidad - 1;
        if(item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant};
        return item;
      });
    case '[CARRITO] Eliminar Compra':
      return state.filter(purchase => purchase.id !== action.payload);
    default:
      return state;
  }
};

export const CarritoProvider = ({children}) => {

  const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)

  const addPurchase = (compra) =>{
    compra.cantidad = 1; //Añado una propiedad nueva.
    const action = {
      type: '[CARRITO] Agregar Compra',
      payload: compra
    };
    
    dispatch(action);
  };

  const increaseAmount = (id) =>{
    const action = {
      type: '[CARRITO] Aumentar Cantidad Compra',
      payload: id
    };
    dispatch(action);
  };

  const decreaseAmount = (id) =>{
    const action = {
      type: '[CARRITO] Disminuir Cantidad Compra',
      payload: id
    };
    dispatch(action);
  };

  const deletePurchase = (id) =>{
    const action = {
      type: '[CARRITO] Eliminar Compra',
      payload: id
    };
    dispatch(action);
  };


  return (
    <CarritoContext.Provider value={{shoppingList, addPurchase, increaseAmount, decreaseAmount, deletePurchase}}>
      {children}
    </CarritoContext.Provider>
  );
  
};