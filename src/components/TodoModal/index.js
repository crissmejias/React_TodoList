import ReactDOM from 'react-dom'
import './TodoModal.css'
import { TodoForm } from '../TodoForm';
const TodoModal = () => {
    
    return ReactDOM.createPortal(
        <div className='modal-background'>
            <TodoForm />
    </div>,
    document.getElementById('modal')
    );
}
export {TodoModal}