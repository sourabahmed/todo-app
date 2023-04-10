import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

function Todo(props) {
    const {title, description} = props.todo;
    const {id} = props;
    const {handleDeleteTodo} = props;
    const handleClick = () => {
         if (window.confirm("Do you want to delete The Todo") == true) {
          handleDeleteTodo(id)
        } else {
      }
    }
  return (
    <div className="showtodo">
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div>
            <FaTrashAlt onClick={handleClick} style={{cursor: "pointer", color: "yellow", fontSize: "30px"}}/>
        </div>
    </div>
  )
}

export default Todo