import React from 'react'

import Header from './Header'

const Home = ({props}) => (
  <div className="container">

    <div className="homeContent">
      <Header />
      <div className="two columns">
        <div className="picOne" id="homeBoxes">
          Left side pic
        </div>
      </div>
      <div className="eight columns" id="homeBoxes">
        <div className="newsContent">
          Middle news stuff
        </div>
      </div>
      <div className="two columns">
        <div className="picTwo" id="homeBoxes">
          Right side pic
        </div>
      </div>
      <div className="twelve columns">
        <div className="footerBox">
          Bottom links
        </div>
      </div>
    </div>
  </div>
)

export default Home
