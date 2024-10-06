import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import icons from '../../constants/icons'
const User = () => {
  return (
    <SafeAreaView>
        <Image
          source={images.avt}
          className='w-20 h-20 rounded-full'
          resizeMode='contain'
        />
        <View className='flex flex-row justify-between items-center px-4 py-2 rounded-lg'>
          <View className=''>
            <Text className='text-base font-bold'>Gilbert Jones</Text>
            <Text className='text-base font-normal text-[#27272780] my-2'>Glbertjones001@gmail.com</Text>
            <Text className='text-base font-normal text-[#27272780]'>121-224-7890</Text>
          </View>
          <TouchableOpacity>
            <Text className='text-xs font-bold text-[#8E6CEF]'>Edit</Text>
          </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-between items-center p-4 rounded-lg'>
          <Text className='text-base font-normal'>Address</Text>
          <TouchableOpacity>
              <Image
                source={icons.ic_arrow_right}
                className='w-6 h-6'
                resizeMode='contain'
              />
            </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-between items-center p-4 rounded-lg'>
          <Text className='text-base font-normal'>Wishlist</Text>
          <TouchableOpacity>
              <Image
                source={icons.ic_arrow_right}
                className='w-6 h-6'
                resizeMode='contain'
              />
            </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-between items-center p-4 rounded-lg'>
          <Text className='text-base font-normal'>Payment</Text>
          <TouchableOpacity>
              <Image
                source={icons.ic_arrow_right}
                className='w-6 h-6'
                resizeMode='contain'
              />
            </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-between items-center p-4 rounded-lg'>
          <Text className='text-base font-normal'>Help</Text>
          <TouchableOpacity>
              <Image
                source={icons.ic_arrow_right}
                className='w-6 h-6'
                resizeMode='contain'
              />
            </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-between items-center p-4 rounded-lg'>
          <Text className='text-base font-normal'>Payment</Text>
          <TouchableOpacity>
              <Image
                source={icons.ic_arrow_right}
                className='w-6 h-6'
                resizeMode='contain'
              />
            </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text className='text-base font-bold text-[#FA3636]'>Sign Out</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default User
