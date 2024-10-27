import "../style/styles.css";
function ToDoList({children}){
    return(
      <ul>
        {children}
      </ul>
    );
  }
export { ToDoList }