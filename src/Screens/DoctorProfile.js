import React, { useEffect, useState } from "react"
import Slots from "../Components/Slots"
import "../StyleSheets/DoctorProfile.css"
import photo from "../Images/Male.jpeg"
import Symptoms from "../Components/Symptoms"
import SureDialog from "../Components/SureDialog"

const DoctorProfile = () =>{

    const [symptom, setSymptom] = useState(false)
    const [sure, setSure] = useState(false)

    const openGmap = () =>{
        return "geo:"+"29.320476"+","+"75.636316"+"?q=<"+"29.320476"+">,<"+"75.636316"+">"+"(Arya Hospital)&z=zoom"
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <div className="container">
            <div className="category-container">
                <div className="doctor-flex">
                    <div className="doctor-img">
                        <img src={photo} />
                    </div>
                    <div className="doctor-details">
                        <p className="doc-name">Dr. Budhi Prakash</p>
                        <p className="doc-detail">Stomach Specialist</p>
                        <div className="doc-contact">
                            <a href="tel:9306084676"><img src="./assets/telephone.svg" width="40" /></a>
                            <a href="sms://+919306084676"><img src="./assets/email.svg" width="40" /></a>
                            <a href={openGmap()}><img src="./assets/google-maps.svg" width="40" /></a>
                        </div>
                    </div>
                </div>
                <div className="doc-about">
                    <p className="about-title">About</p>
                    <p className="about">Dr. Budhi Prakash is not a good doctor so stay away from him</p>
                </div>
                <div className="doc-about">
                    <p className="about-title">Book Appointment</p>
                    {symptom ?
                    sure ?
                    <SureDialog yes={setSymptom} no={setSymptom} sure={setSure} />
                    :
                    <Symptoms redirect={setSure} />
                    :
                    <Slots redirect={setSymptom}/>}
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile;