import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './component/createTodo'
import { Todos } from './component/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <CreateTodo></CreateTodo>
    <Todos todos ={}></Todos>
  </div>
  )
}

export default App