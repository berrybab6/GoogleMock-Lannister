import './Footer.css'
import Carbon from '../../images/carbon.png'
const Footer = () =>{
    return(
        <div className="footer">
            <div className="country">Nigeria</div>
            <div className="copyright">
                <div className="footer-links">
                <a href="/">About</a>
                <a href="/">Advertising</a>
                <a href="/">Business</a>
                <a href="/">How Search Works</a>
                </div>
                <div>
                    <img src={Carbon} alt="copyright" />
                    <a href="/">Carbon neutral since 2007</a>
                </div>
                <div className="footer-links">
                <a href="/">Privacy</a>
                <a href="/">Terms</a>
                <a href="/">Settings</a>
                </div>
            </div>
        </div>
    )
}
export default Footer