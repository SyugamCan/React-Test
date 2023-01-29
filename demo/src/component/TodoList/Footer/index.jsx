import React from 'react'
import './index.css'

export default function Footer(props) {
  const {todos, deleteAllDoneTodos, checkAllTodos} = props
  const doneCount = todos.filter(todo => todo.isDone === true).length
  const checkAll = event => {
    checkAllTodos(event.target.checked)
  }
  const deleteDone = () => {
    deleteAllDoneTodos()
  }
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" checked={doneCount === todos.length && todos.length !== 0} onChange={checkAll} />
      </label>
      <span>
        <span>已完成{doneCount}</span> / 全部 {todos.length}
      </span>
      <button onClick={deleteDone} className="btn btn-danger">清除已完成任务</button>
    </div>
  )
}
