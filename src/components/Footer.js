import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="nigeria">Nigeria</div>
            <div className="footerDiv">
                <div>
                    <span className="footerLinks">About</span>
                    <span className="footerLinks">Advertising</span>
                    <span className="footerLinks">Business</span>
                    <span className="footerLinks hidefoot">How Search works</span>
                </div>
                <div className="hidefoot">
                    <img src={process.env.PUBLIC_URL +  '/img/fruit.png'} width="12px" alt="organic"/>
                    <span className="foot"> Carbon neutral since 2007</span>
                </div>
                <div>
                    <span className="footerLinks">Privacy</span>
                    <span className="footerLinks">Terms</span>
                    <span className="footerLinks">Settings</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
