import React from 'react';
import ToDo from './ToDo';
 
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} onClick={handleToggle} handleFilter={handleFilter}/>
               )
           })}
           <button style={{margin: '20px'}} className="btn-secondary" onClick={handleFilter}>Clear Completed</button>
       </div>
   );
};
 
export default ToDoList;