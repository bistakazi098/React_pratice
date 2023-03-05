import React, { useState } from "react";
// icon are imported
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {/* when button is clicked showicon is changed */}
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/* as showInfo is false we choose AiOutlinePlus icon */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* when showinfo is true than only paragraph is displayed */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
