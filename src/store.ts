import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer
} from './reducers/productReducers';
import { userLoginReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer
});

const userJson = localStorage.getItem('userInfo');
const userInfoFromStorage = userJson !== null ? JSON.parse(userJson) : null;

const cartInStorageJson = localStorage.getItem('cartItems');
const cartItemsFromStorage =
  cartInStorageJson !== null ? JSON.parse(cartInStorageJson) : [];

const initialState = {
  cartItems: cartItemsFromStorage,
  userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
