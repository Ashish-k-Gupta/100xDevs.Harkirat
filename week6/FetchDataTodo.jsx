/* 
These functions that starts with USE are called hooks

Hooks in React are functions that allow you to "hook into"
React state and lifecycle features from function components.
*/

// Assignment - HOOKS

/* 
Create an app that polls the sum server 
Gets the current set of TODOs
Renders it on the screen
*/



import React, { useState, useEffect } from 'react'
import './App.css'


function App() {
const [todos, setTodos] = useState([])
  useEffect(() =>{
    const interval = setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) =>{

        if(!res.ok){
          throw new Error("Failed to fetch todos")
        }
        const json = await res.json();
        // console.log(json)
        setTodos(json.todos) 
      })
      .catch(error => console.error('Error fetching todos:', error))
    }, 10000);

    return () => clearInterval(interval)
  
  }, [])

  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
        </div>
      ))}
    </div>
  );
}

export default App
