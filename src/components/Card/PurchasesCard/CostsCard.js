import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../utils/GlobalStyles';

export const CostsCard = ({text, price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={GlobalStyles.subTitle}>{price ? price + ' P' : '-- Р'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderStyle: 'dotted',
    width: '100%',
    borderColor: '#B2BDC5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  text: {
    color: '#B2BDC5',
    fontSize: 14,
  },
});
