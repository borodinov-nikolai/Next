import React from 'react'
import styles from './platforms.module.scss'
import { getPlatforms } from '@/http/cmsAPI'
import ChangePlatform from './changePlatform';


const Platforms = async ({defaultValue}:{defaultValue:string|undefined}) => {




  const platforms = await getPlatforms();



  return (
    <div className={styles.root}>
       
            <ul className={styles.list} >

              {
                platforms?.map((platform:{id:number, attributes: {name:string}})=> {
                  return (<ChangePlatform name={platform?.attributes?.name} defaultValue={defaultValue} key={platform?.id} >
                  {platform?.attributes?.name}
                    </ChangePlatform>)
                
                })
              }
         
            </ul>
            
   
    </div>
  )
}

export default Platforms