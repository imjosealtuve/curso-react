import React from 'react';
import "../style/styles.css";
import { ToDoListSkeleton } from '../ToDoListSkeleton';
import { ToDoItemSkeleton } from '../ToDoItemSkeleton';

function ToDosLoading(){
    return(
      <>
        <ToDoListSkeleton >
        <ToDoItemSkeleton />
                  
        </ ToDoListSkeleton>
        
      </>
    );
  }
export { ToDosLoading }