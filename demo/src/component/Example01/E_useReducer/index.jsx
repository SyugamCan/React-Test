import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error();
  }
}

const Count = ({ state, dispatch }) => {
  const Increment = () => {
    dispatch({type: 'increment'})
  }
  const Decrement = () => {
    dispatch({type: 'decrement'})
  }
  return (
    <div style={{width: '100px', height: '100px', padding: '10px', backgroundColor: 'skyblue'}}>
      <p>
        count = {state.count} <br />
        <button onClick={Increment}>+</button> <br />
        <button onClick={Decrement}>-</button> <br />
      </p>
    </div>
  )
}

const Index = () => {
  const [state, dispatch] = useReducer(reducer, {count: 1})
  return (
    <div style={{width: '300px', height: '300px', padding: '10px', backgroundColor: '#ddd'}}>
      <Count state={state} dispatch={dispatch} />
    </div>
  )
}

export default Index