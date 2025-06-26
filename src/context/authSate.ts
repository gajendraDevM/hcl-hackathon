import create from 'zustand'
import { persist } from 'zustand/middleware'
import jwt_decode from "jwt-decode";
import {Accesskey} from "../api/key";

// let data = localStorage.getItem('user') as any

const getUser = async (token:string) => {

  try {

      const id =  jwt_decode(token) as any
  const api = Accesskey(token)

  const getOne = () =>api.get(`users/${id?.sub}`)

   const value =  await getOne()

  return value?.data

  } catch (error) {

    console.log({error});
    
    
  }


  



}

let store = (set:any, get:any) => ({
    isAuthenticated: true,
    token:"data?.token",
    blng:'en',
    user:null,
    themeDark:false,
    themeColor:'#1668DC',
    isCollapsed:false,
    login: async ({data}:any) =>{
    
    const user  = await  getUser(data?.access_token)

      set({
        isAuthenticated: await data?.access_token ? true : false,
         user: await user,
        token:data?.access_token
      })
    },
    logout: ()=>{

      set({
        isAuthenticated:false,
        token:null,
        user:null

      })

      // localStorage.clear()

    },

    setThemeMode:()=>{

      set({
        themeDark: !get().themeDark
      })

    },
   setThemeColor: ({themeColor}:any) =>{

      set({
        themeColor:themeColor

      })

    },
    changeLng: ({lng}:any) =>{

      set({
        blng:lng

      })

    },

    setCollapsed: () =>{

      set({
        isCollapsed:!get().isCollapsed

      })

    }
  })



let storeState = persist(store, {name:"user"})

 const useAuth = create(storeState)
  export { useAuth }