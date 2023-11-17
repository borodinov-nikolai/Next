import React from 'react'
import styles from './header.module.scss'
import Offcanvas from './offcanvas'
import Navbar from './navbar'



const Header = () => {

 

const menuList = [{id:1, name:'Главная', href: '/' }, {id:2, name:'Каталог', href: '/catalog' }, {id:3, name:'Как купить', href: '/howbuy' },
 {id:4, name:'Гарантии', href: '/garanty' } , {id:5, name:'Частые вопросы', href: '/questions' }]




  return (
    <div className={styles.root}>
  
    <div className={styles.navbar} >

     <div className={styles.burger}>
     {menuList && <Offcanvas menuList={menuList} closeWidth={992} />}
     </div>
     
         <div className={styles.left_menu} >{ menuList && <Navbar menuList={menuList} />}</div>

            <ul className={styles.right_menu} >
              <li className={styles.right_menu_item} > Валюта: $ </li>
            </ul>
    </div>

    </div>

  )
}

export default Header