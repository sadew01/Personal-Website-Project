import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/sade-whitcomb-317a4325a/')}/>
            <GitHubIcon onClick={() => window.open('https://github.com/sadew01')}/>
            <EmailIcon onClick={() => window.location = 'mailto:swhitcomb@ufl.edu'}/>
        </div>
        <p> &copy; 2023 sadewhitcomb.com</p>
    </div>
  )
}

export default footer