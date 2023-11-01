'use client'
import React from 'react'
import { Pagination } from 'antd';
import styles from './pagination.module.scss'

const Paginations: React.FC = () => {
  return (
    <div className={styles.root} > 
      <Pagination onChange={(e)=> console.log(e)} showSizeChanger={false} defaultCurrent={1}  pageSize={20} total={400} />
    </div>
  )
}

export default Paginations;