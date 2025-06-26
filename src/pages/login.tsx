import React, {useEffect} from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useCreate } from '../api/useApihook';
import { useAuth } from '../context/authSate';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()

    const { login, isAuthenticated, user } = useAuth() as any

   const onSuccess = (data:any) =>{

       login(data)

   }

const onFinishFailed = ({response}: any) => {

    messageApi.error(response?.data?.message || 'somthing went wrong!')


    
};



const {mutate } = useCreate('/auth/login', onSuccess, onFinishFailed)

const onFinish = (values: any) => {

    mutate(values)

};


// useEffect(()=>{

    
//     if( isAuthenticated && user?.status  == 'Active'){

//     return  navigate('/dashboard')

//     } else{
//       return  navigate('/login')
//     }

//   }, [user?.status])




 return <div className=' w-full h-screen center'> <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600, width:500 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
          {contextHolder}

    <Form.Item
      label="Email Id"
      name="email"
      rules={[{ required: true, message: 'Please input your username!!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
};

export default Login;
