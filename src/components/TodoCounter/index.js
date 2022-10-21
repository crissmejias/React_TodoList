import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
const TodoCounter = () => {
    const {completedTodos,totalTodos} = useContext(TodoContext)
    return(
        <h2 className='todoCounter'>Has completado {completedTodos} de {totalTodos} ToDos</h2>
    )
}
export  {TodoCounter};