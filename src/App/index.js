import React from 'react';
import { AppUI } from './AppUI';
import { ToDoProvider } from '../ToDoContext';

/* localStorage.removeItem('TODOS_V1'); 
 let defaultToDos = [
  { text: 'Hi world', completed: false },
  { text: 'Hello world', completed: true },
  { text: 'Hi people', completed: true },
  { text: 'Hello guys', completed: true }
] 

localStorage.setItem('TODOS_v1', JSON.stringify(defaultToDos)) */



function App() {
    return(
    <>
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
    
    </>
  )
}

export default App;
