// LogScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AdminLog from './AdminLog'; // Import the AdminLog screen
import { FIREBASE_DB } from './db/firebase';

const LogScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
    if (email && password) {
      navigation.navigate('Home');
    } else {
      alert('Please enter valid email and password.');
    }
  };

  // Define the navigation action for Admin login button
  const handleAdminLogin = () => {
    navigation.navigate('AdminLog'); // Navigate to AdminLog screen
  };

  return (
    <View style={styles.container}>
      <Image source={require('./GrabNGo1.png')} style={styles.logo} />
      <Text style={styles.slogan}>
        <Text style={{ fontWeight: 'bold' }}>Grab'N'Go</Text>{'\n'}Ending Food Waste and Local Hunger.
      </Text>
      <Text style={styles.signInText}>Sign In / Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>Don't have an account yet? <Text style={styles.linkText}>Register here!</Text></Text>
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      <TouchableOpacity style={styles.adminLoginButton} onPress={handleAdminLogin}>
        <Text style={styles.adminLoginButtonText}>Admin login here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D5C5D',
    alignItems: 'center',
    paddingTop: 70, // Added padding to create space at the top
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  slogan: {
    color: '#5EDE99',
    textAlign: 'center', // Centering the text
    marginTop: 10, // Increased gap between logo and slogan
    fontSize: 24,
  },
  signInText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40, // Increased gap between slogan and Sign In / Sign Up
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#5EDE99',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#5EDE99',
    marginTop: 40, // Increased gap between slogan and Sign In / Sign Up
    textDecorationLine: 'underline',
  },
  linkText: {
    color: '#5EDE99',
    textDecorationLine: 'underline',
  },
  forgotPasswordText: {
    color: '#5EDE99',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  adminLoginButton: {
    marginTop: 10, // Added marginTop to move the admin login button below the forgot password button
    width: 200,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  adminLoginButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LogScreen;
