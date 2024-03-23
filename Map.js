// Map.js - 08.02.24 working with pins
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';


const Map = () => {
  const navigation = useNavigation();

  // Coordinates of BT47 4QY
  const initialRegion = {
    latitude: 55.0167,
    longitude: -7.3167,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  // Function to calculate coordinates of a point 2km away from BT47 4QY
  const calculateRadiusCoordinates = (latitude, longitude, radiusInKilometers) => {
    const earthRadius = 6371; // Earth's radius in kilometers
    const latDelta = (radiusInKilometers / earthRadius) * (180 / Math.PI);
    const lngDelta = latDelta / Math.cos(latitude * (Math.PI / 180));
    return {
      latitude: latitude + latDelta,
      longitude: longitude + lngDelta,
    };
  };

  // Coordinates of the point 2km away from BT47 4QY
  const radiusCoordinates = calculateRadiusCoordinates(
    initialRegion.latitude,
    initialRegion.longitude,
    2
  );

  // Additional pins coordinates
  const pin1 = {
    latitude: initialRegion.latitude + 0.005,
    longitude: initialRegion.longitude + 0.005,
  };
  const pin2 = {
    latitude: initialRegion.latitude - 0.005,
    longitude: initialRegion.longitude - 0.005,
  };
  const pin3 = {
    latitude: initialRegion.latitude + 0.005,
    longitude: initialRegion.longitude - 0.005,
  };

  const navigateToMaceDerry = () => {
    navigation.navigate('MaceDerry'); // Assuming you've set up navigation properly
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}
      >
        <Marker coordinate={initialRegion} title="Spar Derry" />
        <Marker coordinate={pin1} title="Mace Derry" onPress={navigateToMaceDerry} />
        <Marker coordinate={pin2} title="Centra Derry" />
        <Marker coordinate={pin3} title="Vivo Derry" />
        <Circle
          center={initialRegion}
          radius={2000} // Radius in meters (2km = 2000 meters)
          fillColor="rgba(255, 0, 0, 0.2)" // Fill color with transparency
          strokeColor="rgba(255, 0, 0, 0.5)" // Border color with transparency
          strokeWidth={2} // Border width
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
