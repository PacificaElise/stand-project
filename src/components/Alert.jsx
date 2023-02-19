import React, { useEffect } from "react";
import { useContext } from 'react';
import { ShopContext } from '../contex';

function Alert() {
  const { alertName: name ='', closeAlert }= useContext(ShopContext);

  useEffect (() => {
      const timerId = setTimeout(closeAlert, 2000);
      return () => {
        clearTimeout(timerId)
      }
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  )
}

export { Alert };