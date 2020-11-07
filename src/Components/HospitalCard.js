import React from "react"
import { Link } from "react-router-dom"
import "./StyleSheets/HospitalCard.css"

const HospitalCard = ({hospitalDetails}) =>{

    return(
        <div className="container" style={{padding:"0"}}>
            <Link to={{pathname:"/hospital-profile", state:hospitalDetails}} style={{textDecoration:"none"}}>
                <div className="hospital-card">
                    <div className="hospital-card-img">
                        <img src={`https://mydoctorapp.in/hospitals/${hospitalDetails._id}/avatar`} />
                    </div>
                    <div className="hospital-card-details">
                        <p className="hospital-name large-text">{hospitalDetails.hos_name}</p>
                        <p className="hospital-detail large-text">{hospitalDetails.specility_hos}</p>
                        <p className="hospital-detail large-text">{hospitalDetails.hospital_open}</p>
                        <p className="hospital-detail large-text">{hospitalDetails.address}</p>
                        <div className="hospital-card-grid">
                            {/* <p className="hospital-detail">{hos_detail.offers}</p> */}
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

export default HospitalCard