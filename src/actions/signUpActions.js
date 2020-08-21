// import axios from 'axios'
// export const userSignUpRequest = (userData)=> {
//   // thunk
//   return dispatch =>{
//     return axios.post('http://localhost:3001/user/signUp',userData)
//   }
// }
import * as actionTypes from '../constants/constant.js'
export const signUpData = userData => {
  return {
      type: actionTypes.SIGN_UP,
      payload: userData
  }
}