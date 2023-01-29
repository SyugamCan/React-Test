import React,{ useState } from 'react'
import Header from '../Header'
import List from '../List'
import Footer from '../Footer'
import './index.css'

export default function MyTodo() {
  const [todos, setTodos] = useState([{id: '001', name: '吃饭', isDone: true},
                                      {id: '002', name: '睡觉', isDone: false},
                                      {id: '003', name: '打豆豆', isDone: true},
                                      {id: '004', name: '敲代码', isDone: false}])
  // 添加
  const addTodo = todo => {
    setTodos([todo, ...todos])
  }
  // 删除
  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos([...newTodos])
  }
  // 删除已完成
  const deleteAllDoneTodos = () => {
    const newTodos = todos.filter(todo => todo.isDone === false)
    setTodos([...newTodos])
  }
  // 勾选 / 取消勾选
  const checkTodo = (id, flag) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {...todo, isDone: flag}
      } else {
        return todo
      }
    })
    setTodos([...newTodos])
  }
  // 全选 / 全不选
  const checkAllTodos = flag => {
    const newTodos = todos.map(todo => {
      if(todo.isDone !== flag) {
        return {...todo, isDone: flag}
      } else {
        return todo
      }
    })
    setTodos([...newTodos])
  }
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={addTodo} />
        <List todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
        <Footer todos={todos} deleteAllDoneTodos={deleteAllDoneTodos} checkAllTodos={checkAllTodos} />
      </div>
    </div>
  )
}
