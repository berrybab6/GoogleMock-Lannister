import React from 'react'
import './Home.css';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { mdiMicrophone } from '@mdi/js';
import { useState } from 'react';


const Home = () => {
    const [textUpdate, setTextUpdate] = useState("") 
    return (
        <div className="container">
            <img
            src="./side-hustle-logo.jpeg"
            alt="Side-hustle-logo"
            />

            <div className="search">
                <div className="search-input">
                     <Icon path={mdiMagnify}
                     size={1.7}
                     className="icons"
                     />

                     <input type="text" value={textUpdate}  />

                     <Icon path={ mdiMicrophone}
                     size={1.7}
                     className="icons"
                     />
                </div>

                <div className="search-buttons">
                    <button>Google Search</button>
                    <button>I'm Feeling Lucky</button>
                </div>
            </div>
        </div>
    )
}

export default Home
