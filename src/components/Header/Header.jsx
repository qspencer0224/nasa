import React from 'react'

function Header() {
  return (
    <div id='headerWrapper'>
      <div className="nasanav">
        <div className="left">
            <img src='https://cdn.discordapp.com/attachments/1128684937818681404/1144478289524695041/icon__arrow_back_outline_.png' alt='' id='left' />
        </div>
        <div className="name">nasa</div>
        <div className="check">
            <img src='https://cdn.discordapp.com/attachments/1128684937818681404/1144478289830871040/image_1.png' alt='' id='check' />
        </div>
        <div className="dots">
            <img src='' alt='' id='dots' />
        </div>
      </div>
      <div className="socials"></div>
      <div className="bio"></div>
      <div className="link"></div>
      <div className="followers"></div>
      <div className="buttons"></div>
    </div>
  )
}

export default Header
