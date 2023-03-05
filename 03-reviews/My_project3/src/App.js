import React from 'react';
import Review from './Review';


// it is a parent conponent file
function App() {
  return <main>
    <section className='container'>
      <div className='title'>
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review/>
    </section>
  </main>;

}

export default App;
