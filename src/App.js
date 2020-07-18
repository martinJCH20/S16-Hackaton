import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ReduxNetworkProvider} from 'react-native-offline';
//import getStore from './store';
import {store, persistor} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerStackNavigator} from './Router/drawer';

// const store = getStore();
// const storpersistor = getStore().persistor;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <NavigationContainer>
      //     <DrawerStackNavigator />
      // </NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ReduxNetworkProvider>
            <NavigationContainer>
              <DrawerStackNavigator />
            </NavigationContainer>
          </ReduxNetworkProvider>
        </PersistGate>
      </Provider>
    );
  }
}