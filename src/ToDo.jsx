import React from 'react';
 
const ToDo = ({todo, handleToggle, handleFilter}) => {
   return (
       <div className={todo.complete ? "strike" : ""}>
           <div>
           <h3 className='pointer' onClick={() => handleToggle(todo.id)}>{todo.task}</h3>
           </div>
       </div>
   );
};
 
export default ToDo;