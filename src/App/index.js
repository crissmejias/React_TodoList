import React from 'react'
import {TodoForm} from "../components/TodoForm"
import {TodoCounter} from "../components/TodoCounter";
import {TodoHeader} from "../components/TodoHeader"
import {CreateTodo} from "../components/CreateTodo";
import {TodoSearch} from "../components/TodoSearch";
import {TodoList} from "../components/TodoList";
import {TodoModal} from "../components/TodoModal"
import { TodoItem } from "../components/TodoItem";
import { useTodos } from "../Hooks/useTodos.js";
import './App.css'
function App() {
  const {error, loading, setSearchValue, searchedTodos,totalTodos,completeTodos, completedTodos, deleteTodos, openModal, setOpenModal, addTodos} = useTodos()
  return (
        <>
        <TodoHeader>
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
          <TodoSearch setSearchValue={setSearchValue} />
        </TodoHeader>
        <TodoList>
            {error && <p>{error}</p>}
            {loading && <p>Estamos cargando el contenido</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer todo!!</p>}
            {searchedTodos.map( todo =>  <TodoItem text={todo.text} completed={todo.completed} key={todo.id} onComplete={()=>{completeTodos(todo.id)}} onDelete={()=>{deleteTodos(todo.id)}}/>)}
        </TodoList>       
        {openModal && <TodoModal ><TodoForm setOpenModal={setOpenModal} addTodos={addTodos}/></TodoModal>}
        <CreateTodo
        openModal={openModal}
        setOpenModal={setOpenModal}/>
  </>
   )
}


export default App;
