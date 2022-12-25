import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NativeBaseProvider, Box } from "native-base";
import { Provider } from 'react-redux';
import Store from './Store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import CartScreen from './screens/CartScreen';
import HomeNavigator from './Navigator/HomeNavigator';
import CartNavigator from './Navigator/CartNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons'; 



const Drawer = createDrawerNavigator()
const stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={Store}>
       <TailwindProvider utilities={utilities}>
          <NativeBaseProvider>
            <NavigationContainer>
              <Drawer.Navigator>
                <Drawer.Screen 
                  name='Overview'
                 component={HomeNavigator} 
                 options={{
                  title: "home",
                  drawerIcon: ({focused, size}) => (
                    <AntDesign name="home" size={focused ? 28 : 24} color={focused ? "blue": "black"} />
                  )
                 }}
                 ></Drawer.Screen>
                <Drawer.Screen name='CartNavigator' component={CartNavigator} options={{
                  title: "Cart",
                  drawerIcon: ({focused, size}) => (
                    <AntDesign name="shoppingcart" size={focused ? 28 : 24} color={focused ? "blue" : "black"} />
                  )
                }}></Drawer.Screen>
              </Drawer.Navigator>
             
            </NavigationContainer>
           </NativeBaseProvider>   
       </TailwindProvider>
      </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
