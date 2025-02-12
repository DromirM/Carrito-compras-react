import '../styles/card.css';
import { useState } from 'react';

export const Card = ({image, title, description, price, handleAdd, handleDelete}) => {

  const [added, setAdded] = useState(false);

  const addItem = () =>{
    handleAdd();
    setAdded(true);
  };

  const deleteItem = () =>{
    handleDelete();
    setAdded(false);
  };

  return (
    <div className="tarjeta">
      <img className='tarjeta-imagen' src={image} alt="image not found"/>
      <div className='tarjeta-contenido'>
        <h3 className='tarjeta-titulo' >{title}</h3>
        <p className='tarjeta-descripcion'>{description}</p>
        <p className='tarjeta-precio'>{price}</p>

        {added
          ?
          <button
            type='button'
            className='boton-quitar'
            onClick={deleteItem}
          >
            Quitar del Carrito
          </button>
          :
          <button
            type='button'
            className='boton-agregar'
            onClick={addItem}
          >
            Agregar al Carrito
          </button>
        }
      </div>
    </div>
  );
};
