import React from 'react'
import ReactDOM from 'react-dom'
import './TodoModal.css'
const TodoModal = ({children}) => {
    
    return ReactDOM.createPortal(
        <div className='modal-background'>
            {children}
    </div>,
    document.getElementById('modal')
    );
}
export {TodoModal}