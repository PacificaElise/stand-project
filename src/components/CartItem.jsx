import React from 'react';

function CartItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    deleteFromBasket = Function.prototype,
    addQuantity = Function.prototype,
    removeQuantity = Function.prototype,
  } = props;

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
