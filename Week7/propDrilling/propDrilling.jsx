/* 
PROP DRILLING
Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props. */

import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <Count count={count} setCount={setCount}/>
    </div>
  )

}

function Count({count, setCount}){
  return <div>
   Count:  {count}
   <Buttons count = {count} setCount={setCount}/>

  </div>
}

function count({count, setCount}){
    return <div>
        <CountRenderer count={count} />
        <Buttons count={count} setCount={setCount} />
    </div>
}


function CountRenderer({count}){
    return <div>
        {count}
    </div>
}

function Buttons({count, setCount}){
   return <div>
    <button onClick={() => {
        setCount(count + 1)
    }}>Increase</button>
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
   </div>
}

export default App