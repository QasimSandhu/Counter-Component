import './App.css';
import React, { useEffect, useState } from "react";
import Student from './Student';

function App(props) {
  // const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  useEffect(() => {
    // alert("Data is:" + props.data);
    alert("Count is:" + props.count);

  }, [props.count]);


  return (
    <div className="App">
      <h1>Hooks</h1>
      <Student count={count} />
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      {/* <button onClick={() => setData(data + 1)}>Update Data</button> */}
    </div>
  );
}

export default App;
