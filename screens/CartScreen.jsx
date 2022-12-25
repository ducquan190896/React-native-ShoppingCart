import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from '../actions/CartAction'
import { useTailwind } from 'tailwind-rn/dist'
import CartComponent from '../component/CartComponent'
import { Button, Divider } from '@rneui/base'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CartScreen = () => {
  const {cart, cartSuccess, cartError, message} = useSelector(state => state.CART)
  const items = cart.items

  const dispatch = useDispatch()
  const tw = useTailwind()
  const [isLoading, setIsLoading] = useState(false)
  const loadCart = useCallback(async() => {
    setIsLoading(true)
   await dispatch(getCart())
   setIsLoading(false)
 
  }, [cart, dispatch])

 const clearAll = () => {
  dispatch(clearCart())
 }

  useEffect(() => {
    loadCart()
  }, [dispatch])

  if(isLoading) {
    return <ActivityIndicator size="large" color="blue"></ActivityIndicator>
  }

  return (
    <View style={tw('flex-1 px-2 py-4 bg-gray-300')}>
      {cart && cart.items && Object.keys(cart.items).length > 0 && Object.keys(cart.items).map(itemKey => (
        <CartComponent item={cart.items[itemKey]} itemId={itemKey} key={itemKey}></CartComponent>
      ))
      }
      <Button title="clear All items" buttonStyle={tw('bg-white p-2 rounded-lg  mx-auto my-2 mt-4 text-xl text-gray-400')} titleStyle={tw('text-gray-400 text-xl')} onPress={clearAll}>
        
      </Button>
      <Divider width={4} style={tw('text-gray-600 my-4')}></Divider>
      <View style={tw('py-6 px-4 bg-white w-full rounded-lg')}>
        <View style={tw('flex-row items-center justify-between')}> 
          <Text style={tw('text-lg')}>Total Quantity: </Text>
          {cart && cart.totalQuantity ? <Text style={tw('text-lg')}>{cart.totalQuantity}</Text> : <Text style={tw('text-lg')}>0</Text>}
        </View>
         <View style={tw('flex-row items-center justify-between mt-6')}> 
          <Text style={tw('text-lg')}>Total Price: </Text>
          {cart && cart.totalPrice ? <Text style={tw('text-lg')}>{Number.parseFloat(cart.totalPrice).toFixed(2)}</Text> : <Text style={tw('text-lg')}>0</Text>}
        </View>
     
      </View>
      
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})