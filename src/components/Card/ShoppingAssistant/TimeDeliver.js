import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../../utils/GlobalStyles';
import React from 'react';
import {ClockSvg} from '../../../images/svg/ClockSvg';

export const TimeDeliver = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <ClockSvg />
      </View>
      <View style={styles.info}>
        <Text style={GlobalStyles.subTitle}>19 : 00 - 20 : 00</Text>
        <Text style={GlobalStyles.comments}>Время доставки</Text>
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
  img: {
    marginRight: 20,
  },
  info: {
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'flex-start',
  },
});
