import { Button, Form, message } from 'antd';
import ProductForm from './staffForm';
import { useCreate, useEdit } from '../../api/useApihook';
import { useEffect } from 'react';
import dayjs from 'dayjs';

export default function CreateProduct({showDrawer, isEdit, refetch, cloading, category}:any) {

 
  const [form] = Form.useForm();

  useEffect(()=>{
    console.log({isEdit}) ;
    dayjs.locale('en'); 
    let edit = {...isEdit,
      status: (isEdit?.status == 'In Stock') ? true : false,
      expiry_date: dayjs(isEdit?.expiry_date),
      date_of_procurement: dayjs(isEdit?.date_of_procurement),
      category_id: { label:isEdit?.category_id?.category_name, value:isEdit?.category_id?._id}

    }          


  isEdit && form.setFieldsValue(edit)

  }, [isEdit])

  const {mutate} = useCreate('staff', (res:any)=>onSuccess(res), ()=>null)

  const {mutate:update} = useEdit(`staff/${isEdit?._id}`, (res:any)=>onSuccess(res), ()=>null)

const onSuccess = (res:any) =>{
  if(res){
    refetch()
    message.success(`Staff ${isEdit? 'updated' : 'created'} Succefully`).then(()=>{
      
      showDrawer()

    })
   
  }
}

  const onFinish = (values: any) => {

    console.log({values});
    

    values.product_img = values.product_img?.file?.response ? values.product_img?.file?.response : values.product_img
    values.status = values.status ? "In Stock" : "Out of Stock"
    values.category_id = values.category_id?.value ? values.category_id?.value : values.category_id

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
