import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  // prevent default behaviour
  const handleSubmit = (e) => {
    e.preventDefault();

    // as count still acts as string converted as count
    let amount = parseInt(count);
    console.log(amount);

    // if count is less than 1 than set to 1
    if (count <= 0) {
      amount = 1;
    }
    // if count is more than 8 then set to eight
    if (count > 8) {
      amount = 8;
    }

    // as count is converted to number amount reads end of data
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of Boring lorem ipsum</h3>
      {/* form  */}
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        {/* input */}
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        {/* submit */}
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      {/* article */}
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
