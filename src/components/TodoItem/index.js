import './TodoItem.css'
const TodoItem = ({text, completed, onComplete, onDelete}) => {
        return(
        <li className={`todo-item ${completed && `todo-completed`} `}>
            <button className='todo-checkmark' onClick={()=> {onComplete()}} ><i className="fi fi-ss-check"></i></button>
            <p>{text}</p>
            <button className='todo-cancel' onClick={() =>{onDelete()}}><i className="fi fi-ss-cross"></i></button>
        </li>
    )
}
export  {TodoItem};