import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from 'react';

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [objList, setObjList] = useState(TASKS);
  const [mySelected, setButton] = useState('')
  const [name, setName]  = useState('');
  const [categorySelected, setCategory] = useState('Code');
  // const [newTask]

  function filterApp(event){
    setButton(event.target.textContent);
    console.log(objList);
    setObjList(TASKS.filter((obj) => {
        if(event.target.textContent==="All"){
        return objList;
      }else {
        return  obj.category===event.target.textContent
      }
    }))
  }
  function nameHandler(event){
    setName(event.target.value)
  }
  function categoryHandler(event){
    // console.log(event.target.value);
    setCategory(event.target.value)
  }
  
  function handleSubmit(event){
    event.preventDefault();
    console.log(name)
    const newTask={
      text: name,
      category: categorySelected,
    }
    const newObject2 = [...objList,newTask]
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
      categoryCapture={categoryHandler}
      nameCapture={nameHandler}
      categorySelected={categorySelected}
      nameSelected={name}
      onTaskFormSubmit = {handleSubmit}
      />
      <TaskList 
      taskObj={objList}
      />
    </div>
  );
}

export default App;
