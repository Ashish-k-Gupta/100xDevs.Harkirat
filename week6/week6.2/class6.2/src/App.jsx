import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
/* 
function App() {
  const [todos, setTodos] = useState([]);
// https://sum-server.100xdevs.com/todo?id=1
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(response){
      setTodos(response.data.todos)
    })
  },[])
  

    return(
      <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)}
      </>
    )
 
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}
 */


/* 
function App(){

  const [selectedId, setId] = useState(1);
  const handleButtonClick = (newId) =>{
    setId(newId);
  }

return(
  <div>
    <button onClick={() => handleButtonClick(1)}>1</button>
      <button onClick={() => handleButtonClick(2)}>2</button>
      <button onClick={() => handleButtonClick(3)}>3</button>
      <button onClick={() => handleButtonClick(4)}>4</button>
      <button onClick={() => handleButtonClick(5)}>5</button>

    <Todo id={selectedId}/>
  </div>
)
}

function Todo({id}){
  const [todo, setTodo] = useState({})
  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function(response){
      setTodo(response.data.todo)
    })
  },[id])

return <div>
  <h1>{todo.title}</h1>
  <h4>{todo.description}</h4>
</div>

}


export default App
 */


/* 
## useMemo
It's a mildly DSA concept
it means remembering some output given an input and not computing it again.


// PROBLEM STATEMENT

If i ask you to create an app that does two things - 
    1- Increases a counter by 1
    2- Lets user put a value in an input box (n) and you need to show sum from 1 to n
*/
/* 
function App(){

  const [sum, setSum] = useState(0);

  function result(){
    let value = document.getElementById("number").value;
    let num = parseInt(value);
    let sum = 0
    for(let i = 0; i <= num; i++){
        sum += i
    }
    setSum(sum)
  }
return (
  <div>
    <input id="number" type="text" />
    <h3>Sum is {sum}</h3>
    <button onClick={result}>Calculate Sum</button>
  </div>

)
}

export default App


 */

function App(){
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = 0;
  for(let i = 1; i <= inputValue; i++){
    count = count + i;
  }

  return <div>
    <input onChange={function(e){
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    sum from 1 to {inputValue} is {count}
    <br/>
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter({counter})</button>
  </div>
}

export default App;
