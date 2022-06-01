import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Button = ({onPress, name}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#E8F9FA',
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  btnText: {
    color: '#4B595C',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
