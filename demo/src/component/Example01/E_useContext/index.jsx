import React, { useContext } from 'react'
import { theme ,ThemeContext } from './context'

const Child = () => {
  // 这个childTheme来自 ThemeContext.Provider value={theme}
  let childTheme = useContext(ThemeContext)
  return (
    <div style={{width: '200px', height: '200px', padding: '10px', backgroundColor: childTheme.dark.background}}>
    </div>
  )
}

const Parent = () => {
  return (
    <div style={{width: '300px', height: '300px', padding: '10px', backgroundColor: '#ddd'}}>
      <Child />
    </div>
  )
}

const Index = () => {
  return (
    <div style={{width: '500px', height: '500px', padding: '10px', backgroundColor: 'skyblue'}}>
      <ThemeContext.Provider value={theme}>
        <Parent />
      </ThemeContext.Provider>
    </div>
  )
}

export default Index