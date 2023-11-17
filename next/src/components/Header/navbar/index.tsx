'use client'
import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link';

interface Props {
 
    menuList: {
      id: number;
      name: string,
      href: string
    }[]
  }

const Navbar : React.FC<Props> = ({menuList}) => {



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