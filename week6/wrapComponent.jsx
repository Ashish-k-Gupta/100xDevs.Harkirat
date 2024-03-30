import React, { Component, useState } from 'react'
import './App.css'


function App(){
  return <div>
  <CardWrapper>
    <div>Hi There!</div>
  </CardWrapper>
  <CardWrapper>
    <div>Hello There!</div>
  </CardWrapper>
  <CardWrapper>
    <div>What's There!</div>
  </CardWrapper>
  </div>

}

function CardWrapper({children}) {
  return <div style={{
    border: "2px Solid Red",
    padding: "20px",
    margin: "10px"
    }}>

  {children}

  </div>
}


function TextComponent(){
  return <div>
    Hi There!!
  </div>
}


export default App



// ANOTHER WAY TO DO IT


import React, { Component, useState } from 'react'
import './App.css'


function App(){
  return <div>
  <CardWrapper innerComponent = {<TextComponent />}/>
  <CardWrapper innerComponent = {<TextComponent />}/>
  </div>

}

function CardWrapper({innerComponent}){
  return <div style={{border: "2px Solid Red", padding: 20}}>
  {innerComponent}
  </div>
}


function TextComponent(){
  return <div>
    Hi There!!
  </div>
}


export default App


