import { AnyAction } from 'redux';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCSESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCSESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
