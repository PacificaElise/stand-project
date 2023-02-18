import React, { useState, useEffect } from 'react';
import { Preloader } from './Preloader';
import { ItemsList } from './ItemsList';
import { Cart } from './Cart';
import { CartItemsList } from './CartItemsList';
import { Alert } from './Alert'
import { API_KEY, API_URL } from '../config';

function Shop() {
  const [items, setItems] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);
  const [isOpenCart, setOpenCart] = useState(false);
  const [alertName, setAlerName] = useState('');

  const addToBasket = (good) => {
    const itemIndex = orderList.findIndex(
      (orderItem) => orderItem.id === good.id
    );
    if (itemIndex < 0) {
      const newItem = {
        ...good,
        quantity: 1,
      };
      setOrderList([...orderList, newItem]);
    } else {
      const newOrder = orderList.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrderList(newOrder);
    }
    setAlerName(good.name);
  };

  const deleteFromBasket = (goodId) => {
    const newOrderList = orderList.filter((el) => el.id !== goodId);
    setOrderList(newOrderList);
  };

  const addQuantity = (goodId) => {
    const newOrderList = orderList.map(item => {
      if (item.id === goodId) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity
        }
      } else {
        return item
      }
    })
    setOrderList (newOrderList);
  };

  const removeQuantity = (goodId) => {
    const newOrderList = orderList.map(item => {
      if (item.id === goodId) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        }
      } else {
        return item
      }
    })
    setOrderList (newOrderList);
  }

  const handleCartOpen = () => {
    setOpenCart(!isOpenCart);
  };

  const closeAlert = () => {
    setAlerName('')
  };

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.featured && setItems(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart
        quantity={orderList.length}
        handleCartOpen={handleCartOpen}
      />
      {isloading ? (
        <Preloader />
      ) : (
        <ItemsList
          items={items}
          addToBasket={addToBasket}
        />
      )}
      {isOpenCart && (
        <CartItemsList
          orderList={orderList}
          handleCartOpen={handleCartOpen}
          deleteFromBasket={deleteFromBasket}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
        />
      )}
      {alertName && ( 
        <Alert 
          name={alertName} 
          closeAlert={closeAlert}
        />)
      }
    </main>
  );
}

export { Shop };
