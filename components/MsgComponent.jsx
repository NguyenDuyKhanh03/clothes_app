import { View, Text } from 'react-native'
import React from 'react'
import {width} from "../utils/Scaling"

const MsgComponent = ({msg,from,to,containerStyles}) => {
  if (!msg) {
    return null; 
  }
  
  return (
    <View 
      style={{width:msg.length * 26, height: Math.ceil(msg.length/40)*30,maxWidth:width-100}}
      className={` rounded-[20px] items-center justify-center ${from!="admin"?'self-end bg-[#272A35] ':'self-start bg-[#373E4E]'} ${containerStyles}`}
      >
      <Text className='ml-3 mr-5 text-start  text-white text-sm font-light'>{msg}</Text>
    </View>
  )
}

export default MsgComponent