import './MainContent.css'
import Logo from '../../images/logo.jpg'
import Mic from '../../images/google_mic.png'
import SearchIcon from '../../images/google_search.svg'

const MainContent = () =>{
    return(
        <div className="MainContent">
            <img src={Logo} alt="Site Hustle Logo" className="logo"/>
            <div className="search">
                <div className="searchInput">
                    <img src={SearchIcon} alt="mic" />
                    <input type="text" placeholder="" />
                    <img src={Mic} alt="mic" />
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