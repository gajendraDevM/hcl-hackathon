import useBreadcrumbs from 'use-react-router-breadcrumbs';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdChevronRight} from 'react-icons/md'

const  Breadcrumbs = ({color}:any) => {
  const breadcrumbs = useBreadcrumbs();
console.log({color});

  return (
    <div className='w-full flex justify-start mb-4 '>
      {breadcrumbs.map(({ breadcrumb, match }, i) =>{
                

         return i < 3 ? <span key={match.pathname}
         
         className='flex items-center ' style={{color: color}}>
         <NavLink style={{color: color}} className={({ isActive })=> isActive?'text-[16px]  ':'text-[16px]  opacity-70 '} to={match.pathname}>{breadcrumb}</NavLink>
         {i < breadcrumbs.length - 1 && <MdChevronRight className='text-2xl'/>}

       </span> : null
         
         })}
    </div>
  );
}

export default Breadcrumbs