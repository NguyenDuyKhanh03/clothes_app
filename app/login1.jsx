import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputComponent from '../components/InputComponent'
import CustomButton from '../components/CustomButton'
import icons from '../constants/icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'
import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithRedirect } from 'firebase/auth'
import { app } from '../config/firebaseConfig'

const Login1 = () => {
  const [email, setEmail] = useState('')
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const auth = getAuth(app);
    auth.languageCode = 'it';
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithRedirect(auth, provider);
  };


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
        onPress={() => navigation.navigate('signup')}
          className='mt-4'
        >
            <Text className='text-xs text-[#272727] font-bold  text-left'>Dont have an Account ? Create One</Text> 
        </TouchableOpacity>
        <CustomButton
          icon={icons.ic_facebook}
          title='Continue with Facebook'
          containerStyles='mt-[71px] bg-[#e6e6e6]'
          titleStyles='text-[#272727]'
          onPress={handleLogin}
        />
    </SafeAreaView>
  )
}

export default Login1