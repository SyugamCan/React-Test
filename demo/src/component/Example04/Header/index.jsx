import React from 'react'
import {ethers} from 'ethers'
import './index.css'

export default function Header(props) {
  const {changeMyState} = props
  async function connect() {
    // 创建provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // 连接钱包
    const account = await provider.send('eth_requestAccounts', [])
    console.log(account)
    // account[0]是账户名（string）
    if(account[0]) {
      let acc = account[0]
      // balance 单位： wei
      let balance = await provider.getBalance(acc)
      // 单位： ETH
      let balance_in_ether = ethers.utils.formatEther(balance)
      let net = await provider.getNetwork()
      console.log(net);
      let netName = net.name
      const accfront = acc.slice(0,6)
      const accbehind = acc.slice(-4)
      const accname = `${accfront}...${accbehind}`
      changeMyState(accname, netName, balance_in_ether)
    }
  }
  return (
    <nav>
      <ul>
        <li>xxx</li>
        <li>yyy</li>
        <li>zzz</li>
        <li>www</li>
        <li>
          <button onClick={connect}>连接</button>
        </li>
      </ul>
    </nav>
  )
}
