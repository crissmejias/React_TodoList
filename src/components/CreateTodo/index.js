import React from 'react'
import ReactDOM from 'react-dom'
import './CreateTodo.css'
const CreateTodo = ({openModal, setOpenModal}) => {

    const clickHanlder = () => {
        setOpenModal(!openModal)
    }
    return(
        <button className='todo-add' onClick={ () => {clickHanlder()}}>+</button>
    )
}
export {CreateTodo};