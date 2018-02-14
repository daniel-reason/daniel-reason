import React from 'react'

import ProjectNav from './ProjectNav'


const Projects = () => (

    <div className="container">
      <div className="projects">
        <ProjectNav />
        <div className="eight columns" id="proj-content">
          <h1 id="title">A collection of fun little projects.</h1>
        </div>
      </div>
    </div>
)

export default Projects
