import React from 'react'
import Todo from './Todo';

function ShowTodo(props) {
    const todos = props.todos;
    const handleDeleteTodo = props.handleDeleteTodo;
    // console.log(todos)
  return (
    <div>
        {todos.map((todo, index) => (
          // console.log(todo.id)
         <Todo todo={todo.todo} key={index} id={todo.id} handleDeleteTodo={handleDeleteTodo}/>
        ))}
    </div>
  )
}

export default ShowTodo