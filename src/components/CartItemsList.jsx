import React from 'react';
import { CartItem } from './CartItem';

function CartItemsList(props) {
  const {
    orderList = [],
    handleCartOpen = Function.prototype,
    deleteFromBasket = Function.prototype,
    addQuantity,
    removeQuantity,
  } = props;

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
            deleteFromBasket={deleteFromBasket}
            addQuantity={addQuantity}
            removeQuantity={removeQuantity}
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
