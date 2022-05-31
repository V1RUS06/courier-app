import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {HandsetSvg} from '../../images/svg/HandsetSvg';
import {MessageSvg} from '../../images/svg/MessageSvg';
import {GlobalStyles} from '../../utils/GlobalStyles';

export const CourierCard = ({name, number}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={GlobalStyles.subTitle}>Курьер {name}</Text>
          <Text style={styles.number}>{number}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <HandsetSvg />
          <Text style={styles.btnText}>Позвонить</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <MessageSvg />
          <Text style={styles.btnText}>Чат в WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  infoContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    color: '#4B595C',
    fontWeight: 'bold',
  },
  number: {
    fontSize: 16,
    color: '#00D8F9',
    fontWeight: 'bold',
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#E8F9FA',
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  btnText: {
    color: '#4B595C',
    fontSize: 13,
    marginLeft: 10,
  },
});
