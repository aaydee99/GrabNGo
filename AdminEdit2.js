import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AdminEdit2 = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChangeStore = () => {
    // Handle changing the store
  };

  const navigateToProfile = () => {
    navigation.navigate('AdminHome');
  };

  const handleGo = () => {
    navigation.navigate('AdminEdit3');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./GrabNGo.png')} style={styles.logo} />
      <Text style={styles.brandText}>Grab'N'Go</Text>
      
      <Text style={[styles.boldText, styles.matchText]}>Centra Malone Road matches Shop ID:</Text>
      
      <Text style={[styles.boldText, styles.selectText]}>Select a category to edit:</Text>

      <TouchableOpacity
        style={[styles.categoryButton, selectedCategory === 'Fruit and Veg' && styles.selectedCategory]}
        onPress={() => setSelectedCategory('Fruit and Veg')}
      >
        <Text style={styles.buttonText}>Fruit and Veg</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.categoryButton, selectedCategory === 'Meat and Poultry' && styles.selectedCategory]}
        onPress={() => setSelectedCategory('Meat and Poultry')}
      >
        <Text style={styles.buttonText}>Meat and Poultry</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.categoryButton, selectedCategory === 'Sweet Treats' && styles.selectedCategory]}
        onPress={() => setSelectedCategory('Sweet Treats')}
      >
        <Text style={styles.buttonText}>Sweet Treats</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.goButton} onPress={handleGo}>
        <Text style={[styles.buttonText, styles.goButtonText]}>Go</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.smallButton} onPress={handleChangeStore}>
        <Text style={styles.buttonText}>Change Store</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.smallButton, { marginRight: 5 }]} onPress={navigateToProfile}>
          <Text style={styles.buttonText}>Back to Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.smallButton, { marginLeft: 5 }]} onPress={() => navigation.navigate('AdminLog')}>
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
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  brandText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  matchText: {
    marginBottom: 20,
  },
  selectText: {
    marginBottom: 30,
  },
  categoryButton: {
    backgroundColor: '#5D5C5D',
    width: 280,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  selectedCategory: {
    backgroundColor: 'red',
  },
  goButton: {
    backgroundColor: 'white',
    width: 280,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  goButtonText: {
    color: '#5D5C5D',
  },
  smallButton: {
    backgroundColor: '#5D5C5D',
    width: 150,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default AdminEdit2;
