import React from 'react'


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
          {/* <div id="name">
            <h1>Daniel Reason</h1>
          </div> */}
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header

// $(document).ready(function() {
//   $('#nav-icon').click(function() {
//     $(this).toggleClass('open')
//   })
// })
