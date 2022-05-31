import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {ClearSvg} from '../../images/svg/ClearSvg';

export const Header = ({title, style, onStretchClick}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.clearBtn}>
        <ClearSvg />
      </TouchableOpacity>
      <TouchableOpacity style={styles.stretchBtn} onPress={onStretchClick}>
        <ClearSvg />
      </TouchableOpacity>
      {title && <Text style={styles.text}>Hello</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15,
    paddingBottom: 12,
    flexDirection: 'row',
  },
  clearBtn: {
    position: 'absolute',
    top: 15,
    left: 20,
    bottom: 12,
    zIndex: 2,
  },
  stretchBtn: {
    position: 'absolute',
    top: 15,
    right: 20,
    bottom: 12,
    zIndex: 2,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4B595C',
    lineHeight: 20,
  },
});
