import React from 'react'
import styles from './platforms.module.scss'
import { getPlatforms } from '@/http/serverApi'
import ChangePlatform from './changePlatform';


const Platforms: React.FC = async () => {




  const platforms = await getPlatforms();

  console.log(platforms)

  return (
    <div className={styles.root}>
       
            <ul className={styles.list} >

              {
                platforms?.map((platform:{id:number, attributes: {name:string}})=> {
                  return (<ChangePlatform key={platform.id} >
                  {platform.attributes.name}
                    </ChangePlatform>)
                
                })
              }
         
            </ul>
            
   
    </div>
  )
}

export default Platforms