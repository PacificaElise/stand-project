import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../contex';
import { Preloader } from './Preloader';
import { ItemsList } from './ItemsList';
import { Cart } from './Cart';
import { CartItemsList } from './CartItemsList';
import { Alert } from './Alert'
import { API_KEY, API_URL } from '../config';

function Shop() {
  const { setItems, isloading, isOpenCart, alertName} = useContext(ShopContext);

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.featured && setItems(data.featured);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart />
      {isloading ? (
        <Preloader />
      ) : (
        <ItemsList />
      )}
      {isOpenCart && (
        <CartItemsList />
      )}
      {alertName && ( 
        <Alert />)
      }
    </main>
  );
}

export { Shop };
