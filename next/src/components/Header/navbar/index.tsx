'use client'
import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link';
import { MENU_LIST } from '@/constatnts/global';
import { usePathname } from 'next/navigation'





const Navbar:React.FC = () => {
  
    
  const pathName = usePathname();


  


  return (
    
    <ul className={styles.root} >
         
    {
      MENU_LIST.map(({id, name, href})=> {
        return   (
          <Link href={href} key={id} className={[styles.item, pathName === href ? styles.item__active :''].filter(Boolean).join(' ')} ><li  > {name}</li></Link>
        )
      })
    }
   
  </ul>
  )
}

export default Navbar