import { createContext } from 'react'

export const info = [
  {id: '001', name: 'aaa', sex: 'male', age: 18},
  {id: '002', name: 'bbb', sex: 'female', age: 23},
  {id: '003', name: 'ccc', sex: 'male', age: 12}
]

export const InfoContext = createContext(info)