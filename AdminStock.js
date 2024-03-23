import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AdminStock = ({ navigation }) => {
  const handleEdit = () => {
    navigation.navigate('AdminEdit');
  };

  const handleAdd = () => {
    navigation.navigate('AdminAdd');
  };

  const handleDelete = () => {
    navigation.navigate('AdminDelete');
  };

  const navigateToProfile = () => {
    navigation.navigate('AdminHome');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./GrabNGo.png')} style={styles.logo} />
      <Text style={styles.brandText}>Grab'N'Go</Text>
      <Text style={styles.title}>Update Shop Items</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#5D5C5D' }]} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        <TouchableOpacity style={[styles.button, { backgroundColor: '#5D5C5D' }]} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        <TouchableOpacity style={[styles.button, { backgroundColor: '#5D5C5D' }]} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  brandText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 100,
  },
  button: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#5D5C5D',
    width: 300,
    height: 60,
  },
});

export default AdminStock;

