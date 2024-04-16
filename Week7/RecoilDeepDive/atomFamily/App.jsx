import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import {todosAtomFamily} from './atoms'
import './App.css'
import './index.css'
import { useEffect } from 'react'

function App() {
  return(
     <RecoilRoot>
      <UpdateTodo/>
      <Todos id={1}/>
      <Todos id={2}/>
      <Todos id={3}/>
    </RecoilRoot>  
  )
}

/* 
function UpdateTodo(){
  const todoUpdater = useSetRecoilState(todosAtomFamily(2));

    useEffect(() => {
   setTimeout(() => {
    todoUpdater({
      id: "2",
      title: "Have to meet CTO ",
      description: "Check on how do we handling this task"
   })
    }, 5000);
  }, [])

return <div></div>
}

 */


function Todos({id}){
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return(
    <>
    {currentTodo.title}
    {currentTodo.description}
    <br/>
    </>
  )
  
}

export default App

