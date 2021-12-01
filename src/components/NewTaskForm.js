import React from "react";

function NewTaskForm({categories,nameCapture,categoryCapture,nameSelected,categorySelected, onTaskFormSubmit}) {

  return (
    <form className="new-task-form"onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={nameCapture} value={nameSelected}/>
      </label>
      <label>
        Category
        <select name="category" onChange={categoryCapture} value={categorySelected}>
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
