import { View, Text } from 'react-native'
import React from 'react'
import {width} from "../utils/Scaling"

const MsgComponent = ({msg,from,to,containerStyles}) => {
  return (
    <View 
      style={{width:msg.length * 26, height: Math.ceil(msg.length/40)*25,maxWidth:width-100}}
      className={` bg-[#373E4E] rounded-[20px] items-center justify-center ${containerStyles}`}
      >
      <Text className='ml-3 mr-5 text-start  text-white text-sm font-light'>{msg}</Text>
    </View>
  )
}

export default MsgComponent