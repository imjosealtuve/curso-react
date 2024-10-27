import React from 'react';
import "../style/styles.css";
import { ToDoContext } from "../ToDoContext";

function ToDoSearch(){
    const {
      searchValue,
      setSearchValue
    } = React.useContext(ToDoContext);
    return(
      <div className="input-container">
        <input id="search" value={searchValue} placeholder="Busca algo aquí" autoComplete="off"
        onChange={
          (e) => 
            setSearchValue(e.target.value)
        }
        /> 
      </div>
    );
  }
export { ToDoSearch }