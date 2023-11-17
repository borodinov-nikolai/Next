'use client'
import React from 'react'
import styles from './platforms.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks';
import { setPlatform } from '@/redux_toolkit/slices/filtersSlice';
import { setPage } from '@/redux_toolkit/slices/paginationSlice';
import { PlatformData } from '@/interfaces/Platforms';
import Image from 'next/image';


interface Props {
  data: PlatformData[],
  defaultValue: string | undefined
}


const Platforms : React.FC<Props> = ({defaultValue, data}) => {
  const { platform } = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch()
 const cmsURL = process.env.NEXT_PUBLIC_CMS_IMG_URL

  if(!defaultValue) {
    defaultValue = 'Все'
  }

  const change = (name:string)=> {
    dispatch(setPlatform(name));
    dispatch(setPage(1))
  }
 


  return (
       
            <ul className={styles.root} >

              {
                data?.map(({id, attributes})=> {
                  const iconURL = attributes.icon?.data?.attributes?.url

                  return ( <li  key={id} className={styles.item} style={(platform ? platform : defaultValue) === attributes.name ? { background: 'rgb(255, 255, 255)', color: 'black', borderRadius: '10px' } : undefined}
                   onClick={ ()=>change(attributes.name)}>
                     <div className={styles.icon}>{ iconURL && <Image src={cmsURL + iconURL} width={30} height={30} alt={attributes.name}/>}</div> 
                     <div className={styles.name} >{attributes.name}</div>
                     </li>)
                
                })
              }
         
            </ul>
            
   
  )
}

export default Platforms