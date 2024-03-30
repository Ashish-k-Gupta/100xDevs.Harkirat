// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.
import { useState, useMemo } from "react";

function App(){

  const [input, setInput] = useState(0);


  const expensiveValue = useMemo( () =>{
    let result = 1;
    if(input === 0 || input === 1){
      return result = 1;
    }else{
      for (let i = 2; i <= input; i++){
        result = result * i
      }
      return result;
    }
  }, [input])

  return (
    <div>
      <input
      type="number"
      value={input}
      onChange ={(e) => setInput(Number(e.target.value))}
      />

      <p>Calcualted value: {expensiveValue}</p>

    </div>
  )


}


export default App;