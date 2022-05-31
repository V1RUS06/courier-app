import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../utils/GlobalStyles';
import {CardSvg} from '../../../images/svg/CardSvg';
import {Button} from '../../Button';
import {RubleSvg} from '../../../images/svg/RubleSvg';
import {CheckSvg} from '../../../images/svg/CheckSvg';

export const DetailsCard = () => {
  const onHelpClick = () => {};

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyles.header, {marginBottom: 20}]}>Детали</Text>
      <View style={styles.line} />
      <View style={styles.cardContainer}>
        <View style={styles.img}>
          <CardSvg />
        </View>
        <View style={styles.infoContainer}>
          <Text style={GlobalStyles.subTitle}>**** 1245</Text>
          <Text style={GlobalStyles.comments}>Банковская карта</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.cardContainer}>
        <View style={styles.img}>
          <RubleSvg />
        </View>
        <View style={styles.infoContainer}>
          <Text style={GlobalStyles.subTitle}>325 р.</Text>
          <Text style={GlobalStyles.comments}>Стоимость услуги</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.cardContainer}>
        <View style={styles.img}>
          <CheckSvg />
        </View>
        <View style={styles.infoContainer}>
          <Text style={GlobalStyles.subTitle}>Картой по чеку</Text>
          <Text style={GlobalStyles.comments}>Оплата покупок</Text>
        </View>
      </View>
      <View style={[styles.line, {marginBottom: 20}]} />

      <Button onPress={onHelpClick} name="Помощь" />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  img: {
    marginRight: 20,
  },
  infoContainer: {
    alignItems: 'flex-start',
  },
  line: {
    borderWidth: 1,
    borderColor: '#F8F8F8',
  },
});
