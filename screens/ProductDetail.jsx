import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../actions/ProductAction'
import { useTailwind } from 'tailwind-rn/dist'
import { Button, Divider } from '@rneui/base'
import { addToCart } from '../actions/CartAction'


const ProductDetail = () => {
    const navigation = useNavigation()
    const {productId} = useRoute().params
    const {products, product, productSuccess, productError, message} = useSelector(state => state.PRODUCT)
    const {cart, cartSuccess, cartError} = useSelector(state => state.CART)
    const [isLoading, setIsLoading] = useState(false)
    const tw = useTailwind()
    const dispatch = useDispatch()

    const loadProduct = useCallback( async () => {
       await dispatch(getProduct(productId))
    }, [dispatch, productId])

    useEffect(() => {
        setIsLoading(true)
        loadProduct().then(() => setIsLoading(false))
    }, [dispatch, setIsLoading])

    const addProductToCart = useCallback( () => {
        dispatch(addToCart(product))


    }, [dispatch, product])


    if(isLoading) {
        return <ActivityIndicator color="blue" size="large"></ActivityIndicator>
    }

  return (
    <View style={tw('flex-1')}>
      {product && (
        <View style={tw('flex-1')}>
           <Image style={tw('h-1/2 w-full mb-4')} source={{uri: product.image_url}}></Image>
           <View style={tw('flex-1 w-full px-4')}>
                <Text style={tw('text-2xl font-bold text-black my-2 ml-6')}>{product.title}</Text>
                <Text style={tw('text-2xl font-bold text-black my-2 ml-6')}>price: {product.price} €</Text>
                <Button onPress={addProductToCart} buttonStyle={tw('px-4 py-4 w-2/3 my-4 rounded-full bg-gray-400 text-white font-bold text-lg')} title="Add Cart"></Button>
               <Divider color={tw('text-gray-400')} width={2}></Divider>
               <Text style={tw('w-2/3 pl-4 text-base text-gray-500 font-bold mt-8')}>{product.Description}</Text>
           </View>
        </View>
      )}
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})