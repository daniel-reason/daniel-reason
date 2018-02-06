import React from 'react'

import Navigation from './Navigation'


const Header = () => (

  <div className="container">
    <div className="row">
      <div className="twelve columns">
        <div className="header">
          <div id="profile-pic">
            <a href="#" id="home-link">
              <img src='../../images/profileimg.jpg' alt="Ninjas stole my profile picture" />
            </a>
          </div>
          <div id="title">
            <h2 id="myName">Daniel Reason - Web Developer</h2>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </div>
)

export default Header
