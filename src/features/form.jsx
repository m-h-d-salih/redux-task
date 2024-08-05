import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submit } from './formslice'

const Form = () => {
    const [name,setname]=useState('')
    const [age,setage]=useState('')

    const dispatch=useDispatch()
  return (
    <div>
      <input type='text' placeholder='name' onChange={(e)=>setname(e.target.value)}/><br/>
      <input type='text' placeholder='age' onChange={(e)=>setage(e.target.value)}/>
      <button onClick={()=>dispatch(submit({name,age}))}>submit</button>
    </div>
  )
}

export default Form
