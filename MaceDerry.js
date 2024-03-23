import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MaceDerry = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const handleOvalClick = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter(item => item !== index));
    } else {
      if (selectedItems.length >= 6) {
        setError(true);
      } else {
        setError(false);
        setSelectedItems([...selectedItems, index]);
      }
    }
  };

  const handleConfirmOrder = () => {
    navigation.navigate('OrderConfirm', { selectedItems });
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./GrabNGo1.png')} style={styles.logo} />
      </View>

      <View style={styles.addressContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('./Mace1.jpg')} style={styles.maceImage} />
        </View>
        <View style={styles.addressInfo}>
          <Text style={styles.addressText}>MACE</Text>
          <Text style={styles.addressText}>154 Greenhaw Road</Text>
          <Text style={styles.addressText}>MON - FRI: 7am - 12am</Text>
          <Text style={styles.addressText}>SAT - SUN: 8.30am - 12am</Text>
          <Text style={styles.addressText}>Phone: 02890246659</Text>
        </View>
      </View>

      <View style={[styles.selectionInfo, error && styles.errorInfo]}>
        <Text style={styles.selectionText}>Please select a maximum of 6 items from the available items below by clicking on the oval:</Text>
      </View>

      {/* Sections */}
      <View style={styles.sectionsContainer}>
        {/* Meat / Poultry Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meat / Poultry</Text>
          {/* List of items */}
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(0)}>
              <View style={[styles.oval, selectedItems.includes(0) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>400g Lean Beef</Text>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(1)}>
              <View style={[styles.oval, selectedItems.includes(1) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>330g Beef Meatballs</Text>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(2)}>
              <View style={[styles.oval, selectedItems.includes(2) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>800g Chicken Fillets</Text>
          </View>
        </View>

        {/* Dairy Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dairy</Text>
          {/* List of items */}
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(3)}>
              <View style={[styles.oval, selectedItems.includes(3) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>1L Semi-skimmed milk</Text>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(4)}>
              <View style={[styles.oval, selectedItems.includes(4) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>200g Cheddar Cheese</Text>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(5)}>
              <View style={[styles.oval, selectedItems.includes(5) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>6 Eggs</Text>
          </View>
        </View>
      </View>

      {/* Additional Sections */}
      <View style={styles.sectionsContainer}>
        {/* Fruit & Veg Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fruit & Veg</Text>
          {/* List of items */}
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(6)}>
              <View style={[styles.oval, selectedItems.includes(6) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>5 Loose Bananas </Text>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(7)}>
              <View style={[styles.oval, selectedItems.includes(7) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>300g Carrot Batons </Text>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(8)}>
              <View style={[styles.oval, selectedItems.includes(8) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>250g Mixed Veg </Text>
          </View>
        </View>

        {/* Confectionary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Confectionary</Text>
          {/* List of items */}
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(9)}>
              <View style={[styles.oval, selectedItems.includes(9) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>4pk Fruit Pastilles </Text>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(10)}>
              <View style={[styles.oval, selectedItems.includes(10) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>300g Cocolate Biscuits</Text>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handleOvalClick(11)}>
              <View style={[styles.oval, selectedItems.includes(11) && styles.selectedItem]} />
            </TouchableOpacity>
            <Text style={styles.itemText}>150g Haribo Starmix</Text>
          </View>
        </View>
      </View>

      {error && <Text style={styles.errorMessage}>Error: You can only select up to 6 items.</Text>}

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D5C5D',
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 60,
  },
  maceImage: {
    width: 120,
    height: 110,
  },
  addressContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  addressInfo: {
    flex: 1,
    marginLeft: 20,
  },
  addressText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  selectionInfo: {
    backgroundColor: '#5D5C5D',
    padding: 10,
    marginBottom: 30,
  },
  errorInfo: {
    backgroundColor: '#FF5733',
  },
  selectionText: {
    color: '#5EDE99',
  },
  sectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  section: {
    flex: 1,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#5EDE99',
    fontSize: 20,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  oval: {
    width: 20,
    height: 15,
    backgroundColor: 'gray',
    borderRadius: 50,
    marginRight: 10,
    cursor: 'pointer',
  },
  itemText: {
    color: 'white',
    fontSize: 16,
  },
  selectedItem: {
    backgroundColor: 'red',
  },
  confirmButton: {
    backgroundColor: '#5EDE99',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'black',
    fontSize: 16,
  },
  errorMessage: {
    color: 'white',
    marginTop: -20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MaceDerry;
