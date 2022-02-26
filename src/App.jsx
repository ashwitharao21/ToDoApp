import React, { useState } from 'react';
import './App.css';
import Header from './header';
import data from './data';
import ToDoList from './ToDoList';


 
function App() {
  // list of todos
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

 return (
   <div className="App">
    	<Header /> 
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
   </div>
 );
}
 
export default App;