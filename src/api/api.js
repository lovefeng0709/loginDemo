import axios from 'axios'

export const getSignUpData = (userData)=> axios.post('http://localhost:3001/user/signUp',userData)
// export const getSignUpData = (userData)=>(dispatch)=> axios.post('http://localhost:3001/user/signUp',userData) //就错了