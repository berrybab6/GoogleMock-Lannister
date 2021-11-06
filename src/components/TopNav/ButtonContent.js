import { useState } from 'react'
import ProfileImg from '../../images/profile.jfif'
import Grid from '../../images/google_grid.png'
import Services from './Services'
import Profile from './Profile'

const ButtonContent = () =>{
    const [hideImg, showImg] = useState(false)
    const handleImg = () =>{
                 showImg(
                    <div className="ButtonContent"><Profile /></div>
                )
    }
    const handleService = () =>{
                showImg(
                <div className="ButtonContent"><Services /></div>
                )
    }
    return (
        <>
             <img src={Grid} alt="" className="google_grid" onClick={handleService}/>
            <img src={ProfileImg} alt="" className="profileImg" onClick={handleImg} />
            {hideImg}
        </>
    )
}

export default ButtonContent