import React from 'react'
import styles from './header.module.scss'
import Offcanvas from './offcanvas'
import Navbar from './navbar'
import { menuList } from '@/constatnts/global'



const Header = () => {

 

  




  return (
    <div className={styles.root}>
  
      <div className={styles.navbar} >

       <div className={styles.burger}>
       {menuList && <Offcanvas menuList={menuList} closeWidth={992} />}
       </div>
      
           <div className={styles.left_menu} >{ menuList && <Navbar/>}</div>
            
      </div>
  

    </div>

  )
}

export default Header