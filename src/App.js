/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Map} from './components/Map';
import {OrderSheet} from './components/OrderSheet';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Map />
        <OrderSheet />
      </Provider>
    </>
  );
};

export default App;
