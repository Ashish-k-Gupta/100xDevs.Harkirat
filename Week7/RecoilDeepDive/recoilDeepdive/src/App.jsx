import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import {networkAtom, jobsAtom, messagingAtom, notificationAtom, totalNotificationSelector} from './atoms'
import { useMemo } from 'react'
import './App.css'
import './index.css'

function App() {
  return(

    <RecoilRoot>
    <MainApp/>
    </RecoilRoot> 
    
  )
}
function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobsAtom);
  const [messageNotificationCount, setMessagingAtomCount] = useRecoilState(messagingAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const totalNotification = useRecoilValue(totalNotificationSelector)
  
/* 
  const totalNotification = useMemo(() => {
    return networkNotificationCount + jobNotificationCount + messageNotificationCount + notificationCount
  }, [networkNotificationCount,jobNotificationCount, messageNotificationCount, notificationCount])
 */
  return (
    <>
    
      <button id='red'>Home</button>
      <button id='green'>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button id='green'>Jobs ({jobNotificationCount >= 100 ? "99+" : jobNotificationCount})</button>
      <button id='green'>Messages ({messageNotificationCount})</button>
      <button id='green'>Notification ({notificationCount})</button>
      <button id='red'>Me</button>
 
      <button id= 'red' onClick={() => {
        setMessagingAtomCount(c => c + 1 )
      }}>Add Message</button> 

      <button id='total'>Total Notification ({totalNotification})</button>

    </>
  );
}
export default App
