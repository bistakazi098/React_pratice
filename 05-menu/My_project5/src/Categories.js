import React from "react";

// props as categories(allcategories)
const Categories = ({ categories,filterItems }) => {
  return (
    <div className="btn-container">
      {/* <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button>

      <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button> */}




      {/* using map method to get index and value */}
      {categories.map((category,index)=>{
        return(
          <button type="button" className="filter-btn" key={index}
           onClick={()=>filterItems(category)} >
          {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
