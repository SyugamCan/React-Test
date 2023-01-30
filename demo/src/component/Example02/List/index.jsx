import React, { useEffect } from 'react'
import Item from '../Item'
import './index.css'

export default function List(props) {
  const {infoList} = props
  useEffect(() => {
    console.log('List接收的infoList变化')
  }, [infoList])
  return (
    <div className='list'>
      <h3>内容展示：</h3>
      {
        infoList.map(info => <Item key={info.id} {...info}/>)
      }
    </div>
  )
}
