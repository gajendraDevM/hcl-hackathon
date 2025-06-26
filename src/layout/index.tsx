import { Affix, Layout, Switch } from 'antd'
import Sidebar from './sidebar';
import { Outlet, useLocation, useNavigate, useRouteError } from 'react-router-dom';
import Breadcrumbs from '../shared/breadcrumbs';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/authSate';
import { useFetchOne } from '../api/useApihook';
import { FaUser } from 'react-icons/fa';
import { FcWiFiLogo } from 'react-icons/fc';


const { Header, Footer, Sider, Content } = Layout;


export default function index() {
  const { logout, isAuthenticated, user, themeDark, isCollapsed  } = useAuth() as any
  const navigate = useNavigate()

  let error = useRouteError() as any;
  const {pathname} = useLocation()

  const {error:errors} = useFetchOne(`users/${user?._id}`) as any

  useEffect(()=>{

    
    if(errors?.response?.status == 401){
 

    return   logout()
 
 
     } 
 
 }, [errors?.response?.status])
 
 
  //  useEffect(()=>{

    
 
  //  if(!isAuthenticated){
 
  //      navigate('/login')
 
  //    } else {
 
  //      navigate(`${pathname}`)
  //    }  
 
  //  }, [isAuthenticated])

  //  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout className='h-screen w-full ' >
    <Layout>
       
    <Affix offsetTop={0}>
 <Sider trigger={null} collapsible collapsed={isCollapsed} className=' h-[100vh]  overflow-hidden' style={{background:"linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"}}>

<div className='flex justify-center items-center mt-4'>
{/* <FaUser className='text-7xl text-gray-600 bg-gray-200 rounded-full p-3'/> */}
<FcWiFiLogo className='text-8xl'/>

</div>
      
        <Sidebar/>

      </Sider>
      </Affix>
      <Content className='  h-full '>

   {/* <Breadcrumbs/> */}

   {error? <h1>Not found</h1> : <Outlet/>}

      </Content>


      

    </Layout>
       

  </Layout>
  )
}
