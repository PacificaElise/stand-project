export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: payload || [],
        isloading: false,
      };
    case 'ADD_TO_CART':
      const itemIndex = state.orderList.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrderList = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrderList = [...state.orderList, newItem];
      } else {
        newOrderList = state.orderList.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        orderList: newOrderList,
        alertName: payload.name,
      };
    case 'DELETE_FROM_CART':
      return {
        ...state,
        orderList: state.orderList.filter((el) => el.id !== payload.id),
      };
    case 'ADD_QUANTITY':
      return {
        ...state,
        orderList: state.orderList.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };
    case 'REMOVE_QUANTITY':
      return {
        ...state,
        orderList: state.orderList.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity > 0 ? el.quantity - 1 : 0;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpenCart: !state.isOpenCart,
      };
    default:
      return state;
  }
}
