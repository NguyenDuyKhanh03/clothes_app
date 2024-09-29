import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '../../constants/icons'

const TabIcon = ({focused, color, icon, title}) => {
  return (
    <View className='flex items-center justify-center gap-1'>
        <Image 
            source={icon} 
            className='w-6 h-6'
            tintColor={color}
            resizeMode='contain'
        />
        <Text className={`text-xs ${color}`}>{title}</Text>
    </View>
  )
}

const TabLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor:'#8E6CEF',
            tabBarInactiveTintColor:'#272727',
            tabBarStyle:{
                height:60,
                backgroundColor:'#fff',
                borderTopWidth:0,
                elevation:0
            }
        }}
    >
        <Tabs.Screen
         name='home' 
            options={{
                title:'Home',
                headerShown:false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                        title='Home'
                        icon={icons.ic_home}
                        color={color}
                        focused={focused}
                    />
                )
            }} 
        />
        <Tabs.Screen
         name='category' 
            options={{
                title:'Danh mục',
                headerShown:false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                        title='Danh mục'
                        icon={icons.ic_category}
                        color={color}
                        focused={focused}
                    />
                )
            }} 
        />
        <Tabs.Screen
         name='user' 
            options={{
                title:'Tôi',
                headerShown:false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                        title='Tôi'
                        icon={icons.ic_user}
                        color={color}
                        focused={focused}
                    />
                )
            }} 
        />
        
    </Tabs>
  )
}

export default TabLayout