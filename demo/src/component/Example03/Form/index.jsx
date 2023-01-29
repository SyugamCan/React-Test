import React, { useRef } from 'react'
import './index.css'
import {nanoid} from 'nanoid'

export default function Form(props) {
  const {addNewInfo} = props
  const name_input = useRef()
  const comment_input = useRef()
  const addNew = () => {
    if(name_input.current.value.trim() === '' || comment_input.current.value.trim() === '') {
      alert('输入错误！')
    } else {
      addNewInfo({id:nanoid(), name: name_input.current.value, comment: comment_input.current.value})
    }
    name_input.current.value = ''
    comment_input.current.value = ''
  }
  return (
    <form>
      用户名：<br />
      <input type="text" ref={name_input} /><br />
      内容：<br />
      <textarea name="" id="" cols="30" rows="10" ref={comment_input}></textarea><br />
      {/* 注意button 与表单submit的冲突 ==> button尽量写成type=button的形式*/}
      <input type="button" value="发表" onClick={addNew} />
    </form>
  )
}
