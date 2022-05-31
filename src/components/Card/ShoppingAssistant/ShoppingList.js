import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ListSvg} from '../../../images/svg/ListSvg';
import {GlobalStyles} from '../../../utils/GlobalStyles';

export const ShoppingList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <ListSvg />
      </View>
      <Text style={[GlobalStyles.comments, {textAlign: 'left'}]}>
        Молоко, хлеб, овощи, молоко, хлеб, овощи, молоко, хлеб, овощи
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  img: {
    marginRight: 20,
  },
});
