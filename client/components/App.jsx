import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Contact from './Contact'
import Home from './Home'
import Navigation from './Navigation'
import Projects from './Projects'

function App (props) {
  return (
    <div className='app-container'>
      <Navigation />
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    </div>
  )
}

export default App
