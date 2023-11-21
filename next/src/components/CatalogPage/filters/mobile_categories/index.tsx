'use client'
import React, { useEffect, useState } from 'react'
import styles from './mobile_categories.module.scss'
import Mobile_platforms from './mobile_platforms'
import Mobile_genres from './mobile_genres'
import { PlatformData } from '@/interfaces/Platforms'
import { GenreData } from '@/interfaces/Genres'
import { DefaultValues } from '@/interfaces/App'


interface Props {
    platforms?: PlatformData[],
    genres?: GenreData[],
    defaultValues?: DefaultValues
}


const Mobile_category: React.FC<Props> = ({platforms, genres, defaultValues}) => {
    const [showPlatforms, setShowPlatforms] = useState<boolean>(false)
    const [showGenres, setShowGenres] = useState<boolean>(false)



    const handleShowPlatforms = ()=> {
        setShowPlatforms(!showPlatforms);
        setShowGenres(false)
    }

    const handleShowGenres = ()=> {
        setShowGenres(!showGenres);
        setShowPlatforms(false)
    }


  return (
    <div className={styles.root} > 
        <div className={styles.mobile_platforms}>
    {platforms &&  <Mobile_platforms showPlatforms = {showPlatforms} handleShowPlatforms = { handleShowPlatforms} 
     data={platforms} defaultValue={defaultValues?.filters?.platform?.name} />}

   </div>
   <div className={styles.mobile_genres}>
   {genres && <Mobile_genres showGenres = {showGenres}  handleShowGenres = {handleShowGenres}  data={genres} defaultValue={defaultValues?.filters?.genres?.name} /> }

   </div>
   </div>
  )
}

export default Mobile_category