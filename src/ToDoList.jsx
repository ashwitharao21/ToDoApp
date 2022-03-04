import React from 'react';
import ToDo from './ToDo';
 
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    function refreshPage() {
        window.location.reload(false);
      }
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
               )
           })}
           <button className="btn btn-secondary" onClick={handleFilter}>Clear Completed</button>
           <button className="btn btn-info" onClick={refreshPage}>Reset</button>
       </div>
   );
};
 
export default ToDoList;