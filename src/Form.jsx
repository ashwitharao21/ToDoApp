import React, { useState } from 'react';

 
const Form = ({addTask}) => {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    
   return (
       <div>
           <div>
           <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
           <button className='btn btn-info' onClick={handleSubmit}>Add Task</button>
           </div>
       </div>
   );
};
 
export default Form;