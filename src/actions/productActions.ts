import React, { Dispatch } from 'react';
import axios from 'axios';

import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS
} from '../constants/productConstants';
import { IData } from '../types';

export const listProducts = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data }: IData = await axios.get('/api/products');

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    });
  } catch (error: any) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const listProductDetails =
  (id: number) => async (dispatch: React.Dispatch<any>) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });

      const { data } = await axios.get(`/api/products/${id}`);

      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data
      });
    } catch (error: any) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error?.message
      });
    }
  };
