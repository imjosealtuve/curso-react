import "../style/styles.css";
function ToDoListSkeleton({children}){
    return(
      <ul>
        {children}
        {children}
        {children}
        {children}
        {children}
      </ul>
    );
  }
export { ToDoListSkeleton }