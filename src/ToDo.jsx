import React from 'react';
 
const ToDo = ({todo}) => {
   return (
       <div className={todo.complete ? "strike" : ""}>
           <div>
           <h3>{todo.task}</h3>
           </div>
       </div>
   );
};
 
export default ToDo;