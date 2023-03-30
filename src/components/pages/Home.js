import React from 'react'
import './Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I'm Sade Whitcomb!</h2>
        <div className='prompt'>
          <p>A Computer Science Student with a passion for tech.</p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/sade-whitcomb-317a4325a/')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/sadew01')}/>
          <EmailIcon onClick={() => window.location = 'mailto:swhitcomb@ufl.edu'}/>
        </div>
      </div>
      <div className='skills'>
        <h2>Skills</h2>
      </div>
    </div>
  )
}

export default home