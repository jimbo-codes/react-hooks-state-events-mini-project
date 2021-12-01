import React from "react";

function CategoryFilter({categories,filterBy,selectedButton}) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button className={selectedButton===category? 'selected':''} key={category} onClick={filterBy}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
