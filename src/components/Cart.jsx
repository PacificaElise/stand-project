import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../contex';

function Cart() {
  const { orderList, handleCartOpen } = useContext(ShopContext);
  const quantity = orderList.length;
  
  return (
    <div
      className='cart grey'
      onClick={handleCartOpen}
    >
      <i className='material-icons'>shopping_basket</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}

export { Cart };
