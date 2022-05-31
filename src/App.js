/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Map} from './components/Map';
import {OrderSheet} from './components/OrderSheet';

const App = () => {
  return (
    <>
      <Map />
      <OrderSheet />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
