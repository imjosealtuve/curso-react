import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider({ children }){
    const {
        item: toDos, 
        saveItem: saveToDos,
        loading,
        error,
      } = useLocalStorage('TODOS_v1', []);
      let [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      
      
      const completedToDos = toDos.filter(
        todo => !!todo.completed
      ).length;
      const totalToDos = toDos.length;
    
      const searchToDos = toDos.filter(
        todo => {
          return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        }
      )
    
      const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
          text,
          completed: false
        })
        saveToDos(newToDos);
      };
      // DELETE OR COMPLETE TO DOS
      const toCompleteToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
          (todo) => todo.text === text
        );
        newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;
        saveToDos(newToDos);
      };
      const toDeleteToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
          (todo) => todo.text === text
        );
        newToDos.splice(toDoIndex, 1);
        saveToDos(newToDos);
      };

    return(
        <>
            <ToDoContext.Provider value={
                {loading,
                error,
                completedToDos,
                totalToDos,
                toDos,
                searchValue,
                setSearchValue,
                searchToDos,
                toCompleteToDo,
                toDeleteToDo,
                openModal,
                setOpenModal,
                addToDo,
              }
                }>
                {children}
            </ToDoContext.Provider>
        </>
    )
}


export { ToDoContext, ToDoProvider };