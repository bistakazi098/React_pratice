import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  // set colors
  const [color, setColor] = useState('');
  // for error
  const [error, setError] = useState(false);
  // for listing colors
  const [list, setList] = useState(new Values(('#dc8add')).all(10));


  // preventing handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hellow");
    try {
      // using values package function for creating shades
      var colors = new Values(color).all(10);
      setList(colors)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  return (
    <>
      <section className="container">
        <h3>Class Generator</h3>
        {/* on summit calling handleSubmit */}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="#f8e8f8"
            // for Dynamically adding classname
            className={`${error ? 'error' : null}`} value={color} onChange={(e) => {
              setColor(e.target.value)
            }} />
          <button type='submit' className='btn'>Submit</button>
        </form>
      </section>
      <section className="colors">
        {/* for passing list of colors generated from values package */}
        {list.map((color, index) => {
          // passing properties
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>

    </>)
}

export default App
