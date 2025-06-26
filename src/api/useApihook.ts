
import {
  useQuery,
  useMutation,
} from '@tanstack/react-query'
// import { useGlobalState } from '../context/globalState';

import useResourse from './resource'

// const token = localStorage.getItem("api_token") || ''

type onSuccess  = (data: any) => void;
type onError  = (errorResponse: any) => void;



export const useFetchAll = (url:string| any, onSuccess?:any, onError?:any, extraOptions?:any, key?:any) =>{
    const { getAll} = useResourse()

  return useQuery([url], ()=>getAll(url), {onSuccess, onError, select:({data}:any)=>data
} ) 

}

export const useCreate = (url:string | any,  onSuccess:onSuccess, onError:onError, ) =>{
    const { getCreate } = useResourse()

  return useMutation((data:any)=>getCreate(url, data), {onSuccess, onError} )

}

export const useEdit = (url:string | any,  onSuccess:onSuccess, onError:onError, ) =>{
  const { getUpdate } = useResourse()

return useMutation((data:any)=>getUpdate(url, data), {onSuccess, onError} )

}

export const useFetchOne = (url:string | any, onSuccess?:any, onError?:any,  key?:any, extraOptions?:any) =>{
    const { getOne } = useResourse()    

    return useQuery([url, key], ()=>getOne(url), {onSuccess, onError, select:({data}:any)=>data?.data,
   enabled:extraOptions,

  } ) 

}

  

  
export const useDelete = (url:string| any,  onSuccess:onSuccess, onError:onError) =>{

    const { getDelete } = useResourse()

    return useMutation([url], (id:any)=>getDelete(`${url}/${id}`), {onSuccess, onError} )
  
  
  }



