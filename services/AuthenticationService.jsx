import axios from 'axios'
import { storeSetData } from './GetData';

export const handleLogin = async (email,password) => {
    console.log("Button pressed!");
    axios.post('http://192.168.2.29:8080/api/v1/auth/login', {
      email: email,
      password: password
    })
    .then(response => {
      const token = response.data.token;
      console.log('JWT Token:', token);
      storeSetData('token',token)
    })
    .catch(error => {
      console.log('Login error:', error);
    });
  };

export const handleSignUp = async (fullName,email,phone,password) => {
  try{
    const response = axios.post('http://192.168.2.29:8080/api/v1/auth/register',
      {
        full_name: fullName,
        email: email,
        phone_number: phone,
        password: password
      });
      console.log('Signup response success:');
      return true;
  }catch(error){
    console.log('Signup error:', error);
    return false;
  }
}