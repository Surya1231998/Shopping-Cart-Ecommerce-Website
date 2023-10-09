import logo from './logo.svg';
import './App.css';

import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import { useEffect, useState } from "react";
import AddTodo from './MyComponents/AddTodo';
import { ShoppingList } from './MyComponents/ShoppingList';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartItem from './MyComponents/CartItem';



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {
    //console.log("tile is  ",title, "description is ",desc);
    let tempsno;
    if (todos.length != 0)
      tempsno = todos[todos.length - 1].sno + 1;
    else tempsno = 0;
    let mytodo = {
      sno: tempsno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo);






  }

  const onDelete = (todo) => {
    console.log("this todo is delete ", todo);



    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)); }, [todos])

  return (
    <>
      <BrowserRouter>
        <Header title="MyTodoList"></Header>

        <Routes>
          <Route exact path="/"   element={
            <>
              <AddTodo addTodo={addTodo}></AddTodo>
             <Todos todos={todos} onDelete={onDelete}></Todos>
             </> }
            >

          </Route>
          <Route exact path="/shopping" element={<ShoppingList></ShoppingList>} >

          </Route>

          
         


        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>

  );
}

export default App;
