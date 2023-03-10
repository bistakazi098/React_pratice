import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
// passed as props
const List = ({ items, removeItem,editItem}) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const {id, title} = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              {/* edit button */}
              <button type="button" className="edit-btn" onClick={()=> editItem(id)}>
                <FaEdit />
              </button>
              {/* delete button */}
              <button type="button" className="delete-btn" onClick={()=>removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
