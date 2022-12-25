import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen'

const stack = createNativeStackNavigator()

const CartNavigator = () => {

  return (
    <stack.Navigator initialRouteName='Cart'>
        <stack.Screen name='Cart' component={CartScreen} options={{headerShown: false}}></stack.Screen>
    </stack.Navigator>
    
  )
}

export default CartNavigator

const styles = StyleSheet.create({})