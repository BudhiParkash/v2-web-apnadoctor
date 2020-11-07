import React from "react"
import "./StyleSheets/HospitalCard.css"
import {Link} from "react-router-dom"

const DoctorCard = ({doctorDetails}) =>{

    return(
        <div className="container" style={{padding:"0"}}>
            <Link to={{pathname:"/doctor-profile", state:doctorDetails}} style={{textDecoration:"none"}}>
                <div className="hospital-card">
                    <div className="hospital-card-img">
                        <img src={doctorDetails.gender === "Female" ? "./assets/doctor-female.svg" : "./assets/doctor-male.svg"} />
                    </div>
                    <div className="hospital-card-details">
                        <p className="hospital-name large-text">{doctorDetails.doc_name}</p>
                        <p className="hospital-detail large-text">{doctorDetails.speciality}</p>
                        <p className="hospital-detail large-text">{doctorDetails.morning} & {doctorDetails.evening}</p>
                        <p className="hospital-detail">{doctorDetails.charges}</p>
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

export default DoctorCard