
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
    const [selectedOption,setSelectedOption] = useState(null);

  return (
    <div className="container">
        {/* Do not remove the main div */}
        <h1>Parent Components</h1>
        <ChildComponent1 setSelectedOption={setSelectedOption}/>
        <ChildComponent2 setSelectedOption={setSelectedOption}/>
        <p style={{marginTop:"2vh"}}>Selected Option : {selectedOption}</p>
    </div>
  )
}

export default App
