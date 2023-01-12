import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeAll } from '../redux/features/todoSlice'

const Input = () => {
const inputRef=useRef()
const dispatch=useDispatch()

const addTask = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) return
    dispatch(
        addTodo({
        id: Date.now(),
        title: inputRef.current.value,
        isCompleted: false,
      })
    );
    inputRef.current.value=""
  };
  return (
    <div>
       <form onSubmit={addTask}>
      <input type="text" ref={inputRef}></input>
      <button  onClick={()=>addTodo()} >Add to list</button>
      <button onClick={()=>dispatch(removeAll())}>remove all</button>
    </form>
     

    </div>
  )
}

export default Input
