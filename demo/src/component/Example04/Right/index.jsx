import React from 'react'
import './index.css'

export default function Right(props) {
  const {account, network, money} = props
  
  return (
    <div id='right'>
      <h2>账户：{account}</h2>
      <h2>网络：{network}</h2>
      <h2>余额：{money} </h2>
    </div>
  )
}
