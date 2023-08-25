import React from 'react'
import './header.css'
import check from '../../images/check.png'

function Header() {
    return (
        <div id='headerWrapper'>
            <div className='nasaName'>
                <p>nasa</p>
                <img src={check} alt="verified" className='verified' />
            </div>
            {/*  */}
            <div id='status'>
                <div className='flex'>
                    <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="nasa logo" className='logo' />
                    <div>
                    </div>
                    <div className='rightDiv'>
                        <div className='numbers'>
                            <p>3,940</p>
                            <p>Posts</p>
                        </div>
                        <div className='numbers'>
                            <p>95.2M</p>
                            <p>Followers</p>
                        </div>
                        <div className='numbers'>
                            <p>77</p>
                            <p>Following</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header