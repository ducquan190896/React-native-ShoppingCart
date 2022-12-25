import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/ProductAction'
import { useTailwind } from 'tailwind-rn/dist'
import ProductCart from '../component/ProductCart'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'native-base'
import { getCart } from '../actions/CartAction'

const Home = () => {
  const tw = useTailwind()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const {products, product, productSuccess, productError, message} = useSelector(state => state.PRODUCT)
  // const {cart, cartSuccess, cartError} = useSelector(state => state.CART)
  // const loadCart = useCallback(() => {
  //   dispatch(getCart())
  // }, [cart, dispatch])

  const loadProducts = useCallback( async () => {
      setIsRefreshing(true)
      await dispatch(getProducts())
      setIsRefreshing(false)
  }, [dispatch, setIsRefreshing])

  useEffect(() => {
    setIsLoading(true)
    // loadCart()
    loadProducts().then(() => setIsLoading(false))

  }, [])
  
  if(isLoading) {
    return <ActivityIndicator size="large" color={tw('text-zinc-700')}></ActivityIndicator>

  }
  if(!isLoading && products.length == 0 ) {
    return <Text style={tw('text-red-500 text-lg')}>No products shown</Text>
  }
 
  return (
    <View style={tw('flex-1 bg-gray-300')} >
      
      
     
        <FlatList  style={tw(' pt-4 pb-2 flex-1')} data={products} 
        keyExtractor={item => item.id}
        refreshing={isRefreshing}
        onRefresh={loadProducts}
        renderItem={({item}) =>  <ProductCart product={item}></ProductCart>}
        >

        </FlatList>
 
     
    
    </View>
  )
}

export default Home

