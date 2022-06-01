import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Overlay} from '../Overlay';

export const ConstructModal = ({children}) => {
  return (
    <Overlay>
      <View style={styles.container}>{children}</View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#F8F8F8',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
