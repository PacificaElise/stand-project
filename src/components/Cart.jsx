import React from 'react';

function Cart(props) {
  const { quantity = 0, handleCartOpen = Function.prototype } = props;
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
