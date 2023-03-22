import React from 'react'
import './index.css'

const Header = props => {
  const {provider, web3,
    usdtContractAddress, usdtAbi,
    dispatch, testAddr,
    account
  } = props

  const connectMetaMask = async () => {
    if(provider) {
      try {
        const account = await web3.eth.requestAccounts();
        if(account[0]) {
          const addfront = account[0].slice(0,6);
          const addbehind = account[0].slice(-4);
          const address = `${addfront}...${addbehind}`;
          const netId = await web3.eth.getChainId();
          const balance = await web3.eth.getBalance(account[0]);
          dispatch({type: 'connectMetaMask', data: {account, address, netId, balance}});
        }
      } catch(error) {
        console.log(error);
      }
    }
  }

  const getUSDT = async () => {
    const usdtContract = new web3.eth.Contract(usdtAbi, usdtContractAddress);
    try {
      let usdt = await usdtContract.methods.balanceOf(account[0]).call();
      console.log('usdt = ' + usdt);
    } catch(error) {
      console.log(error);
    }
  }

  const approveUSDT = async () => {
    const usdtContract = new web3.eth.Contract(usdtAbi, usdtContractAddress);
    try {
      let isOk = await usdtContract.methods.approve(testAddr, '100000000000000000000').send({
        from: account[0]
      });
      console.log('授权成功', isOk);
    } catch(error) {
      console.log('授权失败', error);
    }
  }

  const allowanceUSDT = async () => {
    const usdtContract = new web3.eth.Contract(usdtAbi, usdtContractAddress);
    try {
      let myShouQuan = await usdtContract.methods.allowance(account[0], testAddr).call();
      console.log('查询成功,授权usdt数目: ', myShouQuan);
    } catch(error) {
      console.log('查询失败', error);
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
          <button onClick={approveUSDT}>我给testAddr授权USDT(100个)</button>
        </li>
        <li>
        <button onClick={allowanceUSDT}>查询授权</button>
        </li>
      </ul>
    </nav>
  )
}

export default Header