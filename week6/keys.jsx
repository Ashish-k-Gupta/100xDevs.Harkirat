import React, { useState } from 'react'
import './App.css'

/* 
## KEY
Let's say you have a  list of elemets which you get and you want to render all the that data on your react app. It will render the whole data on the webapp. But let's say now in the same list you have shuffle a few things, deleted or added something to the list. 
What it leads to do in a react app is to re-render the whole page again (whole list). Because as the react logic track all the changes that have been done, now it will once remove all the items from the list and render again all the data. 
Which takes us to the point that to optimize the application we have minimize the times of re-render it has to do. 

Here where keys comes into the picture. It helps us give a unique id to each of element from the list. That way if the an element is shuffled or removed or added it keep track of the only element that have been changed. And re-render the list where it's needed instead of re-rendring the whole page.
 */

let counter = 4;

function App() {

  <CardWrapper innerComp/>

    const [todos, setTodos] = useState([{
      id: 1,
      title: "go to gym", 
      description: "got to gym today"
    },
     {
      id: 2,
      title: "go to gym", 
      description: "got to gym today"
     },
     {
      id: 3,
      title: "go to gym", 
      description: "got to gym today"
     } 
  ])

  function addTodo(){
    setTodos([...todos,{
      id: counter++, 
      title: Math.random(),
      description: Math.random()
    }])
  }


  return ( 
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
    )
}
  
function Todo({title, description}){
return <div>
  <h1>{title}</h1>
  <h5>{description}</h5>
</div>
}

export default App
