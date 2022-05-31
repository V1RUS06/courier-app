import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CartSvg} from '../../../images/svg/CartSvg';
import {GlobalStyles} from '../../../utils/GlobalStyles';

export const ShopCard = ({index, name, address, price, time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <CartSvg />
        <Text style={styles.imgIndex}>{index}</Text>
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={GlobalStyles.subTitle}>
          {name} | {price} ₽
        </Text>
        <Text style={GlobalStyles.comments}>{address}</Text>
        <Text style={GlobalStyles.comments}>Курьер ≈ {time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  imgContainer: {
    position: 'relative',
    marginRight: 20,
  },
  imgIndex: {
    position: 'absolute',
    bottom: -5,
    right: -8,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#00D8F9',
  },
});
