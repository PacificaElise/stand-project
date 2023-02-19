import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../contex';

import { CartItem } from './CartItem';

function CartItemsList() {

  const { orderList = [], handleCartOpen } = useContext(ShopContext)

  const cost = orderList.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className='collection cart-list'>
      <i
        className='material-icons cart-close'
        onClick={handleCartOpen}
      >
        close
      </i>
      <li className='collection-item active'>Корзина</li>
      {orderList.length ? (
        orderList.map((item) => (
          <CartItem
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>Стоимость: {cost} руб.
        <button className='btn order'>Оформить</button>
      </li>
    </ul>
  );
}

export { CartItemsList };
