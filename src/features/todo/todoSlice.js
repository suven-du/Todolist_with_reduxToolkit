import {createSlice,nanoid} from '@reduxjs/toolkit'
//here nanoid is used for generating id

const initialState={
    todos:[{id:1,text:"Hello World"}]
}
//todoSlice is generally a todofeatuer
export const todoSlice=createSlice({

    //the name is the name of slice
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
           state.todos= state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
          state.todos=  state.todos.map((todo)=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo) 
          
        }
    } 
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer
// 
