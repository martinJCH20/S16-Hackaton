import {createStore, applyMiddleware, compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createNetworkMiddleware} from 'react-native-offline';
import thunk from 'redux-thunk';
import registerReducer from '../reducer/Register';
// import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import getRootReducer from '../reducer';
//import { AsyncStorage } from 'react-native';

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  whitelist: [
    'registerReducer'
  ]
};

// const navMiddleware = createReactNavigationReduxMiddleware(
//   (state) => state.navReducer,
// );

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default function config() {
//   return createStore(
//     getRootReducer(),
//     undefined,
//     composeEnhancer(applyMiddleware(networkMiddleware, thunk)),
//   );
// }
const persistedReducer = persistReducer(persistConfig, getRootReducer());

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(networkMiddleware, thunk)),
);

const persistor = persistStore(store);

export { store, persistor };
//export { store, persistor };