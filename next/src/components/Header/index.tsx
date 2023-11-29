import React from 'react'
import styles from './header.module.scss'
import Offcanvas from './offcanvas'
import Navbar from './navbar'
import { MENU_LIST } from '@/constatnts/global'



const Header = () => {

 

  




  return (
    <div className={styles.root}>
  
      <div className={styles.navbar} >

       <div className={styles.burger}>
       {MENU_LIST && <Offcanvas menuList={MENU_LIST} closeWidth={992} />}
       </div>
      
           <div className={styles.left_menu} >{ MENU_LIST && <Navbar/>}</div>
            
      </div>
  

    </div>

  )
}

export default Header