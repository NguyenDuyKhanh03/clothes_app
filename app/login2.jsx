import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputComponent from '../components/InputComponent'
import CustomButton from '../components/CustomButton'
import { TouchableOpacity } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { handleLogin } from '../services/AuthenticationService'

const Login2 = () => {
  const [password, setPassword] = useState('');
  const searchParams =useLocalSearchParams()
  const email=searchParams.email;
  

  const handlePress= async () => {
    await handleLogin(email,password);
    router.push('./(tab)/home/shopping')
  }

  return (
    <SafeAreaView className='mx-8 '>
        <Text className='text-2xl font-bold mt-[123px]'>Sign in</Text>
        <InputComponent
            placeholder='Password'
            containerStyles='mt-8'
            type='password'
            value={password}
            onChangeText={setPassword}
        />
        <CustomButton 
          title='Continue'
          containerStyles='w-full mt-4'
          onPress={handlePress}
        />
        <TouchableOpacity
          className='mt-4'
        >
            <Text className='text-xs text-[#272727] font-bold  text-left'>Forgot Password ? Reset</Text> 
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Login2