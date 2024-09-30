import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import icons from "../constants/icons"
import OrderItem from '../components/OrderItem'
import { router } from 'expo-router'
import OrderItem1 from '../components/OrderItem1'
const orders = [
    {
        id: 1,
        url: 'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
        proName: 'Abstract Art',
        proPrice: 100,
        quantity: 4,
        size: 'M',
        color: 'Black',
    },
    // {
    //     id: 2,
    //     url: 'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    //     proName: 'Abstract Art',
    //     proPrice: 100,
    //     quantity: 4,
    //     size: 'M',
    //     color: 'Black',
    // },
    // {
    //     id: 3,
    //     url: 'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    //     proName: 'Abstract Art',
    //     quantity: 4,
    //     proPrice: 100,
    //     size: 'M',
    //     color: 'Black',
    // },
    // {
    //     id: 4,
    //     url: 'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    //     proName: 'Abstract Art',
    //     quantity: 4,
    //     proPrice: 100,
    //     size: 'M',
    //     color: 'Black',
    // },
    // {
    //     id: 5,
    //     url: 'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    //     proName: 'Abstract Art',
    //     quantity: 4,
    //     proPrice: 100,
    //     size: 'M',
    //     color: 'Black',
    // },
]

const Checkout = () => {
    return (
        <SafeAreaView className='w-full h-full bg-[#e6e6e6]  '>
            <View className='flex flex-row w-full items-center bg-white'>
                <TouchableOpacity
                    onPress={() => router.back()}
                    className='w-10 h-10 bg-[#F4F4F4] backdrop-blur-2xl rounded-full ml-2 items-center justify-center'
                >
                    <Image
                        source={icons.ic_arrow_left}
                        className="w-6 h-6  "
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <Text className='flex-1 text-base font-bold text-black items-center absolute left-28'>Bảo đảm vận chuyển an toàn</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                className='mt-2 p-2 bg-white rounded-lg'
            >
                <View className='flex flex-row'>
                    <View className='flex flex-row mr-2'>
                        <Image
                            source={icons.ic_locate}
                            className='w-5 h-5 mr-2'
                            resizeMode='contain'
                        />
                        <Text className='text-[#27272780] text-base'>Nguyễn Văn A</Text>
                    </View>
                    <Text>0373886032</Text>
                </View>
                <Text className='text-[#27272780] text-base'>219/26 đường số 5</Text>
                <Text className='text-[#27272780] text-base'>Phường 8, Quận Gò Vấp, Thành phố Hồ Chí Minh</Text>
            </TouchableOpacity>
            <View className='bg-white mt-2'>
                <Text className=' mx-2  my-3 text-black font-semibold text-xl'>Đặt hàng các mặt hàng</Text>

                {orders.length == 1 &&(
                    <OrderItem
                        url={orders[0].url}
                        proName={orders[0].proName}
                        proPrice={orders[0].proPrice}
                        quantity={orders[0].quantity}
                        size={orders[0].size}
                        color={orders[0].color}
                        containerStyles='mb-2 mx-2'
                    />
                )}
                {orders.length > 2 &&(
                    <FlatList
                        data={orders}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <OrderItem1
                                url={item.url}
                                proPrice={item.proPrice}
                                quantity={item.quantity}
                                containerStyles='ml-2'
                            />

                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                )}

            </View>
        </SafeAreaView>
    )
}

export default Checkout