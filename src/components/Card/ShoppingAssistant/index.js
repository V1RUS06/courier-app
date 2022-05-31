import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../utils/GlobalStyles';
import {ShopCard} from './ShopCard';
import {TimeDeliver} from './TimeDeliver';
import {ShoppingList} from './ShoppingList';
import {Button} from '../../Button';
import {DeliverAddressCard} from './DeliverAddressCard';

export const ShoppingAssistant = () => {
  const onRepeatClick = () => {};

  return (
    <View>
      <Text style={[GlobalStyles.header, {marginBottom: 20}]}>
        Помощник покупок
      </Text>
      <View style={styles.line} />
      <ShopCard
        address="ул. Усачева, 17 строение 1, Москва"
        index={1}
        name="Bottega Verde"
        price="3000.00"
        time="09:45 - 10:00"
      />
      <View style={styles.line} />
      <ShopCard
        address="ул. Усачева, 17 строение 1, Москва"
        index={2}
        name="Ароматный мир"
        price="1000.00"
        time="10:00 - 10 : 15"
      />
      <View style={styles.line} />
      <ShopCard
        address="ул. Усачева, 17 строение 1, Москва"
        index={3}
        name="Перекресток"
        price="1500.00"
        time="10:15 - 10 : 30"
      />
      <View style={styles.line} />
      <DeliverAddressCard />
      <View style={styles.line} />
      <TimeDeliver />
      <View style={styles.line} />
      <ShoppingList />
      <View style={[styles.line, {marginBottom: 20}]} />
      <Button onPress={onRepeatClick} name="Повторить" />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderWidth: 1,
    borderColor: '#F8F8F8',
  },
});
