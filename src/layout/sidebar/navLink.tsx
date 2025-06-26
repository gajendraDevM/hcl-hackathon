import { Menu } from 'antd'
import items from './navData'
import { useAuth } from '../../context/authSate'

export default function NavLink() {
  const {themeDark  } = useAuth() as any

  return (
    
    <Menu
    theme='dark'
    className=' p-2 text-white'
    style={{borderInlineEnd:'none',  height:"100%", backgroundColor:themeDark ? 'rgba(0,0,0,0)':'rgba(0,0,0,0)'}}
    defaultSelectedKeys={['dashboard']}
    mode="inline"
    items={items}
    
    
  />
  )
}
