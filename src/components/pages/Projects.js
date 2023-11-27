import React from 'react'
import './Projects.css'
import ProjectItems from './ProjectItems'

import { ProjectList } from '../../data/ProjectList'

const projects = () => {
  return (
    <div className = "projects">
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItems id = {idx} name = {project.name} image = {project.image}/>
        })}
      </div>
    </div>
  )
}

export default projects