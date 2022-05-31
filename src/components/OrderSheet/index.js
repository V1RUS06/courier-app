import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, ScrollView, View, Dimensions} from 'react-native';
import {Wrapper} from '../Wrapper';
import {Header} from '../Header';
import {FindCourier} from '../Card/FindСourier';

export const OrderSheet = () => {
  const [isStretch, setIesStretch] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const height = Dimensions.get('window').height;
    setWindowHeight(height);
  }, []);

  const onStretchClick = () => {
    setIesStretch(!isStretch);
  };

  return (
    <View
      style={[
        styles.container,
        isStretch ? {height: windowHeight - 180} : {height: windowHeight - 450},
      ]}>
      <Header onStretchClick={onStretchClick} />
      <ScrollView style={styles.scrollContainer}>
        <Wrapper>
          <FindCourier />
        </Wrapper>
        <Wrapper>
          <Text>Order sheet</Text>
        </Wrapper>
        <Wrapper>
          <Text>Order sheet</Text>
        </Wrapper>
        {/*<Wrapper>*/}
        {/*  <Text>Order sheet</Text>*/}
        {/*</Wrapper>*/}
        {/*<Wrapper>*/}
        {/*  <Text>Order sheet</Text>*/}
        {/*</Wrapper>*/}
        {/*<Wrapper>*/}
        {/*  <Text>Order sheet</Text>*/}
        {/*</Wrapper>*/}
        {/*<Wrapper>*/}
        {/*  <Text>Order sheet</Text>*/}
        {/*</Wrapper>*/}
        {/*<Wrapper>*/}
        {/*  <Text>Order sheet</Text>*/}
        {/*</Wrapper>*/}
        {/*<Wrapper>*/}
        {/*  <Text>Order sheet</Text>*/}
        {/*</Wrapper>*/}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
  },
});
