import { AnyAction } from 'redux';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const cartReducer = (
  state: any = { cartItems: [] },
  action: AnyAction
) => {
  const item = action.payload;

  const existItem = state.cartItems.find(
    (x: any) => x.product === item.product || []
  );

  switch (action.type) {
    case CART_ADD_ITEM:
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x: any) =>
            x.product === existItem.product ? item : x
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        };
      }
    default:
      return state;
  }
};
