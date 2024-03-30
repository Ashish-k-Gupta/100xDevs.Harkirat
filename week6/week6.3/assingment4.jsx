import React, { useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

  const Words = ["Ashish", "Philosphy", "Meaning", "Money", "Family", "Women", "love"]
  const totalLines = 1000;
  const allWords = [];

  for (let i = 0; i < totalLines; i++){
    let sentence = "";
    for(let j = 0; j < Words.length; j++){
      sentence = sentence + (Words[Math.floor(Words.length * Math.random())])
      sentence = sentence + " "
    }
    allWords.push(sentence)
  }

  function App(){

    const [sentence, setSentences] = useState(allWords);
    const [filter, setFilter] = useState("");


    const filterSentences = useMemo(() => {
      return sentence.filter(x => x.includes(filter));
    }, [sentence, filter])


    return (
      <div>
        <input type="text" onChange={(e) => {
          setFilter(e.target.value)
        }}></input>
        {filterSentences.map(word => <div>
          {word}
          </div>)}
      </div>
    )
}

export default App;