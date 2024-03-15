import React, { Component, useState } from 'react'
import './App.css'


function App(){
  return <div>
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
