import React from 'react'
import {ethers} from 'ethers'
import './index.css'

const Header = props => {
  const {
    provider, signer, usdtContractAddress, usdtABI, account,
    testContractAddress, testABI, refAddress,
    dispatch
  } = props
  // （1）连接钱包并读取链上的币的余额
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
  // （2）获取指定的币的余额
  const getUSDT = async () => {
    const theContract = new ethers.Contract(usdtContractAddress, usdtABI, provider)
    try {
      let myUSDT = await theContract.balanceOf(account[0])
      myUSDT = ethers.utils.formatEther(myUSDT)
      console.log(myUSDT)
    } catch(error) {
      console.log(error);
    }
  }
  // （3） 授权 USDT
  const approveUSDT = async () => {
    const testContract = new ethers.Contract(usdtContractAddress, usdtABI, provider)
    try {
      const isSucceed = await testContract.connect(signer).approve(testContractAddress, '100000000000000000000')
      console.log('授权成功', isSucceed);
    } catch(error) {
      console.log('USDT授权失败', error);
    }
  }
  // （4）查询授权
  const allowanceUSDT = async () => {
    const testContract = new ethers.Contract(usdtContractAddress, usdtABI, provider)
    try {
      let myShouQuan = await testContract.connect(signer).approve(account[0], testContractAddress)
      console.log('查询成功', myShouQuan);
    } catch(error) {
      console.log('查询失败', error);
    }
  }
  // （5）与合约进行交互 (存款，取款 ...)
  const deposit = async () => {
    const testContract = new ethers.Contract(testContractAddress, testABI, provider)
    try {
      let s = await testContract.connect(signer).deposit('10000000000000000000', refAddress)
      console.log('成功');
    } catch(error) {
      console.log('失败', error);
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
        <li>
          <button onClick={approveUSDT}>给合约授权USDT(100个)</button>
        </li>
        <li>
        <button onClick={allowanceUSDT}>查询授权</button>
        </li>
        <li>
          <button onClick={deposit}>存款(10usdt)</button>
        </li>
      </ul>
    </nav>
  )
}

export default Header