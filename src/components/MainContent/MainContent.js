import { useState } from 'react'
import './MainContent.css'
import Logo from '../../images/logo.jpg'
import Mic from '../../images/google_mic.png'
import SearchIcon from '../../images/google_search.svg'

const MainContent = () =>{
    const [SearchText, setSearchText] = useState("")
    return(
        <div className="MainContent">
            <img src={Logo} alt="Site Hustle Logo" className="logo"/>
            <div className="search">
                <div className="searchInput">
                    <div>
                    <img src={SearchIcon} alt="mic" />
                    <input type="text" placeholder="" value={SearchText} onChange={e=> setSearchText(e.target.value)} />
                    <img src={Mic} alt="mic" />
                    </div>
                    {(!SearchText)? <p>{SearchText}</p> :
                     <div className="searchResults">
                     <p>{SearchText}</p>
                     </div>}
                </div>
                <div className="buttons">
                    <a href="/" >Google Search</a>
                    <a href="/" >I'm feeling Lucky</a>
                </div>
                <div className="languages">
                    <p>Google offered in: </p>
                    <a href="/">Hausa</a>
                    <a href="/">Igbo</a>
                    <a href="/">Yoruba</a>
                    <a href="/">Nigeria Pidgin</a>
                </div>
            </div>
        </div>
    )
}
export default MainContent