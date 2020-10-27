import React from "react"
import card from "../Images/Cards/Card.png"
import card1 from "../Images/Cards/Card1.png"
import card2 from "../Images/Cards/Card2.png"
import card3 from "../Images/Cards/Card3.png"
import "../StyleSheets/SearchHospital.css"
import {Link} from "react-router-dom"

const SearchHospital = () => {
    return(
        <>
        <div className="search-container">
            <div className="container">
                <p className="title-searchHospital">Find Your Consultation</p>
                <form className="search-form">
                    <label for="search-hospital">
                        <img src="./assets/icons/search.svg" width="17" />
                    </label>
                    <input type="text" id="search-hospital" className="search-inp" placeholder="Search" />
                </form>
            </div>
            <p className="title-hospital-carasoul">Categories</p>
        </div>
        <div className="hospital-carasoul">
            <div className="inner-div">
                <div className="carasoul-items"><img src={card} className="carasoul-img" /></div>
                <div className="carasoul-items"><img src={card1} className="carasoul-img" /></div>
                <div className="carasoul-items"><img src={card2} className="carasoul-img" /></div>
                <div className="carasoul-items"><img src={card3} className="carasoul-img" /></div>
                <div className="carasoul-items" style={{display:"flex",alignItems:"center", background:"white"}}>
                    <Link to="/hospital-categories" style={{textDecoration:"none"}}><p style={{color:"black", textAlign:"center"}}>Click Here For More</p></Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default SearchHospital