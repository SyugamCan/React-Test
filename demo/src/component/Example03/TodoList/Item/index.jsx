import React, { useState } from 'react'
import './index.css'

export default function Item(props) {
  const [mouse, setMouse] = useState({isEnter: false})
  const {id, name, isDone, deleteTodo, checkTodo} = props
  const deleteThisTodo = () => {
    deleteTodo(id)
  }
  const handleChecked = event => {
    checkTodo(id, event.target.checked)
  }
  const handleMouseEnter = () => {
    // setMouse({...mouse,isEnter: true})
    setMouse({isEnter: true})
  }
  const handleMouseLeave = () => {
    // setMouse({...mouse,isEnter: false})
    setMouse({isEnter: false})
  }
  return (
    <li style={{backgroundColor: mouse.isEnter ? '#ddd' : 'white'}}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      <label>
        <input type="checkbox" checked={isDone} onChange={handleChecked} />
        <span>{name}</span>
      </label>
      <button onClick={deleteThisTodo} className="btn btn-danger">删除</button>
    </li>
  )
}
