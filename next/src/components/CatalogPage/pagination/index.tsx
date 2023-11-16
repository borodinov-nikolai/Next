'use client'
import React from 'react'
import { Pagination } from 'antd';
import styles from './pagination.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks';
import { setPage } from '@/redux_toolkit/slices/paginationSlice';


interface Props {
  defaultValue: {
    page: string,
  } | undefined
  value: {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
  } | undefined
 
}

const Paginations: React.FC<Props> = ({value, defaultValue}) => {
  const {page} = useAppSelector((state)=> state.pagination)
  const dispatch = useAppDispatch()


  

  return (
    <div className={styles.root} > 
      <Pagination hideOnSinglePage={true} onChange={(e)=>{dispatch(setPage(e))}} showSizeChanger={false}  current={Number(defaultValue?.page) || 1 }  pageSize={value?.pageSize || 1} total={value?.total || 1} />
    </div>
  )
}

export default Paginations;