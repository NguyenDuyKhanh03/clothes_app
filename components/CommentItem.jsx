import { View, Text } from 'react-native'
import React from 'react'
import icons from '../constants/icons'
import { Image } from 'react-native'


const CommentItem = ({username,rating,content,date,containerStyles}) => {
  return (
    <View className={`${containerStyles}`}>
      <View className='flex flex-row justify-between items-center mb-4'>
        <View className='flex flex-row items-center'>
          <Text className='text-xs font-bold mr-2'>{username}</Text>
          <View className='flex flex-row'>
            {
              Array.from({length:rating}).map((_,index)=>(
                <Image 
                  key={index} 
                  source={icons.ic_star} 
                  className='w-3 h-3' 
                  resizeMode='cover'/>
              ))
            }
          </View>   
        </View>
        <Text className='font-normal text-xs text-[#27272780]'>{date}</Text>
      </View>
      <Text className='text-xs font-medium '>{content}</Text>
      <View className='h-[1px] bg-gray-200 mt-4' />
    </View>
  )
}

export default CommentItem