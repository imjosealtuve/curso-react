import "../style/styles.css";
import React from 'react';
import { ToDoContext } from "../ToDoContext";

function CreateToDoButton(){
    const {
        openModal,
        setOpenModal
    } = React.useContext(ToDoContext);
    return(
        <button className="createToDoButton-button" onClick={
            () => {
                setOpenModal(state => !state);
            }
        }>+</button>
    );
}

export { CreateToDoButton }