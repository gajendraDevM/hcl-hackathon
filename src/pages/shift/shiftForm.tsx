import { PlusOutlined } from '@ant-design/icons'
import { Form, Input, InputNumber, DatePicker, Switch, Upload, Select, Button, Col, Row, Card } from 'antd'
import { useUploadRequest } from '../../shared/util/uploadRequest'
import { useEffect } from 'react'
const { Option } = Select;

export default function ProductForm({ data, category, cloading }: any) {




  const { uploadProps } = useUploadRequest(data)


  const { TextArea } = Input;


  const dateFormat = 'DD/MM/YYYY';

  useEffect(() => {


    console.log({ category });


  }, [])



  return <>


    <div className="container ">

      <div className='grid grid-cols-3 gap-5'>

        <div className=' col-span-2'>


          <Card title="Basic Info" headStyle={{ border: "none" }} >

            <div className="grid grid-cols-4 gap-x-4">


              <div className=' col-span-2' >

                <Form.Item
                  label="Shift type"
                  name="shift_type"
                  rules={[{ required: true, message: 'Please input your shift type!' }]}
                >
                  <Input size="large" />
                </Form.Item>

                 <Form.Item
                  label="Shift Id"
                  name="shiftId"
                  rules={[{ required: true, message: 'Please input your shift type!' }]}
                >
                  <Input size="large" />
                </Form.Item>


                 <Form.Item
                  label="Capacity"
                  name="capacity"
                  rules={[{ required: true, message: 'Please input your shift type!' }]}
                >
                  <Input size="large" />
                </Form.Item>

              </div>


          </div>
          </Card>


        </div>

      </div>


    </div>


  </>
}


