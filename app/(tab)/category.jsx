import { View, Text, FlatList, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MsgComponent from '../../components/MsgComponent'
import { TouchableOpacity } from 'react-native'
import icons from '../../constants/icons'

const messages = [
  {
    id: 1,
    from: 'user',
    msg: 'Hello',
    to: 'admin'
  },
  {
    id: 2,
    from: 'user',
    msg: 'Chỉ định chiều rộng động dựa trên độ dài của msg',
    to: 'admin'
  }
]

const Category = () => {
  const [msg, setMsg] = useState('')


  return (
    <SafeAreaView className='w-full h-full bg-[#292F3F]'>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MsgComponent
              msg={item.msg}
              from={item.from}
              to={item.to}
              containerStyles='mx-4 mb-2'
            />
          )}
        />
        <View className='bg-[#00000040] mx-6 mb-4 flex flex-row rounded-xl justify-between items-center'>
          <TextInput
            placeholder='Write'
            className='text-sm font-normal text-[#FFF] ml-4 mr-3 flex-1 py-2'
            placeholderTextColor={'#FFFFFF99'}
            onChangeText={(text) => setMsg(text)}
            value={msg}
            multiline={true}
            numberOfLines={1}
          />

          <TouchableOpacity
            className='w-10 h-10 items-center justify-center'
          >
            <Image
              source={icons.ic_chat}
              className='w-4 h-[18px]'
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Category