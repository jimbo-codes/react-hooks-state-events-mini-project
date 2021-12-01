import React from "react";

function Task({category, text}) {
  // const [visibility, setVisibility] = useState('')
  function hideButton(event){
  
    event.target.parentElement.remove();
    // setVisibility('none')
    //style={{display:visibility}}
  }

  return (
  <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={hideButton}>X</button>
  </div>
    
  );
}

export default Task;
