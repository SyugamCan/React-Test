import React, { useReducer } from 'react'
import { info, InfoContext } from './context'
import List from './List'

const reducer = (state, action) => {
  switch(action.type) {
    case 'push':
      return [...state, action.data]
    case 'pop':
      return state.filter(i => i.id !== action.data)
    default:
      throw new Error()
  }
}

const Index = () => {
  const [state, dispatch] = useReducer(reducer, info)
  return (
    <InfoContext.Provider value={dispatch}>
      <List state={state} />
    </InfoContext.Provider>
  )
}

export default Index