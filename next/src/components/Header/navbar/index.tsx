'use client'
import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link';
import { menuList } from '@/constatnts/global';



const Navbar : React.FC = () => {



  return (
    
    <ul className={styles.root} >
         
    {
      menuList.map(({id, name, href})=> {
        return   (
          <li key={id} className={styles.item} ><Link href={href} > {name}</Link></li>
        )
      })
    }
   
  </ul>
  )
}

export default Navbar