import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ConstructModal} from './ConstructModal';
import {Header} from '../Header';
import {Wrapper} from '../Wrapper';
import {Button} from '../Button';
import {useDispatch} from 'react-redux';
import {setCancelOrder} from '../../redux/slice/modalsSlice';

export const CancelOrderModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setCancelOrder(false));
  };

  const onContactSupportClick = () => {
    dispatch(setCancelOrder(false));
    console.warn('Связь с поддержкой');
  };

  return (
    <ConstructModal>
      <Header title="Отмена заказа" onClose={onClose} />
      <View style={styles.container}>
        <Text style={styles.text}>
          Курьер начал выполнять заказ. Для уточнения возможности отмены свяжись
          с поддержкой
        </Text>
        <Button name="Связаться с поддержкой" onPress={onContactSupportClick} />
      </View>
    </ConstructModal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  text: {
    fontSize: 14,
    color: '#4B595C',
    paddingVertical: 16,
  },
});
