import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { Avatar, Card } from '@rneui/base'
import { useTailwind } from 'tailwind-rn/dist'
import { AntDesign } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux';
import { deleteItem, decreaseItem } from '../actions/CartAction';
import { Feather } from '@expo/vector-icons'; 
const CartComponent = ({item, itemId}) => {
    const tw = useTailwind()
    const dispatch = useDispatch()

    const minusItem = () => {
        dispatch(decreaseItem(itemId))
    }


  return (
    <Card containerStyle={tw('rounded-lg bg-white p-0')} wrapperStyle={tw('w-full flex-row')}>
        <Card.Image containerStyle={tw('w-1/3 rounded-lg mr-6')} source={{uri: item.image}}></Card.Image>
      <View style={tw('w-2/3')}>
      <Text style={tw('text-lg font-bold text-zinc-600 mb-2')}>{item.title}</Text>
      <View style={tw('flex-row mb-2')}>
        <Text style={tw('text-lg font-bold text-gray-300 mr-4')}> price: {Number.parseFloat(item.sum).toFixed(2)}</Text>
        <TouchableOpacity onPress={minusItem}>
        <AntDesign name="minuscircleo" size={28} color={tw('bg-gray-300')} />
        </TouchableOpacity>
      </View>
      <Text style={tw('text-lg font-bold text-zinc-600 mb-2')}> quantity: {item.quantity}</Text>
      <TouchableOpacity onPress={() => dispatch(deleteItem(itemId))}>
        <Feather name="trash-2" size={28} color={tw('bg-gray-300')} />
        </TouchableOpacity>
      </View>
    </Card>
  )
}

export default CartComponent

const styles = StyleSheet.create({})