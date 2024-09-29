import React from 'react'
import { Stack } from 'expo-router'

const Navigation = () => {
  return (
    <Stack 
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="shopping" options={{headerShown:false}} />
    </Stack>
  )
}

export default Navigation