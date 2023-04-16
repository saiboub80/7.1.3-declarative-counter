//import react and useState together
import React, { useState } from 'react'
function App() {
  //start point
  const [counter, changeCounter] = useState(1)
  //without the window it work I try
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  );
}

export default App;
