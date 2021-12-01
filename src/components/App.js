import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from 'react';
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [objList, setObjList] = useState(TASKS);
  const [mySelected, setButton] = useState('')


  function filterApp(event){
    setButton(event.target.textContent);
    setObjList(TASKS.filter((obj) => {
        if(event.target.textContent==="All"){
          return objList;
        }else {
          return  obj.category===event.target.textContent
        }
    }))
  }

  
  function handleSubmit(object){
    // event.preventDefault();
    // const newTask={
    //   text: name,
    //   category: categorySelected,
    // }
    const newObject2 = [...objList,object]
    // modify the array being used to render to add on the new thing.
   setObjList(newObject2)
   console.log(objList)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      filterBy={filterApp}
      selectedButton={mySelected}
      />
      <NewTaskForm 
      categories={CATEGORIES.slice(1)}
      // categoryCapture={categoryHandler}
      // nameCapture={nameHandler}
      // categorySelected={categorySelected}
      // nameSelected={name}
      onTaskFormSubmit = {handleSubmit}
      />
      <TaskList 
      taskObj={objList}
      />
    </div>
  );
}

export default App;
