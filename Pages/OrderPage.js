import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderPage = ({route}) => {
  const {email, password} = route.params;
  const navigation = useNavigation();
  const [postcode, setPostcode] = useState('');

  const handleGoPress = () => {
    if (postcode.trim() !== '') {
      navigation.navigate('Map', { postcode, email, password }); 
    } else {
      alert('Please enter a valid postcode');
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/GrabNGo1.png')} style={styles.logo} />
      <Text style={styles.headerText}>Grab'N'Go</Text>
      <Text style={styles.subHeaderText}>
        Enter your postcode below to check store availability near you
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Postcode Here"
        placeholderTextColor="#FFFFFF"
        onChangeText={text => setPostcode(text)}
        value={postcode}
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: '#5EDE99' }]} onPress={handleGoPress}>
        <Text style={styles.buttonText}>Go!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#5EDE99' }]}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D5C5D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subHeaderText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5EDE99',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#3D3C3D',
    borderRadius: 5,
    padding: 20,
    color: '#FFFFFF',
    width: '100%',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default OrderPage;
