import React from 'react';
import { ItemCard } from './ItemCard';

function ItemsList(props) {
  const { items = [], addToBasket = Function.prototype } = props;

  if (!items.length) {
    return <h3>Ничего не загружено...</h3>;
  }
  return (
    <div className='items'>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          {...item}
          addToBasket={addToBasket}
        />
      ))}
    </div>
  );
}

export { ItemsList };
