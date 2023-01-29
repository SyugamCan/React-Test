import React from 'react'
import './index.css'
import {nanoid} from 'nanoid'

export default function Header(props) {
  const {addTodo} = props
  const addNew = event => {
    // console.log(event);
    if(event.keyCode === 13) {
      if(event.target.value.trim() !== '') {
        addTodo({id: nanoid(), name: event.target.value, isDone: false})
      }
      event.target.value = ''
    }
  }
  return (
    <div className="todo-header">
      <input type="text" onKeyUp={addNew} placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
  )
}
