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
