import React from 'react'
import ReactDOM from 'react-dom'
import './TodoList.css'
const TodoList = (props) => {
    return(
        <section className='todoContainer'>
          {props.children}
        </section>
    )
}
export {TodoList};