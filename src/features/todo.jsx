import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './todoslice'

const Todo = () => {
    const [todo,settodo]=useState([])
    const dispatch=useDispatch()
    // const {add}=useSelector(state=>state.todo);
    // console.log(add)
   
  return (
    <div>
      <h1>todo</h1>
      <input type='text' placeholder='enter items' onChange={(e)=>settodo(e.target.value)}/>
       <button onClick={()=>dispatch(add({todo}))}>add</button>
      
    </div>
  )
}

export default Todo
