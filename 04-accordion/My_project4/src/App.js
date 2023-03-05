import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  // using usestate
  const [question, setQuestion] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Question and answers about login</h3>

        <section className="info">
          {/* calling single question  */}
          {question.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
