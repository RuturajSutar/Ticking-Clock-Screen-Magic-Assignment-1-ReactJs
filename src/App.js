import React from "react";
import {useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [cTime , setCTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  }
  setInterval(UpdateTime , 1000);
  return (
    <div>
      <h1>
        {cTime}
      </h1>
    </div>
  );
}

export default App;
