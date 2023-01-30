import React, { useState } from 'react'
import Header from '../Header'
import Left from '../Left'
import Right from '../Right'
import './index.css'

export default function MyTest() {
  const [account, setAccount] = useState('xxx')
  const [network, setNetwork] = useState('yyy')
  const [money, setMoney] = useState(0)
  const changeMyState = (myAccount, myNetwork, myMoney) => {
    setAccount(myAccount)
    setNetwork(myNetwork)
    setMoney(myMoney)
  }
  return (
    <div id='container'>
      <Header changeMyState={changeMyState} />
      <Left />
      <Right account={account} network={network} money={money} />
    </div>
  )
}
