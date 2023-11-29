import React from 'react'
import styles from './footer.module.scss'
import { MENU_LIST } from '@/constatnts/global'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className={styles.root} >
      <div  className='container' >
      
          <ul className={styles.navigation_list}>
            {
              MENU_LIST.map(item => {
                  return (
                    <li className={styles.navigation_item} >
                        <Link key={item.id} href={item.href} >{item.name}</Link>
                    </li>
                  )
              })
            }
          </ul>

          <div className={styles.support} >Поддержка: support@petproekt.ru</div>
          <div className={styles.info} > Все упомянутые товарные знаки, названия игр и компаний, логотипы, материалы являются собственностью
          соответсвующих владельцев  </div>
          <div className={styles.copyright}> 2023 © - petproekt.ru </div>
  
      </div>

    </div>
  )
}

export default Footer