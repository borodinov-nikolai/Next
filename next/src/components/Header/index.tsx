import React from 'react'
import styles from './header.module.scss'
import Offcanvas from './offcanvas'
import Navbar from './navbar'
import { MENU_LIST } from '@/constatnts/global'
import Image from 'next/image'
import logo from '../../public/icons/logo.png';
import Link from 'next/link'



const Header = () => {




  return (




    <div className={styles.root}>

      <div className={styles.navbar} >


        <div className={styles.burger}>
          {MENU_LIST && <Offcanvas menuList={MENU_LIST} closeWidth={992} />}
        </div>


      
          <Link className={styles.logo} href='/' >
            <Image className={styles.logo_image} src={logo} height={50} width={50} alt='logo' />
            <p className={styles.logo_text} >petproekt.store</p>
          </Link>
 

        <div className={styles.menu} >{MENU_LIST && <Navbar />}</div>



      </div>


    </div>

  )
}

export default Header