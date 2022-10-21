import React from 'react'
import './TodoList.css'
const TodoList = (props) => {
    return(
        <section className='todoContainer'>
          {props.children}
        </section>
    )
}
export {TodoList};