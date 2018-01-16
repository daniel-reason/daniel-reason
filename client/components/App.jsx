import React from 'react'

import Header from './Header'
import Home from './Home'
import Navigation from './Navigation'

function App (props) {
  return (
    <div className='app-container'>
      <Navigation />
      <Home />
    </div>
  )
}

export default App
