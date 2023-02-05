import React from 'react'
import './index.css'

const Right = props => {
  const {state} = props
  return (
    <div id='right'>
      {
        state['address'] ?
        (<>
          <h2>账户：{state.address}</h2>
          <h2>网络：{state.network}</h2>
          <h2>余额：{state.balance} </h2>
        </>) : '未连接'
      }
    </div>
  )
}

export default Right