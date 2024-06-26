import { useEffect, useRef, useState } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

function App() {
const [input, setInput] = useState()

const inputRef = useRef();

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    const handleButtonClick = () => {
        inputRef.current.focus()
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here"  ref={inputRef} />
            <br/>
            <br/>
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};

export default App
