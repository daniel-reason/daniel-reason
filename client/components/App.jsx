import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import About from './About'
import Contact from './Contact'
import Header from './Header'
import Home from './Home'
import Projects from './projects/Projects'
import Project1 from './projects/Project1'
import Project2 from './projects/Project2'
import Project3 from './projects/Project3'
import Project4 from './projects/Project4'
import Project5 from './projects/Project5'

function App (props) {
  return (
    <div className='app-container'>
      <Header />
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
          <Route path='/project1' component={Project1} />
          <Route path='/project2' component={Project2} />
          <Route path='/project3' component={Project3} />
          <Route path='/project4' component={Project4} />
          <Route path='/project5' component={Project5} />
        </div>
      </Router>
    </div>
  )
}

export default App
