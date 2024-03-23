import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const FinalOrder = ({ navigation, route }) => {
  const { storeSelected, pickupTime } = route.params;

  return (
    <View style={styles.container}>
      {/* GrabNGo Logo */}
      <Image source={require('./GrabNGo2.png')} style={styles.logo} />

      {/* Order Confirmed Text */}
      <Text style={styles.orderConfirmedText}>Order Confirmed</Text>

      {/* Additional Text */}
      <Text style={styles.additionalText}>You will receive a confirmation email shortly.</Text>

      {/* Mace Image and Store Location */}
      <View style={styles.storeLocationContainer}>
        <View>
          <Image source={require('./Mace2.png')} style={styles.maceImage} />
        </View>
        <View style={styles.locationTextContainer}>
          <Text style={styles.storeLocationText}>Mace, 154 Greenhaw Road.</Text>
          <Text style={styles.pickupTimeText}>Pickup time selected - {pickupTime}</Text>
        </View>
      </View>

      {/* QR Code */}
      <View style={styles.qrContainer}>
        <Image source={require('./QRC.png')} style={styles.qrCode} />
        <View style={styles.qrTextContainer}>
          <Text style={styles.qrText}>Please show this QR code to receive your goods on arrival.</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MaceDerry')} // Continue Browsing
        >
          <Text style={styles.buttonText}>Continue Browsing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')} // View Profile
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LogScreen')} // Logout
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D5C5D',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  orderConfirmedText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  additionalText: {
    fontSize: 16,
    marginBottom: 30,
    color: 'white',
  },
  storeLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    justifyContent: 'flex-start',
  },
  maceImage: {
    width: 150,
    height: 140,
    marginRight: 10,
  },
  locationTextContainer: {
    flex: 1,
  },
  storeLocationText: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pickupTimeText: {
    color: 'white',
    flexWrap: 'wrap',
  },
  qrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 70,
  },
  qrCode: {
    width: 150,
    height: 140,
    marginRight: 10,
  },
  qrTextContainer: {
    flex: 1,
  },
  qrText: {
    color: 'white',
    flexWrap: 'wrap',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#5EDE99',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '30%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FinalOrder;
