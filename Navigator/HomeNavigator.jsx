import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import { useNavigation } from '@react-navigation/native'
import ProductDetail from '../screens/ProductDetail'

const stack = createNativeStackNavigator()
const HomeNavigator = () => {

  const navigation = useNavigation()

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false
  //   })
  // })

  return (
    <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home} options={{headerShown: false}}></stack.Screen>
        <stack.Screen name='productDetail' options={{headerShown: false}} component={ProductDetail}></stack.Screen>
    </stack.Navigator>
    
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})