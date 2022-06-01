import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Overlay = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    zIndex: 5,
    backgroundColor: '#00000045',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});
