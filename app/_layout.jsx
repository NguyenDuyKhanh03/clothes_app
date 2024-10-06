import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false}} />
        <Stack.Screen name='login1' options={{headerShown:false}} />
        <Stack.Screen name='login2' options={{headerShown:false}} />
        <Stack.Screen name='(tab)' options={{headerShown:false}} />
        <Stack.Screen name='cart' options={{headerShown:false}} />
        <Stack.Screen name='checkout' options={{headerShown:false}} />
        <Stack.Screen name='product_detail' options={{headerShown:false}} />
    </Stack>
  )
}

export default RootLayout