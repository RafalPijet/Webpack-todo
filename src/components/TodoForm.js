import React from "react";
import style from "./TodoForm.css";

const TodoForm = props =>
     <div>
         <label>Enter new Task: </label>
         <input className={style.Input} type="text" id="enterText" onKeyUp={(event) => {

             if (event.keyCode === 13) {
                 props.onTask(event.target.value);
                 event.target.value = "";
             }
         }}/>
     </div>;

export default TodoForm;