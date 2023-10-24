'use client'
import React from 'react'
import styles from './offcanvas.module.scss'
import Link from 'next/link';




interface Props {
 
  menulist?: {
    id: number;
    name: string,
    href: string
  }[],
  closeWidth?: number;
}


const Offcanvas: React.FC<Props> = ({ menulist, closeWidth }) => {
  const [show, setShow] = React.useState<boolean>(false);
 



  if(closeWidth) {
    const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);

    
    React.useEffect(()=> {

      const handleResize = ()=>  setWindowWidth(window.innerWidth);
      
        window.addEventListener('resize', handleResize);
      
        return () => window.removeEventListener('resize', handleResize);
      
      },[])
      
      
      
      React.useEffect(()=> {
        if (windowWidth > closeWidth) {
          setShow(false)
        }
      }, [windowWidth])
  }







  return (


    <div className={styles.root}  >
      <div onClick={() => setShow(!show)} className={styles.show_btn} >
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>

      {show && <div onClick={() => setShow(!show)} className={styles.fade} ></div>}

      <div className={!show ?  styles.window :  styles.window + ' ' + styles.show}>
      <div onClick={() => setShow(false)} className={styles.close_btn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        <div className={styles.inner} >
          <ul className={styles.menu} >
            {
              menulist?.map(({id, name, href}) => {
                return <li key={id} className={styles.menuItem} ><Link href={href} >{name}</Link></li>
              })
            }
          </ul>
         
        </div>
       
      </div>

     

    </div>
  )
}



export default Offcanvas