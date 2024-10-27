import React from 'react';
import '../style/styles.css';
import { ToDoContext } from '../ToDoContext';

function ToDoForm(){
    const {
        setOpenModal,
        addToDo,
    } = React.useContext(ToDoContext);
    
    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    } 

    const onCancel =  () => {
        setOpenModal(false); };

    const onChange = (e) => {
        setNewToDoValue(e.target.value);
    };

    return(
        <form onSubmit={ onSubmit }>
            <label>Escribe tu nueva tarea</label>
            <textarea placeholder='Estudiar código' value={newToDoValue} onChange={ onChange } autoFocus required/>
            <div className='toDoForm-buttonContainer'>
                <button type='button' onClick={onCancel} className='toDoForm-button toDoForm-button--cancel'>Cancelar</button>
                <button type='submit' className='toDoForm-button toDoForm-button--add'>Agregar</button>
            </div>
        </form>
    )
}

export { ToDoForm }