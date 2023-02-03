import React, { useState } from 'react'
import {ethers} from 'ethers'
import './index.css'

const Header = props => {
  const {changeMyState} = props
  const [provider] = useState(new ethers.providers.Web3Provider(window.ethereum))
  const [acc, setAcc] = useState({name: ''})
  const [contractAddress] = useState('0x337610d27c682E347C9cD60BD4b3b107C9d34dDd')
  const [usdtABI] = useState(['function balanceOf(address account) external view returns (uint256)'])
  async function connectMetaMask() {
    //(1) 创建provider
    if(provider) {
      //(2) MetaMask需要请求权限才能连接钱包账户
      const account = await provider.send('eth_requestAccounts', [])
      console.log(account)
      //(3) 获取钱包签名权限（用于操作钱包）
      const signer = await provider.getSigner()
      console.log(signer)
      // account[0]是账户名（string）
      if(account[0]) {
        // balance 单位： wei
        // let balance = await provider.getBalance(acc)
        let balance = await signer.getBalance()
        // 单位： ETH
        let balance_in_ether = ethers.utils.formatEther(balance)
        let net = await provider.getNetwork()
        console.log(net);
        let netName = net.name
        const accfront = account[0].slice(0,6)
        const accbehind = account[0].slice(-4)
        const accname = `${accfront}...${accbehind}`
        setAcc({...acc,name: accname})
        console.log(acc.name);
        changeMyState(accname, netName, balance_in_ether)
      }
    }
  }
  const getUSDT = async () => {
    const theContract = new ethers.Contract(contractAddress, usdtABI, provider)
    try {
      let myUSDT = theContract.balanceOf(acc)
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
          <button onClick={getUSDT}>查看USDT余额</button>
        </li>
        <li>yyy</li>
        <li>zzz</li>
        <li>www</li>
      </ul>
    </nav>
  )
}

export default Header