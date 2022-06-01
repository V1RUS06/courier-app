import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from '../Header';
import {MessageSvg} from '../../images/svg/MessageSvg';
import {GlobalStyles} from '../../utils/GlobalStyles';
import {AlarmSvg} from '../../images/svg/AlarmSvg';
import {HandsetSvg} from '../../images/svg/HandsetSvg';
import {ClearSvg} from '../../images/svg/ClearSvg';
import {ConstructModal} from './ConstructModal';
import {useDispatch} from 'react-redux';
import {setHelpOpen} from '../../redux/slice/modalsSlice';

export const HelpModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setHelpOpen(false));
  };

  return (
    <ConstructModal>
      <Header title="Помощь" onClose={onClose} />
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.card}>
          <AlarmSvg />
          <Text style={[GlobalStyles.subTitle, {paddingHorizontal: 20}]}>
            Особенности услуг
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <MessageSvg />
          <Text style={[GlobalStyles.subTitle, {paddingHorizontal: 20}]}>
            Чат с оператором
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <HandsetSvg />
          <Text style={[GlobalStyles.subTitle, {paddingHorizontal: 20}]}>
            Позвонить в поддержку
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <ClearSvg />
          <Text style={[GlobalStyles.subTitle, {paddingHorizontal: 20}]}>
            Отменить заказ
          </Text>
        </TouchableOpacity>
      </View>
    </ConstructModal>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
});
