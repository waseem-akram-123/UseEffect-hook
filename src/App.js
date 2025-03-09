import React, {useEffect,useState} from "react";
import './App.css';

import MyComponent from './components/MyComp';

function App() {

  const [isvisible, setVisibility] = useState (true);

  useEffect (()=> {
    console.log ("App is mounting....");
  },[]);

  return (
    <div>
      {isvisible ? <MyComponent/> : <></>}
      <button onClick = {()=> setVisibility (!isvisible)}>Toggle</button>
    </div>
  )
}

export default App;
