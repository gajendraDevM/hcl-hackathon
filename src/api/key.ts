import axios from 'axios';
// import { useAuth } from '../context/authSate';

const key= {

    BACK_ENDURL:'http://localhost:5000/v1/api/'

}




 function Accesskey(token:string) {

const api = axios.create({
    baseURL: key.BACK_ENDURL,
   }) 

  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //  api.defaults.headers.common['X-localization'] = 'en';

  return api
}





export {key, Accesskey}