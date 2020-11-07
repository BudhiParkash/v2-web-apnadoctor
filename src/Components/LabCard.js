import React from "react"
import { Link } from "react-router-dom"
import "./StyleSheets/HospitalCard.css"
import hospitalPicture from "../Images/hospital.jpg"

const LabCard = () =>{

    const lab_detail = {"name":"Arya Lab",
                        "picture":hospitalPicture,
                        "address":"sector 14, Hisar, Haryana sector 14, Hisar, Haryana",
                        "offers":"No offers",
                        "rating":"4.5",
                        "star":"./assets/star.svg"}

    return(
        <div className="container" style={{padding:"0"}}>
            <Link to={{pathname:"/lab-profile", state:lab_detail}} style={{textDecoration:"none"}}>
                <div className="hospital-card">
                    <div className="hospital-card-img">
                        <img src={lab_detail.picture} />
                    </div>
                    <div className="hospital-card-details">
                        <p className="hospital-name large-text">{lab_detail.name}</p>
                        <p className="hospital-detail large-text">{lab_detail.address}</p>
                        <div className="hospital-card-grid">
                            <p className="hospital-detail">{lab_detail.offers}</p>
                            {/* <div className="rating">
                                <span style={{float:"left"}}>{lab_detail.rating}</span> &nbsp;
                                <img src={lab_detail.star} width="11" style={{float:"right", marginTop:"2.3px"}}/> 
                            </div> */}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default LabCard