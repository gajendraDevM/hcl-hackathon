import { PlusOutlined } from '@ant-design/icons'
import { Form, Input, InputNumber, DatePicker, Switch, Upload, Select, Button, Col, Row, Card } from 'antd'
import { useUploadRequest } from '../../shared/util/uploadRequest'
import { useEffect } from 'react'
const { Option } = Select;

export default function StaffForm({ data, category, cloading }: any) {




  const { uploadProps } = useUploadRequest(data)


  const { TextArea } = Input;


  const dateFormat = 'DD/MM/YYYY ';

 



  return <>


    <div className="container ">

      <div className='grid grid-cols-3 gap-5'>

        <div className=' col-span-2'>


          <Card title="Basic Info" headStyle={{ border: "none" }} >

            <div className="grid grid-cols-4 gap-x-4">


              <div className=' col-span-2' >

                <Form.Item
                  label="staf Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input your product name!' }]}
                >
                  <Input size="large" />
                </Form.Item>

              </div>


              <div className=' col-span-2' >

                <Form.Item
                  label="Select Shift Prefrence"
                  name="sfift_prefrence"
                  rules={[{ required: true, message: 'Please select a shift prefrence!' }]}
                >
                  <Select size="large" loading={cloading}>
                    {category?.docs?.map((item: any) => (
                      <Option key={item._id} value={item._id}>
                        {item.category_name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

              </div>

              
              <div className=' col-span-2' >

                <Form.Item
                  label="Role"
                  name="role"
                  rules={[{ required: true, message: 'Please select a role!' }]}
                >
                  <Select size="large" loading={cloading}>
                    {category?.docs?.map((item: any) => (
                      <Option key={item._id} value={item._id}>
                        {item.category_name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

              </div>
             


            

            
  <div className=' col-span-2' >

                <Form.Item
                  label="staff COntact"
                  name="contact"
                  rules={[{ required: true, message: 'Please input your contact!' }]}
                >
                  <Input size="large" />
                </Form.Item>

              </div>




            </div>

          </Card>

          <br />


        </div>

      </div>


    </div>


  </>
}
