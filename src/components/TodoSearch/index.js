import React from 'react'
import ReactDOM from 'react-dom'
import './TodoSearch.css'

const TodoSearch = ({setSearchValue}) => {
         const onSearchValueChange = (event) => {
            setSearchValue(event.target.value)  
        }
    return(
        <input className='searchbar' placeholder="Busca una tarea 🔍" onChange={onSearchValueChange}/>  
    )
}
export  {TodoSearch};