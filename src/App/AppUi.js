import React from 'react'
import {TodoCounter} from "../components/TodoCounter";
import {CreateTodo} from "../components/CreateTodo";
import {TodoSearch} from "../components/TodoSearch";
import {TodoList} from "../components/TodoList";
import {TodoModal} from "../components/TodoModal"
import { TodoItem } from "../components/TodoItem";
import { TodoContext } from "../components/TodoContext/index.js";
import { useContext } from "react";

import './App.css'
const AppUi = () => {
  const {error, loading, searchedTodos, completeTodos, deleteTodos, openModal, setOpenModal} = useContext(TodoContext)

    return(
        <>
        <div className='todo-header'>
        <TodoCounter />
        <TodoSearch />
        </div>
        <TodoList>
            {error && <p>{error}</p>}
            {loading && <p>Estamos cargando el contenido</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer todo!!</p>}
            {searchedTodos.map( todo =>  <TodoItem text={todo.text} completed={todo.completed} key={todo.id} onComplete={()=>{completeTodos(todo.id)}} onDelete={()=>{deleteTodos(todo.id)}}/>)}
        </TodoList>       
        {openModal && <TodoModal />}
        <CreateTodo
        openModal={openModal}
        setOpenModal={setOpenModal}/>
      </>
    )

}
export {AppUi}