import React from 'react'
import ReactDOM from 'react-dom'
import './TodoCounter.css'

const TodoCounter = ({completedTodos,totalTodos}) => {
    return(
        <h2 className='todoCounter'>Has completado {completedTodos} de {totalTodos} ToDos</h2>
    )
}
export  {TodoCounter};