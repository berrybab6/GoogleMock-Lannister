import React from 'react'
import { useState } from 'react';

const Body = () => {
    const[input, setInput] = useState("");
    
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="main">
            <div>{ input !== "" ? <p className="searchText">{input}</p> :<img src={process.env.PUBLIC_URL +  '/img/sidehustle.png'} alt="Side Hustle" width="300px" />}</div>
            <div>
                <input onInput={ handleInput } type="text"/>
                <span className="mic"><img src={process.env.PUBLIC_URL +  '/img/mic.png' } alt="mic" width="30px"/></span>
            </div>
            <div className="history">
                <button> Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            <p className="language">Google offered in: <div><span>Hausa </span><span> Igbo </span><span> Èdè </span><span> Yorùbá </span><span> Nigerian </span><span> Pidgin</span></div></p>
        </div>
    )
}

export default Body;
