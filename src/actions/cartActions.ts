import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart =
  (id: number, quantity: number) => async (dispach: any, getState: any) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispach({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        quantity
      }
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };
