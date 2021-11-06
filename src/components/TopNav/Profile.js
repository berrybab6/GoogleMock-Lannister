
import Camera from '../../images/camera.png'
import ProfileImg from '../../images/camera.jpg'
import AddProfile from '../../images/add_profile.png'
import './Profile.css'


const Profile = () =>{
    return(
        <>
        
           <div className="editImg">
                <img src={ProfileImg} alt=""  className="profileImg" />
                <div   className="camera">
                <img src={Camera} alt="" />
                </div>
           </div>
           <p className="fullname">Side Hustle</p>
           <p className="email">sidehustle@gmail.com</p>
           <a href="https://myaccount.google.com/?utm_source=OGB&utm_medium=act" className="ManageAcc">Manage your Google Account</a>
            <a href="https://myaccount.google.com/?utm_source=OGB&utm_medium=act" className="Addmail">
                <img src={AddProfile} alt="addUser Icon" />
                <p className="addText">Add Another Account</p>
            </a>
            <div className="signout">
                <button>Sign Out</button>
            </div>
            <p className="terms">Privacy Policy•Terms of Service</p>
            
        </>

    )
}
export default Profile