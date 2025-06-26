import { Card } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';


export default function TableSec({columns, data, setPage, page, isLoading}:any) {

    // const [page, setPage] = useState(1)


    
    // const {pathname} =   useLocation()

    // const {data, isLoading, isError } = useFetchAll(`${pathname}?page=${page}`)

    // console.log({isError});
    



  let Sl_no = [{
    title: 'Sl No.' ,
    key: 'status',
    render: (text:any, record:any, index:number) => (page - 1) * 10 + index + 1, 
  }]

  return <Table

  
className='py-2'
  pagination={
   { 
     total:data?.totalDocs,
     current: data?.page,
     size:'small',
     onChange(page){

        setPage(page)
        

     },
     showTotal:(total, range) => `${range[0]}-${range[1]} of ${total}`,

}
  }
   columns={[...Sl_no, ...columns]}
    loading={isLoading} dataSource={data?.docs} 
    
    /> 
}

