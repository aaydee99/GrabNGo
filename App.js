import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogScreen from './LogScreen';
import HomeScreen from './Pages/HomeScreen'; // Updated import path
import OrderPage from './Pages/OrderPage'; // Updated import path
import Map from './Map'; // Assuming Map is located in the root directory or a subdirectory
import MaceDerry from './MaceDerry'; // Updated import path
import OrderConfirm from './OrderConfirm'; // Updated import path
import FinalOrder from './FinalOrder'
import AdminLog from './AdminLog';
import AdminHome from './AdminHome';
import AdminStock from './AdminStock';
import AdminEdit from './AdminEdit';
import AdminEdit1 from './AdminEdit1';
import AdminEdit2 from './AdminEdit2';
import AdminEdit3 from './AdminEdit3';



const Stack = createStackNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={loggedIn ? "Home" : "Log"}>
        <Stack.Screen name="Log" component={LogScreen} options={{header: ()=>{}}} />
        <Stack.Screen name="Home" component={HomeScreen}  options={{header: ()=>{}}}/>
        <Stack.Screen name="Order" component={OrderPage} options={{header: ()=>{}}} />
        <Stack.Screen name="Map" component={Map}  options={{header: ()=>{}}}/>
        <Stack.Screen name="MaceDerry" component={MaceDerry}  options={{header: ()=>{}}}/>
        <Stack.Screen name="OrderConfirm" component={OrderConfirm}  options={{header: ()=>{}}}/>
        <Stack.Screen name='FinalOrder' component={FinalOrder}  options={{header: ()=>{}}}/>
        <Stack.Screen name='LogScreen' component={LogScreen}  options={{header: ()=>{}}}/>
        <Stack.Screen name='AdminLog' component={AdminLog}  options={{header: ()=>{}}}/>
        <Stack.Screen name='AdminHome' component={AdminHome}  options={{header: ()=>{}}}/>
        <Stack.Screen name='AdminStock' component={AdminStock} options={{header: ()=>{}}} />
        <Stack.Screen name='AdminEdit' component={AdminEdit}  options={{header: ()=>{}}}/>  
        <Stack.Screen name='AdminEdit1' component={AdminEdit1}  options={{header: ()=>{}}}/>
        <Stack.Screen name='AdminEdit2' component={AdminEdit2}  options={{header: ()=>{}}}/>
        <Stack.Screen name='AdminEdit3' component={AdminEdit3}  options={{header: ()=>{}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
