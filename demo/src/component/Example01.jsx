import React, { useState, useEffect, useRef } from "react";

function Example01() {
  // useState(初始状态) 返回一个array: a[0]=state a[1]=function,数组解构命名,拿出来用
  const [count, setCount] = useState(0)
  const [fruit, setFruit] = useState('banana')
  // 相当于ComponentDidMount,ComponentDidUpdate,componentWillUnmount三者集合
  useEffect(() => {
    document.title = `count = ${count}`
    /*
    let timer = setInterval(() => {
      setCount(count+1)
    },1000)
    return () => {
      clearInterval(timer)
    }
    */
  })
  function handleOrangeClick() {
    setFruit('orange')
  }
  const myRef = useRef()
  return (
    <div>
      <span>count = {count}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Fruit is {fruit}</span>
      <br />
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => {handleOrangeClick()}}>OrangeClick</button>
      <br />
      <input type="text" ref={myRef}/>
      <button onClick={() => {alert(myRef.current.value)}}>showText</button>
    </div>
  )
}
export default Example01
