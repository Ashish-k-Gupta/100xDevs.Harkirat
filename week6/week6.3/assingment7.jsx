import React, { useState, useCallback } from 'react';

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of 
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

function App() {
    const [inputText, setInputText] = useState('');

    const displayText = useCallback(() =>{
            alert(inputText)
    }, [inputText])



    return (
        <div>
            <input 
            type='text'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Write Some Text Here'/>
            <Alert displayText= {displayText}></Alert>
        </div>
    )
}
function Alert({displayText}){
 return <button onClick={displayText}>Alert Text</button>
}
export default App