## TOPICS WE WILL COVER IN THIS LECTURE

    - React return
    - Re-rendering
    - Key
    - Wrapper components
    - useEffect
    - useMemo
    - useCallback
    - useRef

## Question: 
# Why a component can only return a single top level xml

1. It makes it easy to do reconciliation.
Reconciliation: Is the process where the react tries to figure out which DOM needs to update as your application grows.


### Re-rendering in react.
 Means that React did some work to calculate what all should update in this component.
 2 - The component actually got called (you can put a log to confirm this)
 3 - The inspector shows you a bounding box around the component.
 ### It happens when
 1- A state variable that is being used inside a component changes.
 2- A parent component re-render triggres all children re-rendering.
 


 ## How can you minimise the number of re-render in this app?

 1- You can push down the state of particular component, which is being used. 

 2- You can use memo feature of react to solve this problem


 ## Pushing down state

 ```javascript
import React, { useState } from 'react'
import './App.css'

function App() {

  return ( 
    <div>
    <HeaderWithButton/>
    <Header title="Ashish2"></Header>
    <Header title="Ashish3"></Header>
    <Header title="Ashish4"></Header>
    <Header title="Ashish5"></Header>
    <Header title="Ashish6"></Header>
    </div>
    )
}
  
function HeaderWithButton(){
  const [title, setTitle] = useState("My name is Slim Shady")
function randomNum(){
  setTitle("My name is " + Math.random());
}

return <div>
 <button onClick={randomNum}>Re-Render</button>
    <Header title={title}></Header>
  </div>
}


function Header({title}){
  return <div>
    {title}
  </div>
}

export default App

```


## KEY
Let's say you have a  list of elemets which you get and you want to render all the that data on your react app. It will render the whole data on the webapp. But let's say now in the same list you have shuffle a few things, deleted or added something to the list. 
What it leads to do in a react app is to re-render the whole page again (whole list). Because as the react logic track all the changes that have been done, now it will once remove all the items from the list and render again all the data. 
Which takes us to the point that to optimize the application we have minimize the times of re-render it has to do. 

Here where keys comes into the picture. It helps us give a unique id to each of element from the list. That way if the an element is shuffled or removed or added it keep track of the only element that have been changed. And re-render the list where it's needed instead of re-rendring the whole page.

```javascript

import React, { useState } from 'react'
import './App.css'

let counter = 4;

function App() {

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
```


## WRAPPER COMPONENT

```javascript

