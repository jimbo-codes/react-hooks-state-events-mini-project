import React from "react";
import {useState} from 'react';
function NewTaskForm({categories,onTaskFormSubmit}) {
    const [name, setName]  = useState('');
    const [categorySelected, setCategory] = useState('Code');
    const newTask={
      text: name,
      category: categorySelected,
    }
    function nameHandler(event){
      setName(event.target.value)
    }
    function categoryHandler(event){
      setCategory(event.target.value)
    }
  return (
    <form className="new-task-form"onSubmit={(e) => {e.preventDefault();onTaskFormSubmit(newTask)}}>
      <label>
        Details
        <input type="text" name="text" onChange={nameHandler} value={name}/>
      </label>
      <label>
        Category
        <select name="category" onChange={categoryHandler} value={categorySelected}>
          {categories.map((category) => (
          <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
