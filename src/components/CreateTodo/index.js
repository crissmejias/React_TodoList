import React from 'react'
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