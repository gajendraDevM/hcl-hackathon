import React, { useState } from 'react';
import { Button, Drawer, Form } from 'antd';
import { useCreate } from '../api/useApihook';


interface Props {
    children: React.ReactNode;
    title: string;
    url?: string;
    form:any;
    onFinish:()=>void

    }

const Create: React.FC<Props> = ({title, children, url, form, onFinish }) => {

  const {mutate} = useCreate(url, ()=>null, ()=>null)


  
 


  return (
    <>
    
    <div className='  w-[99%] z-10 relative overflow-hidden p-4 '>
        <Form
        form={form}
         layout="vertical"
         onFinish={onFinish}
        >
       {children}
       

       <div  className=' p-4 w-full '>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      &nbsp;&nbsp;
      <Button type="default"   >
        Cancel
      </Button>
    </div>
  </Form>
  </div>
    </>
  );
};

export default Create