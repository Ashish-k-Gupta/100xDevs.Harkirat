/* 
PROP DRILLING
Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props. */

import { useContext, useState } from "react";
import { CountContext, SetCountContext } from "./context";

// Wrap anyone that wants to use the teleported value inside a provider
/* function App(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <CountContext.Provider value={{count, setCount}}>
      <Count/>
      </CountContext.Provider>
    </div>
  )

} */

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}


function Count(){
  return <div>
    <CountRenderer/>
   <Buttons />
  </div>
}

function CountRenderer(){
  const {count} = useContext(CountContext);
      console.log(count); // Correct placement of console.log
  return <div>
      {count}
  </div>
}


function Buttons(){
  const {count} = useContext(CountContext);
  const {setCount} = useContext(SetCountContext);

   return <div>
    <button onClick={() => {setCount(count + 1)}}>Increase</button>
    <button onClick={() => {setCount(count - 1)}}>Decrease</button>
   </div>
}

export default App