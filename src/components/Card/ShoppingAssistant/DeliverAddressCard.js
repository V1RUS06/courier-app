import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../utils/GlobalStyles';
import {DeliverAddressSvg} from '../../../images/svg/DeliverAddressSvg';

export const DeliverAddressCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <DeliverAddressSvg />
      </View>
      <View style={GlobalStyles.infoContainer}>
        <Text style={[GlobalStyles.subTitle]}>
          2-я Хорошевского Серебрянго Бора линия, 51 строение 2
        </Text>
        <Text style={GlobalStyles.comments}>
          Кв/офис 5, п.2 эт. 10, домофон 112
        </Text>
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
});
