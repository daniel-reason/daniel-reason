import React from 'react'
import { connect } from 'react-redux'

import ProjectNav from './ProjectNav'


const Project1 = () => (

    <div className="container">
      <div className="projects">
        <ProjectNav />
        <div className="eight columns" id="proj-content">
          <div className="projHeading">
            <h1>Fibonacci!</h1>
            <h3>A simple one to start us off.<br></br>
            Enter a number and receive the integer located at that position of the sequence.</h3><br></br>
          </div>
          <form onSubmit={ calculate } id="fibonacci">
            <input id="inputBar" type="text" name="number" placeholder="Enter number"></input><br></br>
            <input id="submitButton" type="submit" value="Submit"></input><br></br>
          </form>
          <div className="result">
            <h2 id="theResult"></h2>
          </div>
        </div>
      </div>
    </div>
)

export default Project1

function calculate (ev) {
  ev.preventDefault()

  var a = ev.target.elements[0].value
  var b = [0,1]

  for (var i=0;i<a;i++) {
    if (i>1) {
      b.push(b[i-2] + b[i-1])
    }
  }

  if (b[a-1] == undefined) {
    document.getElementById("theResult").innerHTML = "Please enter a whole number above 0."
  } else { document.getElementById("theResult").innerHTML = ("Number " + a + " position is " + (b[a-1]))
  }
  document.getElementById("fibonacci").reset()
}
