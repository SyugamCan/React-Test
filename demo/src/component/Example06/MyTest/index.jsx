import React, { useReducer } from 'react'
import Header from '../Header'
import Left from '../Left'
import Right from '../Right'
import './index.css'
import usdtAbi from "../abi.json"
import Web3 from 'web3'

const initialState = { //address,network,balance等等信息(未连接钱包时没有信息)
  provider: window.ethereum,
  web3: new Web3(window.ethereum),
  usdtAbi,
  usdtContractAddress: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
  testAddr: '0x8EBD24e317507968349bb8df0d162B97e3011445',
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