import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export const Map = () => {
  const [courierData, setCourierData] = useState({
    id: 5,
    coordinate: {latitude: 55.86063630677184, longitude: 37.603597497860676},
    title: 'Наш курьер',
    description: 'Курьер выполняет заказ .....',
    imageUrl: require('../../../assets/Courier3.png'),
  });

  const markers = [
    {
      id: 1,
      coordinate: {latitude: 55.86063630677184, longitude: 37.603597497860676},
      title: 'Первая точка',
      description: 'Какой-то магазин',
      imageUrl: require('../../../assets/marker1.png'),
    },
    {
      id: 2,
      coordinate: {latitude: 55.864943423527485, longitude: 37.603844048153086},
      title: 'Вторая точка',
      description: 'Какой-то магазин',
      imageUrl: require('../../../assets/marker2.png'),
    },
    {
      id: 3,
      coordinate: {latitude: 55.86381811179303, longitude: 37.60758146126362},
      title: 'Третья точка',
      description: 'Какой-то магазин',
      imageUrl: require('../../../assets/marker3.png'),
    },
  ];
  const finish = [
    {
      id: 4,
      coordinate: {latitude: 55.86039741161535, longitude: 37.615653536007855},
      title: 'Место доставки',
      description: 'Адрес .....',
      imageUrl: require('../../../assets/finish.png'),
    },
  ];

  console.log('render');
  const onChangeMarker = e => {
    setCourierData({
      ...courierData,
      coordinate: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      },
    });
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: courierData.coordinate.latitude,
        longitude: courierData.coordinate.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      {markers.map(marker => (
        <Marker
          key={marker.id}
          coordinate={marker.coordinate}
          title={marker.title}
          description={marker.description}
          image={marker.imageUrl}
          onPress={onChangeMarker}
        />
      ))}
      {finish.map(item => (
        <Marker
          key={item.id}
          coordinate={item.coordinate}
          title={item.title}
          description={item.description}
          image={item.imageUrl}
          onPress={onChangeMarker}
        />
      ))}
      <Marker
        key={courierData.id}
        coordinate={courierData.coordinate}
        title={courierData.title}
        description={courierData.description}
        image={courierData.imageUrl}>
        <View style={{zIndex: 2}}>
          <Image source={courierData.imageUrl} />
        </View>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
