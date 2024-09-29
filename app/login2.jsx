import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputComponent from '../components/InputComponent'
import CustomButton from '../components/CustomButton'
import { TouchableOpacity } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import axios from 'axios'

const Login2 = () => {
  const [password, setPassword] = useState('');
  const searchParams =useLocalSearchParams()
  const email=searchParams.email;
  

  const handleLogin = () => {
    console.log("Button pressed!");
    axios.post('http://192.168.2.29:8080/api/v1/auth/login', {
      email: email,
      password: password
    })
    .then(response => {
      const token = response.data.token;
      console.log('JWT Token:', token);
      
    })
    .catch(error => {
      console.log('Login error:', error);
    });
  };

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
          onPress={() => router.push('./(tab)/home/shopping')}
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