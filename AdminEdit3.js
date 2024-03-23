import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import {FIREBASE_DB} from './db/firebase'
const AdminEdit3 = ({ navigation }) => {
  const [stock, setStock] = useState({});

  useEffect(() => {
    const fetchStock = async () => {
      const stockCollectionRef = collection(FIREBASE_DB, 'stockItems'); // Assuming your collection is named 'stockItems'
      const stockSnapshot = await getDocs(stockCollectionRef);
      const stockList = stockSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      const newStock = {};
      stockList.forEach(item => {
        newStock[item.id] = item.quantity; // Assuming each document has a 'quantity' field
      });
      setStock(newStock);
    };

    fetchStock().catch(console.error);
  }, []);

  const handleUpdate = (itemName, increment) => {
    const updatedStock = { ...stock };
    updatedStock[itemName] += increment;
    setStock(updatedStock);
  };

  const handleConfirm = async () => {
    const db = FIREBASE_DB;
    try {
      // Iterate through each stock item and update/create the document
      for (const [itemName, quantity] of Object.entries(stock)) {
        const itemRef = doc(db, 'stockItems', itemName); // Assuming 'stockItems' is your collection name
        await setDoc(itemRef, { quantity }, { merge: true }); // Set document with merge option to avoid overwriting other fields
      }
      alert('Stock level updated successfully');
    } catch (error) {
      console.error("Error updating stock levels: ", error);
      alert('An error occurred while updating stock levels');
    }
  };



  const navigateToUpdateItems = () => {
    navigation.navigate('AdminEdit2');
  };

  const navigateToEditItems = () => {
    navigation.navigate('AdminEdit1');
  };

  const navigateToProfile = () => {
    // Your navigation logic
  };

  const handleLogout = () => {
    // Your logout logic
  };

  return (
    <View style={styles.container}>
      <Image source={require('./GrabNGo.png')} style={styles.logo} />
      <Text style={styles.title}>Edit Fruit and Veg Items</Text>
      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Item Name</Text>
          <Text style={styles.label}>Stock Available</Text>
          <Text style={styles.label}>Update Quantity</Text>
        </View>
        {Object.entries(stock).map(([itemName, quantity]) => (
          <View key={itemName} style={styles.row}>
            <Text style={styles.itemName}>{itemName}</Text>
            <Text style={styles.stock}>{quantity}</Text>
            <View style={styles.updateQuantity}>
              <TouchableOpacity onPress={() => handleUpdate(itemName, 1)}>
                <Text style={styles.plusMinus}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleUpdate(itemName, -1)}>
                <Text style={styles.plusMinus}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.updateMoreButton} onPress={navigateToEditItems}>
        <Text style={styles.buttonText}>Update More Items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.updateMoreButton} onPress={navigateToUpdateItems}>
        <Text style={styles.buttonText}>Back to Categories</Text>
      </TouchableOpacity>
      <View style={styles.bottomButtons}>
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
    paddingTop: 40,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  tableContainer: {
    marginTop: 10,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  itemName: {
    flex: 1,
  },
  stock: {
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  updateQuantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusMinus: {
    fontSize: 20,
    marginHorizontal: 15,
    textAlign: 'left',
  },
  confirmButton: {
    backgroundColor: '#5D5C5D',
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  updateMoreButton: {
    backgroundColor: '#5D5C5D',
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  smallButton: {
    backgroundColor: '#5D5C5D',
    width: '30%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdminEdit3;
