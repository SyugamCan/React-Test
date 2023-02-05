import React from 'react'
import {ethers} from 'ethers'
import './index.css'

const Header = props => {
  const {provider, contractAddress, usdtABI, account, dispatch} = props
  const connectMetaMask = async () => {
    if(provider) {
      const account = await provider.send('eth_requestAccounts', [])
      const signer = await provider.getSigner()
      if(account[0]) {
        const addfront = account[0].slice(0,6)
        const addbehind = account[0].slice(-4)
        // address 只显示几位
        const address = `${addfront}...${addbehind}`
        const net = await provider.getNetwork()
        const network = net.name
        // 当前链上余额
        let balance = await signer.getBalance()
        balance = ethers.utils.formatEther(balance)
        dispatch({type: 'connectMetaMask', data: {account, signer, address, network, balance}})
      }
    }
  }
  const getUSDT = async () => {
    const theContract = new ethers.Contract(contractAddress, usdtABI, provider)
    try {
      let myUSDT = await theContract.balanceOf(account[0])
      myUSDT = ethers.utils.formatEther(myUSDT)
      console.log(myUSDT)
    } catch(error) {
      console.log(error);
    }
  }
  return (
    <nav>
      <ul>
        <li>
          <button onClick={connectMetaMask}>连接钱包</button>
        </li>
        <li>
          <button onClick={getUSDT}>查看USDT</button>
        </li>
        <li>yyy</li>
        <li>zzz</li>
        <li>www</li>
      </ul>
    </nav>
  )
}

export default Header