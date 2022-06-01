import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../../utils/GlobalStyles';
import {ChooseNoneSvg} from '../../../images/svg/ChooseNoneSvg';
import {GettingSvg} from '../../../images/svg/GettingSvg';
import {RunNonActiveSvg} from '../../../images/svg/RunNonActiveSvg';
import React from 'react';
import {CostsCard} from './CostsCard';

export const PurchasesCard = () => {
  return (
    <View>
      <Text style={[GlobalStyles.header, {marginBottom: 20}]}>Покупки</Text>
      <CostsCard price="1000" text="Запланированно на покупку" />
      <CostsCard text="Покупки по чеку" />
      <CostsCard text="Оплата курьеру наличными" />
      <CostsCard text="Возвращено на карту" />
    </View>
  );
};
