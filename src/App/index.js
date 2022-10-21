import React from 'react'
import {AppUi} from './AppUi'
import './App.css'
import {TodoProvider} from '../components/TodoContext'
// const defaultTodos = [{text:'Cortar cebolla', completed:false},{text:'Tomar curso de react', completed:true}]

function App() {
  return (
  <TodoProvider>
    <AppUi />
  </TodoProvider>
   )
}

export default App;
