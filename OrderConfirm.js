import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { collection, getDocs, doc, updateDoc, setDoc, increment } from 'firebase/firestore';
import { FIREBASE_DB } from './db/firebase';

const OrderConfirm = ({ navigation, route }) => {
  const { selectedItems, email, password } = route.params;
  const [items, setItems] = useState([]);
  const [selectedPickupTime, setSelectedPickupTime] = useState(null);
  const db = FIREBASE_DB;
  // Array of item names corresponding to their indexes
  const itemNames = [
    '400g Lean Beef',
    '330g Beef Meatballs',
    '800g Chicken Fillets',
    '1L Semi-skimmed milk',
    '200g Cheddar Cheese',
    '6 Eggs',
    '5 Loose Bananas',
    '300g Carrot Batons',
    '250g Mixed Veg',
    '4pk Fruit Pastilles',
    '300g Chocolate Biscuits',
    '150g Haribo Starmix',
  ];

  useEffect(() => {
    
    const fetchItems = async () => {
      console.log(email, password)
      const querySnapshot = await getDocs(collection(db, 'stockItems'));
      const itemsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsList);
    };

    fetchItems().catch(console.error);
  }, []);

  // Array of pickup times
  const pickupTimes = ['6:00 PM', '6:30 PM', '7:00 PM'];

  const handlePickupTimeSelection = (pickupTime) => {
    setSelectedPickupTime(pickupTime);
  };

  // Function to handle navigation to FinalOrder screen
  const handleConfirmOrder = async () => {
    if (!selectedPickupTime || selectedItems.length === 0) {
      alert('Please select a pickup time and ensure items are selected.');
      return;
    }

    // Decrement stock for each selected item
    selectedItems.forEach(async selectedIndex => {
      const selectedItem = items.find(item => item.id === selectedIndex);
      if (!selectedItem) return; // If selectedItem is not found, skip

      const itemRef = doc(db, 'stockItems', selectedItem.id);
      await updateDoc(itemRef, { stock: selectedItem.stock - 1 });
    });

    // Handle user data in Firestore (simplified example)
    const userRef = doc(db, 'users', email); // Use actual user ID or unique identifier
    await setDoc(userRef, {
      userName: email, // Use actual user email
      password: password, // It's not safe to store passwords in plain text
      orderCount: increment(1),
    }, { merge: true });

    navigation.navigate('FinalOrder', {
      pickupTime: selectedPickupTime,
    });
  };

  return (
    <View style={styles.container}>
      {/* GrabNGo Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./GrabNGo2.png')} style={styles.logo} />
      </View>

      {/* Confirm Order Text */}
      <Text style={[styles.confirmOrderText, { color: '#5EDE99' }]}>Confirm Order</Text>

      {/* Customer Information */}
      <View style={styles.customerInfo}>
        <Text style={styles.infoTitle}>Name: <Text style={styles.info}>John Doe</Text></Text>
        <Text style={styles.infoTitle}>Phone: <Text style={styles.info}>123-456-7890</Text></Text>
        <Text style={styles.infoTitle}>Email: <Text style={styles.info}>john@example.com</Text></Text>
        <Text style={styles.infoTitle}>Store: <Text style={styles.info}>Mace Derry</Text></Text>
      </View>

      {/* Selected Items */}
      <View style={styles.selectedItems}>
        <Text style={[styles.selectedItemsTitle, { color: '#5EDE99' }]}>Selected Items:</Text>
        {selectedItems.map((index, key) => (
          <Text key={key} style={styles.selectedItem}>{itemNames[index]}</Text>
        ))}
      </View>

      {/* Select Pickup Time */}
      <View style={styles.pickupTime}>
        <Text style={[styles.pickupTimeTitle, { color: '#5EDE99' }]}>Select Pickup Time:</Text>
        {pickupTimes.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.pickupTimeOption,
              selectedPickupTime === time && { backgroundColor: 'yellow' }
            ]}
            onPress={() => handlePickupTimeSelection(time)}
          >
            <Text style={styles.pickupTimeText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('MaceDerry')} // Navigate back to MaceDerry page
        >
          <Text style={styles.buttonText}>Back to Store</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmOrder} // Navigate to FinalOrder page
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D5C5D',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
  },
  confirmOrderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    color: '#5EDE99',
  },
  customerInfo: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  infoTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  info: {
    color: 'white',
  },
  selectedItems: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  selectedItemsTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'center',
    color: '#5EDE99',
  },
  selectedItem: {
    color: 'white',
    marginBottom: 5,
  },
  pickupTime: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pickupTimeTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'center',
    color: '#5EDE99',
  },
  pickupTimeOption: {
    backgroundColor: '#5EDE99',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  pickupTimeText: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  backButton: {
    backgroundColor: '#5EDE99',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '48%',
  },
  confirmButton: {
    backgroundColor: '#5EDE99',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '48%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderConfirm;
