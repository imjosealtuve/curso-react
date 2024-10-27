import "../style/styles.css";
import { IoClose } from "react-icons/io5";

function ToDoItem(props){
    const style = { color: "red"}
    return(
      <li className={`item__list ${props.completed && 'item__list_checked'}`}>
        <span>{props.completed}</span>
        <p>{props.text}</p>
        <span id="x-2" onClick={props.onComplete} type='check'>Completed</span>
        
        <span id="x" onClick={props.onDelete}><IoClose style={style}/></span>
      </li>
    );
  }

export { ToDoItem }