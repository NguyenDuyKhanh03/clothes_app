import axios from 'axios'
import { storeGetData } from './GetData';

export const getProduct= async (id) =>{
  try{
    const token=await storeGetData('token')
    const response=axios.get(`http://192.168.2.29:8080/api/v1/products/get`,{
      headers:{
        'Authorization':`Bearer ${token}`
      },
      params:{
        id:id
      }
    });
    return (await response).data
  }catch(error){
    console.log('Get product error:',error)
  };


}

export const handleGetProduct = async () => {
    
    try{
        const token=await storeGetData('token');
        const response=await axios.get('http://192.168.2.29:8080/api/v1/products/get-all', {
            headers: {
              Authorization: `Bearer ${token}`
            }
        });
        console.log('Products:', response.data);
        return response.data;
    }catch(error){
      console.log('Get product error:',error)
      
    }

}
