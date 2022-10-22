import React from 'react'
import ReactDOM from 'react-dom'
import './TodoList.css'
const TodoList = (props) => {
  const renderFunc = props.render || props.children
    return(
        <section className='todoContainer'>
          {props.error && props.onError()}
          {props.loading && props.onLoading()}
          {props.searchValue
          ? props.onEmptySearch()
          : (!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
       {props.searchedTodos.map(renderFunc)}
        </section>
    )
}
export {TodoList};