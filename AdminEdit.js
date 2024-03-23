import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AdminEdit = ({ navigation, route }) => {
  const [shopId, setShopId] = useState('');
  const adminNumber = route.params.adminNumber;

  const handleGo = () => {
    navigation.navigate('AdminEdit2', { adminNumber, shopId });
  };

  const navigateToProfile = () => {
    navigation.navigate('AdminHome');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./GrabNGo.png')} style={styles.logo} />
      <Text style={styles.brandText}>Grab'N'Go</Text>
      <Text style={styles.title}>Edit Shop Items</Text>
      <TextInput
        style={styles.input}
        placeholder="Admin Number"
        editable={false}
        value={adminNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Shop ID"
        onChangeText={(text) => setShopId(text)}
        value={shopId}
      />
      <TouchableOpacity style={styles.button} onPress={handleGo}>
        <Text style={styles.buttonText}>Go</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={navigateToProfile}>
        <Text style={styles.buttonText}>Back to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5EDE99',
    alignItems: 'center',
    paddingTop: 40,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  brandText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#5D5C5D',
    width: 300,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#5D5C5D',
  },
});

export default AdminEdit;
