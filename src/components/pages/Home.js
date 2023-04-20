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
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>Java, C/C++, JavaScript, TypeScript, HTML, Css</span>
          </li>
          <li className="item">
            <h2>Technology</h2>
            <span>Node.js, React, Angular, Git/GitHub</span>
          </li>
          <li className="item">
            <h2>Coursework</h2>
            <span>Data Structures and Algorithms, Introduction to Computer Organization, Introduction to Software
Engineering, Operating Systems, Computer Network Fundamentals</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default home