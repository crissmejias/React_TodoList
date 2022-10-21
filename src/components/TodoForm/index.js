import React, {useState} from 'react'
const TodoForm = ({setOpenModal, addTodos}) => {
    const [error, setError] = useState('');
    const [todoValue, setTodoValue] = useState('');
    
    const clickHandler = () => {
        setOpenModal(false)
    }
    const onAdd = (e) => {
        e.preventDefault()
        if(todoValue){
        setError('');
        addTodos(todoValue)
        setOpenModal(false)
        }
        else{
            setError('Debes agregar una tarea'  )
        }
    }
    const onChange = (event) => {
        setTodoValue(event.target.value)
        todoValue && setError('')
    }
    return(
        <>
        <button type='button' onClick={()=>{clickHandler()}}className='modal-close'>X</button>
            <section className='modal-info'>
            <p className="modal-title">Crear nuevo To Do</p>
            <span className='error-msg'>{error}</span>
            </section>
            <form onSubmit={onAdd} className='modal-form'>
            <textarea value={todoValue} onChange={onChange} className='modal-input'/>
            <section className='modal-actions-section'>
              <button type='button'onClick={()=>{clickHandler()}} className="modal-cancel">Cancelar</button>
              <button type='submit' className={`modal-add ${todoValue==='' && `add-disabled`}`}>Agregar</button>
            </section>
            </form>
        </>
    )
}
export {TodoForm}