import { Button, Form, message } from 'antd';
import ProductForm from './shiftForm';
import { useCreate, useEdit } from '../../api/useApihook';
import { useEffect } from 'react';
import dayjs from 'dayjs';

export default function CreateShift({showDrawer, isEdit, refetch, cloading, category}:any) {

 
  const [form] = Form.useForm();

  useEffect(()=>{
    console.log({isEdit});
    dayjs.locale('en'); 
    let edit = {...isEdit,
      status: (isEdit?.status == 'In Stock') ? true : false,
      expiry_date: dayjs(isEdit?.expiry_date),
      date_of_procurement: dayjs(isEdit?.date_of_procurement),
      category_id: { label:isEdit?.category_id?.category_name, value:isEdit?.category_id?._id}

    }          


  isEdit && form.setFieldsValue(edit)

  }, [isEdit])

  const {mutate} = useCreate('shift', (res:any)=>onSuccess(res), ()=>null)

  const {mutate:update} = useEdit(`shift/${isEdit?._id}`, (res:any)=>onSuccess(res), ()=>null)

const onSuccess = (res:any) =>{
  if(res){
    refetch()
    message.success(`Shift ${isEdit? 'updated' : 'created'} Succefully`).then(()=>{
      
      showDrawer()

    })
   
  }
}

  const onFinish = (values: any) => {

    console.log({values});
    
    if(isEdit){

      console.log({values});
      

      update(values)
     
    } else {

       mutate(values)
    }
   
  };


  return (
    <div className=''>
      <Form
        form={form}
         layout="vertical"
         onFinish={onFinish}
        >   
  <ProductForm category={category} cloading={cloading} data={isEdit}/>
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
  )
}


