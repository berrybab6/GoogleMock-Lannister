import React from 'react';

const Header = () => {
  
    return (
        <div className="header">
            <ul>
                <li className="links">Gmail</li>
                <li className="links">Images</li>
                <li ><img src={process.env.PUBLIC_URL +  '/img/circled-menu.png'} alt="menu" width="25px"  height="25px"/></li>
                <li><img className="profile" src={process.env.PUBLIC_URL +  '/img/profile.png'} alt="profile" width="30px"/></li>
            </ul>
        </div>
    )
}

export default Header
