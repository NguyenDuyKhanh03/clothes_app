import { View, Text } from 'react-native'
import React from 'react'
import {width} from "../utils/Scaling"

const MsgComponent = ({msg,from,to,containerStyles}) => {
  if (!msg) {
    return null; 
  }
  
  return (
    // <View 
    //   className={` pl-3 pr-5 py-3  rounded-[20px] items-center  ${from!="admin"?'justify-end bg-[#0084FF] ':'justify-start bg-[#EFEFEF] '} ${containerStyles}`}
    //   >
    //     <Text className={`text-start   text-sm font-light ${from!="admin"?'self-end text-white ':'self-start text-black'}`}>{msg}</Text>
    // </View>
    <Text className={` pl-3 pr-5 py-1  mb-4 text-start rounded-[20px] items-center   text-lg font-light ${from!="admin"?'self-end bg-[#0084FF] text-white ':'self-start bg-[#EFEFEF] text-black'} ${containerStyles}`}>{msg}</Text>
  )
}

export default MsgComponent