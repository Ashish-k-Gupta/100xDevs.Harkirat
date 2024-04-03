import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import {Dashboard} from "./components/dashboard"
import {Landing} from "./components/landing"

function App() {
  return (
    <div>

    

      <BrowserRouter>
        <Appbar/>

        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Landing/>} />
        </Routes>
      </BrowserRouter>

    </div>
     
    )

  function Appbar(){
  const navigate = useNavigate();

    return (
        <div style={{background: "Blue", color: "white"}}>


    <button style={{padding: 5, margin: 5}} onClick={()=>{
      window.location.reload()
    }}>Refresh</button>

    <button style={{padding: 5, margin: 5}} onClick={()=>{
      navigate("/dashboard");
    }}>Dashboard</button>

    <button style={{padding: 5, margin: 5}} onClick={() =>{
      navigate("/");  
    }}>Landing</button>


    </div>

    )

  }
}

export default App
