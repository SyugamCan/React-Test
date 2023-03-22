import React from 'react'
import './index.css'

const Right = props => {
  const {state} = props
  return (
    <div id='right'>
      {
        state['address'] ?
        (<>
          <h2>账户：{state.address ? state.address : 'xxx'}</h2>
          <h2>网络：{state.netId ? state.netId : 'xxx'}</h2>
          <h2>余额: {state.balance ? state.balance : 'xxx'}</h2>
        </>) : '未连接'
      }
    </div>
  )
}

export default Right