import {useState, useCallback} from "react"

// create a counter which increment and decrement functions, Pass these functions to a child component which has button to perform the increment and decrement action, Use useCallback to ensure that these function are not recreated on every render.

function App(){
const [count, setCount] = useState(0)

const addValue = useCallback(() =>{
    setCount(function(currentCount){
        return currentCount + 1
    })
}, [])

const subValue = useCallback(() =>{
    setCount(count => {
        return count - 1
    })
}, [])

return (
    <div>
        <p>Count: {count}</p>
        <CounterButton onIncrement ={addValue} onDecrement = {subValue}/>
    </div>
)

}

const CounterButton = ({onIncrement, onDecrement}) => (
<div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
</div>
)

export default App