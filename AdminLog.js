import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AdminLog = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminNumber, setAdminNumber] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
    if (email && password && adminNumber) {
      navigation.navigate('AdminHome', { adminNumber });
    } else {
      alert('Please enter valid email, password, and admin number.');
    }
  };

  useEffect(()=>{
    console.log(adminNumber)
  },[
    adminNumber
  ])

  return (
    <View style={styles.container}>
      <Image source={require('./GrabNGo.png')} style={styles.logo} />
      <Text style={styles.signInText}>Admin Sign In / Sign Up</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Admin Number"
          onChangeText={(text) => setAdminNumber(text)}
          value={adminNumber}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      <Text style={styles.resetLinks}>Forgot Password? | Forgot Admin Number?</Text>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('AdminRegistration')}>
        <Text style={styles.registerText}>Don't have an account yet? <Text style={styles.linkText}>Register here!</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5EDE99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: -100,
  },
  signInText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#5D5C5D',
  },
  inputContainer: {
    marginTop: 40,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#5D5C5D',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetLinks: {
    color: '#5D5C5D',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginHorizontal: 60,
    marginVertical: 30,
  },
  registerButton: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#5D5C5D',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#5D5C5D',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default AdminLog;
