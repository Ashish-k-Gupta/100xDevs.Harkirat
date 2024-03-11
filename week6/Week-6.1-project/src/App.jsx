import React, { useState } from 'react'
import './App.css'

function App() {

  
  
  return ( 


    <div>
   
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

return 
  <div>
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
