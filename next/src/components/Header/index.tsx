import React from 'react'
import styles from './header.module.scss'
import Offcanvas from './offcanvas'
import Link from 'next/link'



const Header:React.FC = () => {

const menulist = [{id:1, name:'Главная', href: '/' }, {id:2, name:'Каталог', href: '/catalog' }, {id:3, name:'Как купить', href: '' },
 {id:4, name:'Гарантии', href: '' } , {id:5, name:'Частые вопросы', href: '/' }]




  return (
    <div className={styles.root}>
  
    <div className={styles.navbar} >

     <div className={styles.burger}>
     <Offcanvas menulist={menulist} closeWidth={992} />
     </div>
    
            <ul className={styles.left_menu} >
         
              {
                menulist.map(({id, name, href})=> {
                  return  <li key={id} className={styles.left_menu_item} ><Link href={href}>{name}</Link></li>
                })
              }
             
            </ul>

            <ul className={styles.right_menu} >
              <li className={styles.right_menu_item} > Валюта: $ </li>
            </ul>
    </div>

    </div>

  )
}

export default Header