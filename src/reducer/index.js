import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import productReducer from './Products';
import ordersReducer from './Orders';
import cartReducer from './Cart';
import registerReducer from './Register';

export default function getRootReducer() {
  return combineReducers({
    productReducer,
    ordersReducer,
    cartReducer,
    registerReducer,
    network,
  });
}