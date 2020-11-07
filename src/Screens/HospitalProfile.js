import Axios from "axios";
import React, { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import DoctorCard from "../Components/DoctorCard";
import "../StyleSheets/HospitalProfile.css"
import {hospital} from "../Api/hospital"
import {headers} from "../Api/headers"

const HospitalProfile = () =>{
    
    const location = useLocation()
    const [rateArray, setRateArray] = useState([])
    const [halfStar, setHalfStar] = useState(false)
    const [doctors, setDoctors] = useState([])
    var filter = document.getElementById("filter")
    var allDoctor = document.getElementById("all-doctor")

    useEffect(()=>{
        window.scrollTo(0,0);
        Axios.get(`${hospital}/doctor/${location.state._id}`,{
            headers:headers
        })
        .then(res => {
            setDoctors(res.data)})
    },[])

    useEffect(() => {
        var ratings = String(location.state.finalRating).split(".")
        if(ratings.length === 1){
            setRateArray(new Array(parseInt(ratings[0])).fill(0))
        }else{
            setRateArray(new Array(parseInt(ratings[0])).fill(0))
            setHalfStar(true)
        }
    }, [])

    const activeFilter = ()=>{
        if(filter.getAttribute("class") === "filter-btn active-filter"){
            allDoctor.setAttribute("class","filter-btn active-filter")
            filter.setAttribute("class","filter-btn")
        }else{
            allDoctor.setAttribute("class","filter-btn")
            filter.setAttribute("class","filter-btn active-filter")
        }
    }

    const openGmap = () =>{
        return "geo:"+"29.320476"+","+"75.636316"+"?q=<"+"29.320476"+">,<"+"75.636316"+">"+"(Arya Hospital)&z=zoom"
    }

    return(
        <>
            <div className="hos-profile-img">
                <img src={`https://mydoctorapp.in/hospitals/${location.state._id}/avatar`} />
            </div>
            <div className="" style={{position:"fixed",width:"100%",height:"50%",background:"white",top:"50%",left:"0",zIndex:"-1"}}></div>
            <div className="container hos-detail-container">
                <div className="hos-details">
                    <p className="hos-name">{location.state.hos_name}</p>
                    {rateArray.map((item, index)=>{
                        return(
                            <div key={index} style={{display:"inline",marginRight:"0.15rem"}}>
                                <img src="./assets/star.svg" width="11" /> 
                            </div>
                            )
                        })
                    }
                    {halfStar ? <img src="./assets/rating.svg" width="11" /> : null}
                    <p className="hos-detail">{location.state.specility_hos} </p>
                    <p className="hos-detail">{location.state.address}</p>
                    <div className="hos-contact">
                        <a href={`tel:${location.state.contact}`}><img src="./assets/telephone.svg" width="40" /></a>
                        <a href={`sms://${location.state.contact}`}><img src="./assets/email.svg" width="40" /></a>
                        <a href={openGmap()}><img src="./assets/google-maps.svg" width="40" /></a>
                    </div>
                    <div className="doctors-list">
                        <p className="doctors-list-title">Doctors List</p>
                        <p className="tagline">Filter Doctors List By Their Specialities</p>
                        <div className="doctors-list-filter">
                            <button className="filter-btn active-filter" id="filter" onClick={()=>activeFilter()}>{location.state.specility_hos}</button>
                            <button className="filter-btn" id="all-doctor" onClick={()=>activeFilter()}>All Doctors</button>
                        </div>
                        <div style={{margin:"2.5rem 0"}}>
                            {doctors.map((item,index)=>{
                                return(
                                    <DoctorCard doctorDetails={item} key={index} />
                            )})}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HospitalProfile