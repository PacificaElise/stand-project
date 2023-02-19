import React, {useContext} from 'react';
import { ShopContext } from '../contex';

function ItemCard(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
  } = props;

  const {addToBasket} = useContext(ShopContext);

  return (
    <div className='card'>
      <div className='card-image'>
        <img
          src={full_background}
          alt={name}
        ></img>
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <span className='right'>{price} руб.</span>
        <button
          className='btn grey darken-2'
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
      </div>
    </div>
  );
}

export { ItemCard };
