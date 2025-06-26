import { BellOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '../context/authSate';
import { Affix, Avatar, Badge, Button, Drawer, Dropdown, Input, Menu, Radio } from 'antd';
import { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import Breadcrumbs from './breadcrumbs';
import { FaUser } from 'react-icons/fa';
import eng from '../assets/usa.png'
import ger from '../assets/germany.png'
import { MdSearch } from 'react-icons/md';


const { Search } = Input

export default function PageWrapper({children}:any) {



  const { themeDark, setThemeMode, themeColor, setThemeColor, user, setCollapsed, isCollapsed  } = useAuth() as any

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const [ctheme, setCTheme] = useState() as any;

  const [flag, setFlag]  = useState(eng) as any

  useEffect(()=>{
    setTheme(themeDark)
    setCTheme(themeColor)
  }, [themeDark])

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const languages = [
    {
      key:0,
      label: 'English',
      flag:eng
    },
    {
      key:1,
      label: 'German',
      flag:ger
    }
  ]


  const languagesMenu = (
    <Menu onClick={(e:any) => handleMenuClick(e)}>
      {languages.map((lang) => (
        <Menu.Item key={lang.key}>
          {lang.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleMenuClick = (e:any) =>{    

    console.log({user});
    
    setFlag(languages[Number(e.key)]?.flag)    

  }

  return (

    <main style={{ backgroundColor: themeDark ? '#232323':'transparent'}}
    
    className='     rounded-[10px]  relative h-full overflow-y-auto overflow-x-hidden' >
    <div className=' sticky top-0 z-20 bg-white px-6 py-2 shadow-xl'  >

<div className='flex justify-between items-center' >
  <div className='flex justify-between items-center gap-x-6'>

{ isCollapsed ?    <MenuUnfoldOutlined onClick={()=>setCollapsed()} className='text-xl cursor-pointer '/> : 
<MenuFoldOutlined onClick={()=>setCollapsed()} className='text-xl cursor-pointer '/> }    
    <Input size='large' className='' prefix={<MdSearch className='text-2xl' />} />

  </div>
  <div className='flex items-center gap-x-4'>

  <Dropdown  dropdownRender={()=>languagesMenu} placement="bottom" arrow>
      <Avatar size='small' src={flag}  />
    </Dropdown>

    
  <Badge count={1} color={themeColor}>
      <Avatar size='small' shape="circle" icon={<BellOutlined />} />
    </Badge>
    
    <SettingOutlined onClick={showDrawer} className='text-xl text-gray-500 cursor-pointer' />
  
    <div className='flex gap-x-3'>

    <FaUser className='text-4xl text-gray-600 bg-gray-200 rounded-full p-1'/>
    <div>
      <h4 className='mb-0'>{user?.name}</h4>
      <small>{user?.designation}</small>
    </div>

    </div>
  
  </div>

</div>
</div>

<div className='px-8 py-4' >
<Breadcrumbs color={themeColor}/>

{children}
</div>
<Drawer
        title="Theme settings"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
      >
      <Radio.Group options={[
  { label: 'Dark Mode', value: true },
  { label: 'Light Mode', value: false },

]} onChange={()=>setThemeMode()} value={theme} />

<br/>
<br/>
<br/>
<br/>
<h3 className=' text-gray-400'>Change theme Color</h3>
<br/>

<div className='flex flex-col items-start gap-y-4'>

{/* <input style={{backgroundColor:ctheme, padding:0}}
 className=' rounded cursor-pointer border-none'
  onChange={(e)=>setCTheme(e?.target?.value)} 
  type="color" id="head" name="head"
   value={ctheme} /> */}

<HexColorPicker color={ctheme} onChange={setCTheme} />

 <h3 className='text-gray-400' >Color Code: {ctheme}</h3>
 <Button onClick={()=>setThemeColor({themeColor:ctheme})} type='primary'> Applay</Button>

</div>

      </Drawer>

    </main>
  

  )
}
