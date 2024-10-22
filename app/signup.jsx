import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import icons from "../constants/icons"
import { router } from 'expo-router'
import CustomButton from '../components/CustomButton'
import { handleSignUp } from '../services/AuthenticationService'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [fullName, setFullName] = useState('');


    const signUp=async()=>{
        const success=await handleSignUp(fullName,email,phone,password)
        if(success){
            router.push('login1')
        }else{
            console.log('Signup failed');
        }
    }
  return (
    <SafeAreaView className='mx-6'>
        <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={1}
            className='mt-16 '
        >
            <Image
                source={icons.ic_arrow_left}
                className='w-4 h-4 p-2 rounded-full items-center justify-center'
                resizeMode='contain'
            />
        </TouchableOpacity>
        <Text className='text-[32px] font-bold  mt-5'>Create Account</Text>

        <View className='"w-full h-14 bg-[#e6e6e6] rounded-md mt-8 justify-center'>
            <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder='Full Name'
                className='mx-3 text-base font-normal'
            />
        </View>
        <View className='"w-full h-14 bg-[#e6e6e6] rounded-md mt-4 justify-center'>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder='Email Address'
                className='mx-3 text-base font-normal'
            />
        </View>
        <View className='"w-full h-14 bg-[#e6e6e6] rounded-md mt-4 justify-center'>
            <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder='Phone Number'
                className='mx-3 text-base font-normal'
            />
        </View>
        <View className='"w-full h-14 bg-[#e6e6e6] rounded-md  mt-4 justify-center'>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder='Password'
                className='mx-3 text-base font-normal'
                secureTextEntry={true}
            />
        </View>
        <CustomButton
          title='Continue'
          containerStyles=' mt-[71px] bg-[#8E6CEF]'
          titleStyles='text-[#272727]'
          onPress={signUp }
        />
    </SafeAreaView>
  )
}

export default SignUp