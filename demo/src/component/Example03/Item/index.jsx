import React from 'react'
import './index.css'

export default function Item(props) {
  const {name, comment} = props
  return (
    <div>
      <div className='item'>
        <span>{name}说:</span>
        <button className='btn'>删除</button>
        <p>{comment}</p>
      </div>
      <br />
    </div>
  )
}
