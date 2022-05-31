import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Map = () => {
  return (
    <View style={styles.container}>
      <Text>Карта</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
});
