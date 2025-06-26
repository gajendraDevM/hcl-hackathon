import { PlusOutlined, ArrowLeftOutlined  } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

export default function BackCreateBtn({open, showDrawer, title, clear}:any) {

const close = () =>{


  clear(null) 
  showDrawer()

} 

  return (
    <div className='flex items-center  justify-start gap-x-4 pb-6  pt-4 '>
    <Button size='large'  icon={ open ? <ArrowLeftOutlined className='text-white  ' /> :
     <PlusOutlined className='text-white  ' />} type="primary" onClick={()=>close()}>
    {open? "Back" : title}
  </Button>
  {open && <h2 className='  text-[16px] text-gray-600 my-auto'> {title}</h2>}
  </div>
  )
}
