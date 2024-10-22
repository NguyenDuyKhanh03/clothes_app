import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { TextDecoder } from 'text-encoding'
import { SafeAreaView } from 'react-native-safe-area-context';
import { storeGetData } from '../services/GetData';

const Notification = () => {
    const [messages, setMessages] = useState([]);
    const [stompClient, setStompClient] = useState(null);
    // console.log('Connected');
    useEffect(() => {
        const configSocket = async () => {
            const token=await storeGetData('token');
            const socket = new SockJS('http://192.168.2.29:8080/secured/room');
            const client=new Client({
                webSocketFactory:()=>socket,
                connectHeaders:{
                    Authorization:`Bearer ${token}`

                },
                onConnect:()=>onConnected(client,token),
                onStompError:onError,
                onDisconnect:()=>console.log('Disconnected')    
            });

            setStompClient(client);
            client.activate();
        }
        configSocket();
    }, []);

    const onConnected = (client,token) => {
        console.log('Connected');
        
        client.publish({
            destination: '/app/connect', // Đường dẫn đến endpoint kết nối
            body: token // Gửi email trong thân của thông điệp
        });
        client.subscribe('/user/topic', (message) => {
            setMessages(prevMessages => [...prevMessages, message.body]);
        });
        

    };
    const onError = (error) => {
        console.error('STOMP Error:', error);
    };

    useEffect(() => {
        return () => {
            if(stompClient){
                stompClient.deactivate();
            }
        }

    }, [stompClient]);
    return (
        <SafeAreaView className='bg-red-500 w-full h-full'>
            {
                messages.map((message,key) => (
                    <View key={key}>
                        <Text className='text-black '>{message}</Text>
                    </View>
                ))
            }
            <Text className='text-black'>Notification</Text>
        </SafeAreaView>
    
    )
}

export default Notification