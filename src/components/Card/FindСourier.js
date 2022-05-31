import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../utils/GlobalStyles';
import {ChooseNoneSvg} from '../../images/svg/ChooseNoneSvg';

export const FindCourier = () => {
  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.header}>Курьер найден</Text>
      <View style={styles.svgContainer}>
        <ChooseNoneSvg />
        <ChooseNoneSvg />
        <ChooseNoneSvg />
      </View>
      <View style={styles.comments}>
        <Text style={GlobalStyles.comments}>
          Находим за 15 мин и не ранее, чем за 1.5 часа до прибытия на первую
          точку
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  svgContainer: {
    width: 250,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
});
