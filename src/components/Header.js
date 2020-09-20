import React from 'react'
import './Header.css'

import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Header() {
    return (
        <div className='header'>
            <div className="header__title">
                <h1>Project List</h1>

            </div>
            <div className="header__icons">
                <a href="http://www.litianningl.com.s3-website-us-east-1.amazonaws.com/" 
                    target="_blank" rel="noopener noreferrer">
                    <HomeIcon />
                </a>
                <a href="https://github.com/lit26/" 
                    target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/tianning-li/" 
                    target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
            </div>
        </div>
    )
}

export default Header
