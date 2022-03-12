import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCSESS
} from '../constants/userConstants';
import { Dispatch } from 'react';
import axios from 'axios';

export const login =
  (email: string, password: string) => async (dispatch: Dispatch<Object>) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST
      });

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const { data } = await axios.post(
        '/api/users/login',
        { email, password },
        config
      );

      dispatch({
        type: USER_LOGIN_SUCCSESS,
        payload: data
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };
