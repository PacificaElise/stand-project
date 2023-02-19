import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  items: [],
  isloading: true,
  orderList: [],
  isOpenCart: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  value.deleteFromBasket = (itemId) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: { id: itemId } });
  };

  value.addQuantity = (itemId) => {
    dispatch({ type: 'ADD_QUANTITY', payload: { id: itemId } });
  };

  value.removeQuantity = (itemId) => {
    dispatch({ type: 'REMOVE_QUANTITY', payload: { id: itemId } });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.handleCartOpen = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  value.setItems = (data) => {
    dispatch({ type: 'SET_ITEMS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
