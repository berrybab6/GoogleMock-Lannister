
import Map from '../../images/google_map.svg'
import Account from '../../images/add_profile.jpg'
import Search from '../../images/Google.svg'
import './Services.css'
const Services = () =>{
    const details = [
        {image: Account,title: "Account"}, {image: Search,title: "Search"},{image: Map,title: "Maps"},
        {image: Map,title: "YouTube"}, {image: Map,title: "Play"},{image: Map,title: "News"},
        {image: Map,title: "Gmail"}, {image: Map,title: "Meets"},{image: Map,title: "Chat"},
        {image: Map,title: ""}, {image: Map,title: ""},{image: Map,title: ""},
        {image: Map,title: ""}, {image: Map,title: ""},{image: Map,title: ""},
        {image: Map,title: ""}, {image: Map,title: ""},{image: Map,title: ""},
        {image: Map,title: ""}, {image: Map,title: ""},{image: Map,title: ""},
        {image: Map,title: ""}, {image: Map,title: ""},{image: Map,title: ""},
        {image: Map,title: ""}, {image: Map,title: ""},{image: Map,title: ""},
    ]
    return(
        <div className="services">
            {details.map( detail => {
                return(
                <div>
                    <img src={detail.image} alt="missing" />
                    <p className="serviceText">{detail.title}</p>
                </div>
                )
            })}

            <a href="/">More From Google</a>
        </div>
    )
}
export default Services