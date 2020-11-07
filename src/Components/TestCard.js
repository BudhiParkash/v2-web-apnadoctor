import React from "react"
import "./StyleSheets/HospitalCard.css"
import {Link} from "react-router-dom"

const TestCard = ({catName,gender}) =>{

    const test_detail = {"name":catName,
                        "picture":gender === "female" ? "./assets/doctor-female.svg" : "./assets/doctor-male.svg",
                        "fees":"250 Rs."}

    return(
        <div className="container" style={{padding:"0"}}>
            <Link to={{pathname:"/book-test", state:test_detail}} style={{textDecoration:"none"}}>
                <div className="hospital-card">
                    <div className="hospital-card-img">
                        <img src={test_detail.picture} />
                    </div>
                    <div className="hospital-card-details">
                        <p className="hospital-name large-text">{test_detail.name}</p>
                        <p className="hospital-detail">{test_detail.fees}</p>
                        <div className="hospital-card-grid">
                            {/* <div className="rating">
                                <span style={{float:"left"}}>{hos_detail.rating}</span> &nbsp;
                                <img src={hos_detail.star} width="11" style={{float:"right", marginTop:"2.3px"}}/> 
                            </div> */}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TestCard