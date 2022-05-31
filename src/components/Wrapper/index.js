import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Wrapper = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,
  },
});
