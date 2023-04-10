import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTodo({onAddTodo}) {
    const [newtodo, setNewtodo] = useState({title: " ", description: " "});
    const {title, description} = newtodo;
    // const [description, setDescritption] = useState(" ");

    const handleTitleChange = (e) => {
        setNewtodo({title: e.target.value, description});
    }
    const handleDescriptionChange = (e) => {
        setNewtodo({title, description: e.target.value})
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAddTodo(newtodo)
        setNewtodo({title: " ", description: " "});
        toast('Todo added Succesfully')
    }
    

  return (
    <div className="addtodo">
<div className="center">
  <form onSubmit={handleOnSubmit}>
    <div className="inputbox">
      <input type="text" name="title" value={title} onChange={handleTitleChange} required />
      <span>Title</span>
    </div>
    <div className="inputbox">
      <input type="text" name="description" value={description} onChange={handleDescriptionChange}  required />
      <span>Description</span>
    </div>
    <div className="inputbox">
      <input type="submit" value="Add Todo" />
    </div>
  </form>
</div>
<ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  )
}

export default AddTodo