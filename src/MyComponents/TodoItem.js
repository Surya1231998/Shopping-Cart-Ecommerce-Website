import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  
  return (
    <div key = {todo.sno}>
    <h6>{todo.title}</h6>
    <p>{todo.desc}</p>
    <button className = "btn btn-danger my-3" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  )
}

export default TodoItem
