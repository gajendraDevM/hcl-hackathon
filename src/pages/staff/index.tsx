import React, { useEffect, useState } from 'react'
import TableSec from '../../components/table'
import PageWrapper from '../../shared/pageWrapper'
import Create from '../../components/create';
import { Badge, Button, Card, DatePicker, Form, Input, InputNumber, Popconfirm, Select, Upload, message } from 'antd';
import { MdPlusOne, MdHdrPlus, MdSearch } from 'react-icons/md';
import { PlusOutlined } from '@ant-design/icons';
import BackCreateBtn from '../../shared/backCreate';
import Actionstaff from './actionStaff';
import { useFetchAll, useDelete } from '../../api/useApihook';
import { FaEdit, FaSearch, FaTrashAlt } from 'react-icons/fa';
import { useSelectOptions } from '../../shared/util/useSelectOptions'
const { Option } = Select;



export default function staff() {
    
  const [page, setPage] = useState(1)
    const [filtercate, setstaff] = useState('all') as any
    const [search, setSearch] = useState() as any



  const {data, isLoading, isError, refetch } = useFetchAll(`staff?page=${page}&staff=${filtercate}&search=${search}`)

  const { data: staff, isLoading:staffLoading } = useSelectOptions('staff')

  const { mutate } = useDelete('staff', (res:any)=>onSuccess(res), ()=>null)

  const confirm = ( data:any) => {

    mutate(data?._id)

   
  };


    const onSuccess = (res:any) =>{
    if(res){
  
      message.success(`staff Deleted Succefully`).then(()=>{

        refetch()
      })
     
    }
  }
  
  const [isEdit, setEdit] = useState() as any 

            
      const columns= [
  
     
        {
          title: 'staff Name',
          dataIndex: 'name',
          key: 'name',       

          render: (text:string)=><Badge status={text === 'In Stock' ? "success": "error"} text={text} />
        },
        {
          title: 'staffId',
          dataIndex: 'staffId',
          key: 'staffId',       

          render: (text:string)=><Badge status={text === 'In Stock' ? "success": "error"} text={text} />
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',       

          render: (text:string)=><Badge status={text === 'In Stock' ? "success": "error"} text={text} />
        },

      
      {
          title: 'Action',
          key: 'action',
          render: (text:any, data:any)=>{
      
            return <div className=' flex justify-start items-center gap-x-6 text-lg ' >
      
              <FaEdit onClick={()=>showDrawer(data)} className=' cursor-pointer text-[#919191]' />
              <Popconfirm
    title="Delete the Staff "
    onConfirm={()=>confirm(data)}
    okText="Yes"
    cancelText="No"
  >
              <FaTrashAlt className=' cursor-pointer text-red-700 text-[16px]' />
      </Popconfirm>
            </div>
      
          }
        }
         
      ];

     

      const handlestaffFilter = (id:any) =>{        

        console.log({id});
        
        setstaff(id)

      }


      const showDrawer = (data:any) => { 

        if( data) {

          console.log({data});
          
          setEdit(data)

        }
        setOpen(!open);
        console.log({h:open});
        
      };

      const [open, setOpen] = useState(false);


      useEffect(()=>{

        

      }, [])



  return (
    <PageWrapper>
     
      { open ? <>
        <BackCreateBtn clear={setEdit}  title={isEdit? "Update staff":"Add Staff"} open={open} showDrawer={showDrawer}/>
<Actionstaff isEdit={isEdit} showDrawer={showDrawer} refetch={refetch}  staff={staff} cloading={staffLoading}/> 
      </> : <Card>
        <div className=' flex justify-between  items-center mb-4' >

       <div className='flex gap-x-4 items-center px-2 pb-2'>

  <Input style={{ width: 250 }} placeholder='Staff' onChange={(data)=>setSearch(data.target.value)}   size='large' prefix={<MdSearch className='text-xl' />} />

  <Select value={filtercate} style={{ width: 250 }} onChange={handlestaffFilter} size="large" loading={staffLoading}>

  <Option key="all" value="all">
                  All Staff
                </Option>
                    {staff?.docs?.map((item: any) => (
                      <Option key={item._id} value={item._id}>
                        {item.staff_name}
                      </Option>
                    ))}
              
                  </Select>

         

       </div>



      <BackCreateBtn clear={setEdit}  title={isEdit? "Update Staff":"Create Staff"} open={open} showDrawer={showDrawer}/>
      </div>
         <TableSec setPage={setPage} page={page} isLoading={isLoading} data={data} columns={columns}  /> </Card>
}

    </PageWrapper>
  )
}
