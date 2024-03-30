import { useEffect, useMemo, useState } from 'react'

function App() {
const [exchangeData1, setExchangeData1] = useState({})
const [exchangeData2, setExchangeData2] = useState({})
const [bankData, setBankData] = useState({});


useEffect(function()  {
  setExchangeData1({
    returns: 100
  })
}, [])

useEffect(function()  {
  setExchangeData2({
    returns: 100
  })
}, [])


useEffect(() => {
  setTimeout(() => {
    setBankData({income: 100})
  }, 5000);
}, [])


const cryptoReturn = useMemo(() => {
  console.log("Hi there before");
  return (exchangeData1.returns + exchangeData2.returns);
}, [exchangeData1, exchangeData2]);

const incomeTax = (cryptoReturn + bankData.income) * 0.3

  return (
    <div>
        Hi There, you income tax return are {incomeTax}
    </div>

    )
}
export default App

