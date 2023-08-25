import React from 'react'
import twitter from '../../images/twitter.png'
import github from '../../images/github.png'
import insta from '../../images/insta.png'
import nasa from '../../images/nasa.png'
import youtube from '../../images/youtube.png'

function Footer() {
  return (
    <div id='footerWrapper'>
     <a href="https://www.nasa.gov/" className="nasaicon">
        <img src={nasa} id='nasaicon' />
     </a>
     <a href="https://www.instagram.com/nasa/" className="instaicon">
        <img src={insta} id='instaicon' />
     </a>
     <a href="https://twitter.com/nasa" className="xicon">
        <img src={twitter} id='xicon' />
     </a>
     <a href="https://www.youtube.com/@NASA" className="yticon">
        <img src={youtube} id='yticon' />
     </a>
     <a href="" className="giticon">
        <img src={github} id='giticon' />
     </a>
    </div>
  )
}

export default Footer
