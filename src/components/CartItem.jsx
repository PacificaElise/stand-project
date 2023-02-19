import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../contex';

function CartItem(props) {
  const {
    id,
    name,
    price,
    quantity,
  } = props;

  const { deleteFromBasket, addQuantity, removeQuantity} = useContext(ShopContext);

  return (
    <li className='collection-item'>
      {name}
      <p className='quantity'>
       <i className='material-icons cart-icon' onClick={()=>{removeQuantity(id)}}>remove</i> x {quantity} <i className='material-icons cart-icon' onClick={()=>{addQuantity(id)}}>add</i> = {price * quantity} руб.
      </p>
      <span
          className='secondary-content'
          onClick={() => deleteFromBasket(id)}
        >
        <i className='material-icons cart-delete'>close</i>
      </span>
    </li>
  );
}

export { CartItem };
