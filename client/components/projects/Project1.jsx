import React from 'react'
import { connect } from 'react-redux'

import ProjectNav from './ProjectNav'


const Project1 = () => (

    <div className="container">
      <div className="projects">
        <ProjectNav />
        <div className="eight columns" id="proj-content">
          <div className="proj1Heading">
            <h1>Fibonacci!</h1>
            <h3>Enter a number and receive the integer located at that position of the sequence.<br></br>
            (Yes this is simple but it's a good place to start).</h3><br></br>
          </div>
          <form onSubmit={ calculate } id="fibonacci">
            <input type="text" name="number" placeholder="Enter number"></input><br></br>
            <input type="submit" value="Submit"></input><br></br>
          </form>
          <div className="result">
            <h1 id="theResult"></h1>
          </div>
        </div>
      </div>
    </div>
)

export default Project1

function calculate (ev) {
  ev.preventDefault()

  let a = ev.target.elements[0].value
  document.getElementById("theResult").innerHTML = a
  document.getElementById("fibonacci").reset()
}
