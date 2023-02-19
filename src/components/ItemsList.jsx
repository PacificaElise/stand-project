import React , {useContext  } from 'react';
import { ShopContext } from '../contex';
import { ItemCard } from './ItemCard';

function ItemsList() {
  const {items} = useContext(ShopContext);

  if (!items.length) {
    return <h3>Ничего не загружено...</h3>;
  }

  return (
    <div className='items'>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}

export { ItemsList };
