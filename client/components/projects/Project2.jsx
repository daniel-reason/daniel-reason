import React from 'react'

import ProjectNav from './ProjectNav'


const Project2 = () => (

    <div className="container">
      <div className="projects">
        <ProjectNav />
        <div className="eight columns" id="proj-content">
          <div className="projHeading">
            <h1>Morse Code Creator.</h1>
            <h3>Enter a word/sentence and have it translated to Morse Code</h3><br></br>
          </div>
          <form onSubmit={ translate } id="translator">
            <input type="text" name="mText" placeholder="Enter Word/Sentence"></input><br></br>
            <input type="submit" value="Submit"></input><br></br>
          </form>
          <div className="result">
            <h2 id="originalText"></h2>
            <h2 id="theResult"></h2>
          </div>
        </div>
      </div>
    </div>
)

export default Project2

function translate (ev) {
  ev.preventDefault()

  var textArray = ev.target.elements[0].value.toLowerCase().split('')
  var text = textArray.map(convertToMorse).filter(removeNulls).join(' / ')

  document.getElementById("originalText").innerHTML = ev.target.elements[0].value
  document.getElementById("theResult").innerHTML = text
  document.getElementById("translator").reset()
}

function convertToMorse (letter) {
  for (var i=0;i<abc.length;i++) {
    if (letter == abc[i]) {
    return (morsecode[i])
    }
  }
}

function removeNulls (a) {
  return a != undefined
}

var abc = ('abcdefghijklmnopqrstuvwxyz0123456789.,?!:=').split('')
var morsecode =[
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', '-----', '.---', '..---', '...--', '....-',
    '.....', '-....', '--...', '---..', '----.', '.-.-.-',
    '--..--', '..--..', '..--.', '---...', '-...-'
  ]
