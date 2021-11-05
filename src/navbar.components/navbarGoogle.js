import React from "react"

import avatar from '../images/avatar.jpg';
import me from '../images/me.png'
const NavBar =()=>{
    return (
        <nav>
      <ul>
        <li className="navItem a" ><a class="active" href="#">Gmail</a></li>
        
        <li className="navItem b"><a href="#" >Images</a></li>
        <li className="menu2"><div className="menu1"><a href="#"><svg class="menu" viewBox="0 0 24 24">
<path d="M 6 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 12 20 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 6 20 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 6 14 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 12 14 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 16 6 c 0 1.1 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 Z M 12 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 18 14 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 18 20 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z"></path>
</svg></a></div></li>
        <li className="menu2"><img class="logo_ava" src={me}/></li>

      </ul>
    </nav>
   
);
};

export default NavBar;