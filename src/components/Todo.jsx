import { addListener } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'



function Todo() {
    const todos=useSelector(s=>s.todos)
    const dispatch=useDispatch()
    //parameter of removeTodo;
//     state: The current state of the slice, which Redux Toolkit automatically provides to the reducer.
// action: The action object containing type and payload (where payload is the data you passed in).
// When calling dispatch(removeTodo({ id: 1 })), action.payload will be { id: 1 }.
//in this case the todo.id is the action.payload

const [newText,setNewText]=useState('')
const [editableId,setEditableId]=useState(null)

  return (
    <>
      {/* <div>Todos</div>
      {todos.map((todo)=>(<li key={todo.id}>{todo.text}
        <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
        
      </li>))} */}



<div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white"
            key={todo.id}
            
          >
            <div className='text-white'>{todo.text}</div>
            <div className='flex updateAndRemove'>
              {
                editableId===todo.id?(<input type="text" className='text-black'
            
                  id={todo.id}
                  disabled={editableId!==todo.id?true:false}
    
                  value={editableId===todo.id?newText:''}
                  onChange={(e)=>{setNewText(e.target.value)
                   
                
    
                  }
    
                  }
                   />):''
              }
              
            <button  className="text-white bg-blue-800 border-0 py-1 px-4 mx-3  focus:outline-none hover:bg-blue-900 rounded text-md"
            onClick={()=>{
              if(editableId===todo.id){
               
                dispatch(updateTodo({id:todo.id,text:newText}))
                 setEditableId(null)//exit edit mode after updating

              }else{
                setNewText('')
                setEditableId(todo.id)
              }
            }}
            >
            "✏️"
            
            </button>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            </div>
          </li>
        ))}
      </ul>

    </>
  )
}

const update=()=>{

}
export default Todo
