import React, { useState } from 'react'
import Form from '../Example03/Form'
import List from '../List'
import './index.css'
import {nanoid} from 'nanoid'

export default function Example02() {
  const [infoList, setInfoList] = useState([{id:nanoid(), name: 'b', comment: 'bbbbb'},
                                            {id:nanoid(), name: 'a', comment: 'aaaaa'}])
  const addNewInfo = info => {
    setInfoList([info,...infoList])
  }
  return (
    <div className='container'>
      <h2>请发表留言</h2> 
      <Form addNewInfo={addNewInfo} />
      <List infoList={infoList} />
    </div>
  )
}
