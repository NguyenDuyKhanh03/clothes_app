import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputComponent from '../components/InputComponent'
import CustomButton from '../components/CustomButton'
import icons from '../constants/icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'
import {ANDROID_CLIENT_ID, IOS_CLIENT_ID,WEB_CLIENT_ID} from '@env'
import * as Google from 'expo-auth-session/providers/google'
import { makeRedirectUri } from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession()

const Login1 = () => {
  const [email, setEmail] = useState('')
  const navigation = useNavigation();
  const config = {
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
    redirectUri: makeRedirectUri(),
    scopes: ["profile", "email"],
  }


  const [request, response, promptAsync] = Google.useAuthRequest(config)

  return (
    <SafeAreaView className='mx-8 '>
        <Text className='text-2xl font-bold mt-[123px]'>Sign in</Text>
        <InputComponent
            value={email}
            placeholder='Email Address'
            containerStyles='mt-8'
            onChangeText={setEmail}
        />
        <CustomButton 
          title='Continue'
          containerStyles='w-full mt-4'
          onPress={() => navigation.navigate('login2', {email})}
        />
        <TouchableOpacity
          className='mt-4'
        >
            <Text className='text-xs text-[#272727] font-bold  text-left'>Dont have an Account ? Create One</Text> 
        </TouchableOpacity>
        <CustomButton
          icon={icons.ic_facebook}
          title='Continue with Facebook'
          containerStyles='mt-[71px] bg-[#e6e6e6]'
          titleStyles='text-[#272727]'
          onPress={() => promptAsync()}
        />
    </SafeAreaView>
  )
}

export default Login1