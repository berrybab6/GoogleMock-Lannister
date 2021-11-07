import './TopNav.css'

import ButtonContent from './ButtonContent'


const TopNav = () =>{
   
    return(
        <div className="links">
            <div>
            <a href="https://mail.google.com/mail/&ogbl">Google</a>
            <a href="https://www.google.com.ng/imghp?hl=en&ogbl">Images</a> 
            </div>
            <div>
            <ButtonContent />       
            </div>
             </div>
    )
}
export default TopNav