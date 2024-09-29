import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({title,icon, onPress, containerStyles,titleStyles}) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        className={`flex flex-row  w-full h-[49px] rounded-full justify-center items-center py-3 bg-[#8E6CEF] ${containerStyles}`}>
            { icon && 
              <Image 
                  source={icon} 
                  className='w-[24px] h-[24px] ml-5 mr-3'
                  resizeMode='contain'
              />

            }
            <View className={`flex-1 h-7 justify-center items-center mr-12 ${icon ? '':'ml-12'} }`}>
                <Text className={`text-base text-white font-medium ${titleStyles}`}>{title}</Text>
            </View>
            
    </TouchableOpacity>
  )
}

export default CustomButton