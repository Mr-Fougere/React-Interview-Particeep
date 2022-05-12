import React from 'react'
import {Pagination} from 'antd'

export default function PaginationFooter(props) {
  function onShowSizeChange(current,pageSize) {
    props.handleChangeSize(pageSize)
  }
  function onChange(page,pageSize){
    props.handleChangePage(page) 
  }
  return (
    <Pagination size="small" total={props.size} pageSizeOptions={[4,8,10]} defaultPageSize={10} onShowSizeChange={onShowSizeChange} showSizeChanger   onChange={onChange}    defaultCurrent={1}  />
  )
}
