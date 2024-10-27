import React from 'react';
import "../style/styles.css";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDosLoading } from '../ToDosLoading';
import { ToDosError } from '../ToDosError';
import { EmptyToDos } from '../EmptyToDos';
import { Modal } from '../Modal';
import { ToDoForm } from '../ToDoForm';
import { ToDoContext } from '../ToDoContext';



function AppUI(){
  const {
    loading,
    error,
    searchToDos,
    toCompleteToDo,
    toDeleteToDo,
    openModal,
    setOpenModal
  } = React.useContext(ToDoContext);
    return (
        <>
          <body>
            <ToDoCounter
            /* completed={completedToDos}
            total={totalToDos}
            toDos={toDos} */
            />
            <ToDoSearch 
            /* searchValue={searchValue}
            setSearchValue={setSearchValue} */
            />
            
                <ToDoList>
                  {loading && <ToDosLoading />}
                  {error && <ToDosError />}
                  {(!loading && searchToDos.length == 0) && <EmptyToDos/>}

                  {searchToDos.map (todo => (
                    <ToDoItem
                      key={todo.text} 
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => {toCompleteToDo(todo.text)}}
                      onDelete={() => {toDeleteToDo(todo.text)}}
                    />
                  ))}
              </ToDoList>
            <CreateToDoButton />
            
            {openModal && (<Modal>
              <ToDoForm />
            </Modal>)}
          </body>
          </>
      );
}

export { AppUI };