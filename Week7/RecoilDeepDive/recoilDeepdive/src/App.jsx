import { useEffect } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {notifications,  totalNotificationSelector} from './atoms'
import './App.css'
import './index.css'
import axios from 'axios'

function App() {
  return(

    <RecoilRoot>
    <MainApp/>
    </RecoilRoot> 
    
  )
}

function MainApp(){
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
    
      <button id='red'>Home</button>
      <button id='green'>My Network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button id='green'>Jobs ({networkCount.jobs >= 100 ? "99+" : networkCount.jobs})</button>
      <button id='green'>Message ({networkCount.messaging >= 100 ? "99+" : networkCount.messaging})</button>
      <button id='red'>Notification ({networkCount.notifications})</button>
 
      <button id='total'>Total Notification ({totalNotificationCount})</button>

    </> 
  );
}  
export default App
