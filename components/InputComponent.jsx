import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const InputComponent = ({value, onChangeText, type, placeholder, containerStyles}) => {
  return (
    <View className={`w-full h-14 bg-[#e6e6e6] rounded ${containerStyles}`}>
        <TextInput 
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            type={type}
            secureTextEntry={type === 'password' ? true : false}
            className='rounded-md w-full h-full text-lg font-[450] pl-3 pt-5 pb-4 text-[#27272780]' />

    </View>
  )
}

export default InputComponent