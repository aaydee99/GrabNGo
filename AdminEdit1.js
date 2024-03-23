import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AdminEdit1 = ({ navigation }) => {
  const navigateToAddItems = () => {
    navigation.navigate('AdminAdd');
  };

  const navigateToEditItems = () => {
    navigation.navigate('AdminEdit2');
  };

  const navigateToDeleteItems = () => {
    // Your navigation logic for delete items
  };

  const navigateToProfile = () => {
    navigation.navigate('AdminHome');
  };

  const handleLogout = () => {
    navigation.navigate('LogScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./GrabNGo.png')} style={styles.logo} />
      <Text style={styles.title}>Grab'N'Go</Text>
      <Text style={styles.updateText}>Update Stock Items</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToAddItems}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToEditItems}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToDeleteItems}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.smallButton} onPress={navigateToProfile}>
          <Text style={styles.buttonText}>Back to Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
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
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: -180,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  updateText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 60,
  },
  button: {
    width: '30%',
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5D5C5D',
  },
  smallButton: {
    width: '40%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5D5C5D',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
});

export default AdminEdit1;
