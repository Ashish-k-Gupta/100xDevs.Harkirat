import React, { useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array
/* 
  const Words = ["Ashish", "Philosphy", "Meaning", "Money", "Family", "Women", "love"]
  const totalLines = 1000;
  const allWords = [];

  for(let i = 0; i < totalLines; i++){
    let sentence = ""
    for (let j = 0; j < Words.length; j++){
      sentence = sentence + Words[Math.floor(word.length * Math.random())]
    }
      allWords.push(sentence);
  }


function App(){
  
  const [sentences , setSentences] = useState(allWords)
  const [filter, setFilter] = useState("")


  const filterSentences = useMemo(
    sentences.filter(x => x.includes(filter))
  )
    return (
      <div>
      <input type="text" onClick={(e) =>{
        setFilter(e.target.value)
      }}></input>
      {filterSentences.map(word => <div>
        {word} 
        </div>)}
      </div>
      )
}

export default App; */
/* 
const words = ["J-Chole", "Kendrick Lamar", "Arjit-Singh", "jack-Harllow",]
const lines = 1000;
const allWords = []

for (let i = 0; i < lines; i++){
  let sentence = ""
  for(j = 0; j < words.length; j++){
    sentence = sentence + words[Math.floor(words.length * Math.floor())]
    sentence = sentence + " "
  }
  allWords.push(sentence)
}

function App (){

  const [sentences, setSentences] = useState(allWords)
  const [filter, setFilter] = useState("")

const filteredSentences = sentences.filter(x => x.includes(filter))

return (
  <div>
    <input type="text" onChange={(e) => {
        setFilter(e.target.value)
    }}></input>
    {filteredSentences.map(word => <div>
      {word}
      </div>)}
  </div>
)

}

 */

const words = ["Ashish","love", "Philosphy", "Money", "Cars", "House"]
const totalLines = 1000; 
const allWords = []

for (let i = 0; i < lines; i++){
  let sentence = ""
  for (let j = 0; j < words.length; j++){
    sentence = sentence + words[Math.floor(words.length * Math.random())]
  }
  allWords.push(sentence)
}

function App(){
  const [sentence, setSentences] = useState(allWords)
  const [filter, setFilter] = useState("")

  const filteredSentences = useMemo(() => {
    sentence.filter(x => x.includes(filter))
  }, [sentence, filter]) 

  return (
    <div>
      <input type="text" onChange={(e) => {
        setFilter(e.target.value)
      }}></input>
      {filteredSentences.map(word => <div>
        {word}
     </div>)}

    </div>
  )

}