import {MdDashboard,
    MdOutlineWysiwyg, MdOutlineInventory, MdPeopleAlt,MdSwapHorizontalCircle,
    MdSettings, MdOutlinePeopleAlt, MdOutlineMessage, MdLocationPin, MdLocalOffer, MdCategory
  } from 'react-icons/md'
import { Link } from 'react-router-dom'

const navdata = [
    {
      key:'dashboard',
       icon:<MdDashboard className='menu-icon' />,
      label: <Link to='dashboard'>Dashboard</Link>,
    }, 
    {
      key:'staff',
      icon:<MdCategory className='menu-icon'/>,
      label: <Link to='staff'>staff</Link>,
    },
    
       {
      key:'shift',
      icon:<MdCategory className='menu-icon'/>,
      label: <Link to='shift'>shift</Link>,
    },
    
    {
      key:'settings',
      icon:<MdSettings className='menu-icon'/>,
      label:<Link to='settings'>Settings</Link>,
      // children:[
      //   {
      //   key:'theme',
      // label:<Link to='settings'>Theme</Link>,
      //   }
      // ]

    }
  ] as any

  export  default navdata