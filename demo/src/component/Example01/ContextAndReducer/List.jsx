import React, { useContext } from 'react'
import { InfoContext } from './context'
import { nanoid } from 'nanoid'


const Item = (props) => {
  const {id, name, sex, age} = props
  const dispatch = useContext(InfoContext)
  const handlePush = () => {
    dispatch({type: 'push', data:{id: nanoid(), name: 'qqq', sex: 'female', age: 70}})
  }
  const handlePop = () => {
    dispatch({type: 'pop', data: id})
  }
  return (
    <li>
      id = {id}&nbsp;&nbsp; name = {name} &nbsp;,&nbsp; sex = {sex}&nbsp;,&nbsp; age = {age}
      &nbsp;,&nbsp;<button onClick={handlePush}>Pushqqq</button>
      &nbsp;,&nbsp;<button onClick={handlePop}>Popthis</button>
    </li>
  )
}

const List = (props) => {
  const {state} = props
  return (
    <ul>
      {
        state.map(s => <Item key={s.id} {...s} />)
      }
    </ul>
  )
}

export default List