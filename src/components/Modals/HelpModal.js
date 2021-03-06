import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from '../Header';
import {MessageSvg} from '../../images/svg/MessageSvg';
import {GlobalStyles} from '../../utils/GlobalStyles';
import {AlarmSvg} from '../../images/svg/AlarmSvg';
import {HandsetSvg} from '../../images/svg/HandsetSvg';
import {ClearSvg} from '../../images/svg/ClearSvg';
import {ConstructModal} from './ConstructModal';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCancelOrder,
  setHelpOpen,
  setPeculiaritiesOpen,
} from '../../redux/slice/modalsSlice';
import {CancelOrderModal} from './CancelOrderModal';
import {PeculiaritiesModal} from './PeculiaritiesModal';

export const HelpModal = () => {
  const dispatch = useDispatch();
  const {cancelOrderOpen, peculiaritiesOpen} = useSelector(
    state => state.modal,
  );

  const onClose = () => {
    dispatch(setHelpOpen(false));
  };

  const onPeculiaritiesClick = () => {
    dispatch(setPeculiaritiesOpen(true));
  };

  const onCancelClick = () => {
    dispatch(setCancelOrder(true));
  };

  return (
    <>
      <ConstructModal>
        <Header title="Помощь" onClose={onClose} />
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.card} onPress={onPeculiaritiesClick}>
            <AlarmSvg />
            <Text style={[GlobalStyles.subTitle, styles.cardPadding]}>
              Особенности услуг
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <MessageSvg />
            <Text style={[GlobalStyles.subTitle, styles.cardPadding]}>
              Чат с оператором
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <HandsetSvg />
            <Text style={[GlobalStyles.subTitle, styles.cardPadding]}>
              Позвонить в поддержку
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={onCancelClick}>
            <ClearSvg />
            <Text style={[GlobalStyles.subTitle, styles.cardPadding]}>
              Отменить заказ
            </Text>
          </TouchableOpacity>
        </View>
      </ConstructModal>
      {peculiaritiesOpen && <PeculiaritiesModal />}
      {cancelOrderOpen && <CancelOrderModal />}
    </>
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
  cardPadding: {
    paddingHorizontal: 20,
  },
});
