
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddTodo from './components/AddTodo/AddTodo';
import ShowTodo from './components/ShowTodo/ShowTodo';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

function App() {
  const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
      setTodos((prevTodos) => {
        return [...prevTodos, {id: uuidv4(), todo}]
      })
      // console.log(todos)
      // setTodos(todo)
    }
    const handleDeleteTodo = (id) => {
      setTodos((prevTodos) => {
        const filterTodos = prevTodos.filter((todo) => todo.id !== id);
        return filterTodos;
      })
      toast(" Todo deleted succesfully")
      // setTodos((prevTodos) => {
      // const filterTodos = prevTodos.filter((todo) => todo.id !== id);
      // });
      // return filterTodos;
    }
  return (
    <div className="App">
      <Header />
      <AddTodo onAddTodo={handleAddTodo} />
      <ShowTodo todos={todos} handleDeleteTodo={handleDeleteTodo}/>
      <Footer />
    </div>
  );
}

export default App;
