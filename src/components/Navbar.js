import React from 'react';
import Icon from '@mdi/react';
import { mdiApps } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="header">
            <a href= " ">Gmail</a>
            <a href= " ">Images</a>
            <Icon path={mdiApps}
            size={1.1} 
            className="icon" />
            <Icon path={mdiAccountCircle}
            size={1.7}
             />
        </div>
    )
}

export default Navbar
