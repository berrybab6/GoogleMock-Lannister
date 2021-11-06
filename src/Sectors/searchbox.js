import React, { useState } from "react";
import side3 from '../images/side3.jpg';


const SearchBox =()=>{
    const [userText, setUserText] = useState("");

    return (
<div>
        <form onSubmit={(e)=>setUserText(userText)} >
        <div className="side1">
        <div className="side2">
            {(!userText)?<img src={side3}></img>:<h1>{userText}</h1>}
            </div>
    </div>

        <div className="top">
        <div className="formwrap" >
            <div className="wrap">
                <div className="searchItem">

                    <div className="searchInside">
                        <div className="searchText">
                            {/* Search Icon */}
                            <div className="searchIcon">
                                <div className="lelaS">
                                    <span className="searchSpan lelaS">
                                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M 15.5 14 h -0.79 l -0.28 -0.27 A 6.471 6.471 0 0 0 16 9.5 A 6.5 6.5 0 1 0 9.5 16 c 1.61 0 3.09 -0.59 4.23 -1.57 l 0.27 0.28 v 0.79 l 5 4.99 L 20.49 19 l -4.99 -5 Z m -6 0 C 7.01 14 5 11.99 5 9.5 S 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14 Z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {/* Input Box */}
                            <div className="inputmain">
                                <div className="inputBlock"></div>
                                <input className="inputText" 
                                // we will update usertext value here
                                value={userText} onChange={(e)=>setUserText(e.target.value)} 
                                
                                maxlength="2048" type="text" aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" 
                                 autocomplete="off" autocorrect="off" autofocus title="Search" spellcheck="false"/>
                            </div>

                            {/* Voice */}
                            <div className="voice">
                                <div className="lelaVoice" aria-label="Clear" role="button">
                                    <span className="voiceSpan" aria-label="Clear" role="button">
                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                        </svg>

                                    </span>
                                    <span className="lelaVoiceSpan"></span>
                                </div>
                                
                               {/* VoiceIcon button */}
                                <div className="voiceIcon" role="button" tabindex="0" aria-label="Search by voice">
                                    <svg class="svgVoice" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path>
                                        <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                                        <path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path>
                                        <path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path>
                                    </svg>
                                </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</form>
</div>
    );
};

export default SearchBox;