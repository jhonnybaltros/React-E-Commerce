import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

import { IData } from '../types';

export const addToCart =
  (id: number, quantity: number) =>
    async (dispatch: any, getState: Function) => {
      const { data }: IData = await axios.get(`/api/products/${id}`);

      dispatch({
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

export const removeFromCart =
  (id: number) => async (dispatch: any, getState: Function) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };
