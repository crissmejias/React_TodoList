import React from 'react'
import { TodoError } from '../components/TodoError';
import { TodoLoading } from '../components/TodoLoading';
import { EmptyTodos } from '../components/EmptyTodos';
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
  const {error, loading, setSearchValue, searchedTodos,totalTodos,completeTodos, completedTodos, deleteTodos, openModal, setOpenModal, addTodos, searchValue} = useTodos()
  return (
        <>
        <TodoHeader>
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
          <TodoSearch setSearchValue={setSearchValue} />
        </TodoHeader>
        <TodoList 
        searchedTodos={searchedTodos}
        error={error}
        searchValue={searchValue}
        onError={()=><TodoError error={error}/>} 
        loading={loading}
        onLoading={()=><TodoLoading/>} 
        onEmptyTodos={()=><EmptyTodos/>}
        onEmptySearch={()=> <p>No se encontraron resultados para {searchValue}</p>} 
        render={todo =>
        <TodoItem text={todo.text} completed={todo.completed} key={todo.id} onComplete={()=>{completeTodos(todo.id)}} onDelete={()=>{deleteTodos(todo.id)}}/>}
        />
        
             
        {openModal && 
        <TodoModal >
          <TodoForm setOpenModal={setOpenModal} addTodos={addTodos}/>
        </TodoModal>}
        <CreateTodo
        openModal={openModal}
        setOpenModal={setOpenModal}/>
  </>
   )
}


export default App;
