import React from 'react'
import Item from '../Item'
import './index.css'

export default function List(props) {
  const {todos, deleteTodo, checkTodo} = props
  return (
    <ul className="todo-main">
      {
        todos.map(todo => <Item key={todo.id} {...todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />)
      }
    </ul>
  )
}
