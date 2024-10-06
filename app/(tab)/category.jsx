import { View, Text, FlatList, Image, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MsgComponent from '../../components/MsgComponent'
import { TouchableOpacity } from 'react-native'
import icons from '../../constants/icons'
import { Client } from '@stomp/stompjs'
import { TextDecoder } from 'text-encoding'
import SockJS from 'sockjs-client'


const Category = () => {

  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('')
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS('http://192.168.2.29:8080/ws');
    const client = new Client({
      webSocketFactory: () => socket,
      onConnect: () => onConnected(client),
      onStompError: onError,
    });
    setStompClient(client);
  }, []);

  const onConnected = (client) => {
    client.subscribe('/topic/public', (message) => {
      console.log('Received message:', message.body);
      const receivedMessage = JSON.parse(message.body);
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, from: receivedMessage.sender, msg: receivedMessage.content, to: 'admin' }
      ]);
    });
    // client.publish({ destination: '/app/chat.addUser', body: JSON.stringify({ sender: 'Khanh', type: 'JOIN' }) });
      
  };

  const onError = (error) => {
    console.error('STOMP Error:', error);
  };

  useEffect(() => {
    if (stompClient) {
      stompClient.activate();
    }

    return () => {
      if (stompClient) {
        stompClient.deactivate();
      }
    };
  }, [stompClient]);

  const sendMessage = () => {
    if (!stompClient || !stompClient.active) {
      console.error('STOMP connection is not active yet!');
      return;
    }
  
    if (msg.trim() !== '') {
      stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify({
          content: msg,
          sender: "admin",
          type: 'CHAT',
        }),
      });
      setMsg('')
    }
  };
  


  return (
    <SafeAreaView className='w-full h-full bg-[#292F3F]'>
      <FlatList
        data={messages}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => (
          <MsgComponent
            msg={item.msg}
            from={item.from}
            to={item.to}
            containerStyles='mx-4 mb-2'
          />
          // <Text className='text-red-600'>{item.msga}</Text>
        )}
      />
      {console.log('Messages:', messages)}
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
          onPress={() => { 
            console.log('Sending message:', msg);
            sendMessage(); 
          }}
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