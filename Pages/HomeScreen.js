// HomeScreen.js
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const {email, password}  = route.params;
  useEffect(()=>{
    console.log(email, password);
  },[])
  const navigateToOrderPage = () => {
    navigation.navigate('Order', {email, password});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/GrabNGo.png')} style={styles.logo} />
        <Text style={styles.headerText}>Grab'N'Go</Text>
        <View style={styles.userSection}>
          <Image source={require('../assets/Person1.png')} style={styles.personImage} />
          <View style={styles.userInfo}>
            <Text style={[styles.welcomeText, styles.whiteText]}>
              <Text style={styles.boldText}>Email:</Text> {email}
            </Text>
            <Text style={[styles.welcomeText, styles.whiteText]}>
              <Text style={styles.boldText}>Phone:</Text> 07752368116
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5D5C5D' }]}
          onPress={navigateToOrderPage}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>New Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5D5C5D' }]}
          onPress={navigateToOrderPage}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5D5C5D' }]}
          onPress={navigateToOrderPage}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>View Past Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5D5C5D' }]}
          onPress={navigateToOrderPage}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>View Pending Orders</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5D5C5D' }]}
          onPress={navigateToOrderPage}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>Cheap Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5D5C5D' }]}
          onPress={navigateToOrderPage}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5EDE99',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 70,
  },
  logo: {
    width: '80%',
    height: 150,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    color: '#5D5C5D',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  personImage: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
  userInfo: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#5D5C5D',
    padding: 20,
    borderRadius: 5,
    width: '48%',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
  whiteText: {
    color: '#FFFFFF',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
