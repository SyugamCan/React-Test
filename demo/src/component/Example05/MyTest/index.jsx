import React, { useReducer } from 'react'
import Header from '../Header'
import Left from '../Left'
import Right from '../Right'
import {ethers} from 'ethers'
import './index.css'

const initialState = { //address,network,balance等等信息(未连接钱包时没有信息)
  provider: new ethers.providers.Web3Provider(window.ethereum),
  contractAddress: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
  usdtABI: ['function balanceOf(address account) external view returns (uint256)']
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'connectMetaMask':
      return {
        ...state,
        ...action.data
      }
    default:
      throw new Error()
  }
}

const MyTest = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div id='container'>
      <Header {...state} dispatch={dispatch} />
      <Left />
      <Right state={state} />
    </div>
  )
}

export default MyTest