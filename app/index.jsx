import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'
import { router, useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const Splash = () => {
  const nav=useNavigation()

  // useEffect(() => {
  //   const timer=setTimeout(()=>{
  //     nav.navigate('login1')
  //   },2000)

  //   return()=>clearTimeout(timer)
  // },[nav]);

  return (
    <SafeAreaView className='bg-[#8E6CEF] w-full h-full justify-center items-center'>
        <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[175px] h-[80px]'
        />
        <TouchableOpacity
          onPress={()=>router.push('login1')}>
          <Text className='text-white text-base font-normal mt-5'>Skip</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Splash