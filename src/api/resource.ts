import { useAuth } from "../context/authSate";
import {Accesskey} from "./key";

export default function useResourse() {

  const token = useAuth((state:any)=>state.token) as any


const api = Accesskey(token)




  const getOne = (resource: string, id: any = null) =>api.get(`${resource}`)
  const getAll = (resource: any) =>api.get(`${resource}`)
  const getUpdate = (resource: string, newdata: any) =>api.put(`${resource}`, newdata)
 
  const getCreate = (resource: string, data: any) =>api.post(`${resource}`, data)
  const getDelete = (resource: string) =>api.delete(`${resource}`)
 
 



  return  {getOne, getAll, getCreate, getDelete, getUpdate }
}
