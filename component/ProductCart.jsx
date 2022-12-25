import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { Avatar, Card } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'


const ProductCart = ({product}) => {
    const tw = useTailwind()
    const navigation = useNavigation()

  return (
    <Card wrapperStyle={tw('bg-white flex flex-row w-full')} containerStyle={tw('rounded-lg ')}>
        <Avatar source={{uri: product.image_url}} style={tw('w-1/3 h-40 rounded-lg mr-4')}></Avatar>
        <View style={tw('flex items-center justify-center w-2/3')}>
            <Text style={tw('text-black text-2xl font-bold mb-2 mx-auto')}>{product.title}</Text>
            <Text style={tw('text-sm text-gray-500 mb-2 w-full')}>{product.Description}</Text>
            <Text style={tw('text-black text-2xl font-bold mb-2 mx-auto')}>{product.price} €</Text>
            <TouchableOpacity onPress={() => navigation.navigate("productDetail", {productId: product.id})} style={tw('p-2 px-4 bg-gray-400 rounded-full ')}>
                <Text style={tw('text-base font-bold text-white')}>View Details</Text>
            </TouchableOpacity>
        </View>
    </Card>
  )
}

export default ProductCart

const styles = StyleSheet.create({})