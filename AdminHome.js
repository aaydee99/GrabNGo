import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const AdminHome = ({ navigation, route }) => {
  const { adminNumber } = route.params;

  const navigateToStockPage = () => {
    navigation.navigate('AdminStock');
  };

  const navigateToEditItems = () => {
    navigation.navigate('AdminEdit1');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./GrabNGo1.png')} style={styles.logo} />
        <Text style={styles.headerText}>Grab'N'Go</Text>
        <View style={styles.userSection}>
          <Image source={require('./Admin1.png.png')} style={styles.personImage} />
          <View style={styles.userInfo}>
            <Text style={[styles.welcomeText, styles.whiteText]}>
              <Text style={styles.boldText}>Welcome, Admin #{adminNumber}</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5EDE99' }]}
          onPress={navigateToStockPage}
        >
          <Text style={[styles.buttonText]}>Orders to be packed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5EDE99' }]}
        >
          <Text style={[styles.buttonText]}>All Orders</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5EDE99' }]}
        >
          <Text style={[styles.buttonText]}>Manage Users</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5EDE99' }]}
          onPress={navigateToEditItems}
        >
          <Text style={[styles.buttonText]}>Update Shop Items</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5EDE99' }]}
        >
          <Text style={[styles.buttonText]}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#5EDE99' }]}
        >
          <Text style={[styles.buttonText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D5C5D',
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
    marginTop: 10,
    color: '#FFFFFF',
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
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#5EDE99',
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

export default AdminHome;
