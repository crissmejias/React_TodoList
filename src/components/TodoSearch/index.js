import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext'
import { useContext } from 'react'
const TodoSearch = () => {
    const {setSearchValue} = useContext(TodoContext)
         const onSearchValueChange = (event) => {
            setSearchValue(event.target.value)  
        }
    return(
        <input className='searchbar' placeholder="Busca una tarea 🔍" onChange={onSearchValueChange}/>  
    )
}
export  {TodoSearch};