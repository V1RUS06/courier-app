import {useDispatch} from 'react-redux';
import {setHelpOpen, setPeculiaritiesOpen} from '../../redux/slice/modalsSlice';
import {ConstructModal} from './ConstructModal';
import {Header} from '../Header';
import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';

export const PeculiaritiesModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setPeculiaritiesOpen(false));
    dispatch(setHelpOpen(true));
  };

  return (
    <ConstructModal>
      <Header title="Особенности услуги" onClose={onClose} />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          1. Ограничения по доставке: до 15 кг, до 120 см по сумме трех сторон.
          Исполнитель передвигается на общественном транспорте 2. Время ожидания
          по адресу доставки не более 15 минут 3. Если выбран конкретный магазин
          (то есть название и адрес), то время ожидания в точке для товаров до
          3000 рублей не более 10 минут и более 3000 рублей - 20 минут. В случае
          отсутствия необходимых товаров по конкретному магазину Исполнителя
          можно попросить приобрести аналоги. Также ты можешь отменить заказ с
          50% штрафом. Посещение дополнительных мест остается на усмотрение
          Исполнителя и не может быть обязательным 4. Ты можешь отменить заказ
          не позднее, чем за 30 минут до начала выполнения (прибытия на первое
          место покупки). Если Исполнитель приобрел товары по заказу, то отмена
          заказа невозможна 5. Финансовая ответственность Исполнителя
          ограничивается суммой покупки
        </Text>
      </ScrollView>
    </ConstructModal>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 250,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  text: {
    color: '#4B595C',
    fontSize: 12,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingBottom: 20,
  },
});
