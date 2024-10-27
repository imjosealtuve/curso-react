import "../style/styles.css";
import { IoClose } from "react-icons/io5";

function ToDoItemSkeleton(props){
  
  return(
    <li className={`item__list ${props.completed && 'item__list_checked'} liSkeleton`}>
      <span className="circle"></span>
      <span>{props.completed}</span>
      <p>{props.text}</p>

      
    </li>
  );
  }

export { ToDoItemSkeleton }