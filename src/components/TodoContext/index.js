import { createContext, useState } from 'react'
import { useLocalStorage } from '../../Hooks/UseLocalStorage';
const TodoContext = createContext();
const TodoProvider = (props) => {
  const [openModal, setOpenModal] = useState(false);

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1',[])
    //TodosCounter
    
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length
   //SearchBar
   const [searchValue, setSearchValue] = useState('');
   let searchedTodos = [];
   if(!searchValue.length >= 1){
     searchedTodos = todos  
   } else{
     const filteredTodos = todos.filter(todo => todo.text.toLowerCase().startsWith(searchValue.toLowerCase()))
     searchedTodos = filteredTodos;
   }
   //Save Todos
  
  // TodoItem Events
   const completeTodos = (id) => {
     const todoIndex = todos.findIndex(todo => todo.id === id)
     const newTodos = [...todos];
     newTodos[todoIndex].completed = true;
     saveTodos(newTodos);
   }
   const addTodos = (text) =>{
     const newTodos = [...todos];
     newTodos.push({completed:false, text, id: new Date()});
     saveTodos(newTodos);
   }
   const deleteTodos = (id) => {
     const todoIndex = todos.findIndex(todo => todo.id === id);
     const newTodos = [...todos];
     const filteredTodos = newTodos.filter(todo => todo.id !== todos[todoIndex].id);
     saveTodos(filteredTodos);
   }
    return(
        <TodoContext.Provider value={{
   totalTodos,
   completedTodos,
   searchValue,
   setSearchValue,
   todos,
   saveTodos,
   searchedTodos,
   completeTodos,
   deleteTodos,
   loading,
   error,
   openModal,
   setOpenModal,
   addTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}
export { TodoContext, TodoProvider }
