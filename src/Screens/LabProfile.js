import React, { useEffect, useState } from "react";
import hospitalPicture from "../Images/hospital.jpg"
import "../StyleSheets/HospitalProfile.css"
import {useLocation} from "react-router-dom"
import TestCard from "../Components/TestCard";

const LabProfile = () =>{

    const location = useLocation()
    const [rateArray, setRateArray] = useState([])
    const [halfStar, setHalfStar] = useState(false)

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    useEffect(() => {
        var ratings = String(location.state.rating).split(".")
        if(ratings.length === 1){
            setRateArray(new Array(parseInt(ratings[0])).fill(0))
        }else{
            setRateArray(new Array(parseInt(ratings[0])).fill(0))
            setHalfStar(true)
        }
    }, [])

    const openGmap = () =>{
        return "geo:"+"29.320476"+","+"75.636316"+"?q=<"+"29.320476"+">,<"+"75.636316"+">"+"(Arya Hospital)&z=zoom"
    }

    return(
        <>
            <div className="hos-profile-img">
                <img src={hospitalPicture} />
            </div>
            <div className="container hos-detail-container">
                <div className="hos-details">
                    <p className="hos-name">{location.state.name}</p>
                    {rateArray.map((item, index)=>{
                        return(
                            <div key={index} style={{display:"inline",marginRight:"0.15rem"}}>
                                <img src="./assets/star.svg" width="11" /> 
                            </div>
                            )
                        })
                    }
                    {halfStar ? <img src="./assets/rating.svg" width="11" /> : null}
                    <p className="hos-detail">{location.state.address}</p>
                    <div className="hos-contact">
                        <a href="tel:9306084676"><img src="./assets/telephone.svg" width="40" /></a>
                        <a href="sms://+919306084676"><img src="./assets/email.svg" width="40" /></a>
                        <a href={openGmap()}><img src="./assets/google-maps.svg" width="40" /></a>
                    </div>
                    <div className="doctors-list">
                        <p className="doctors-list-title">Following Are The Tests Available</p>
                        <div style={{margin:"2.5rem 0"}}>
                            <TestCard catName="X-Ray" gender="female" />
                            <TestCard catName="Blood" gender="male" />
                            <TestCard catName="Urine" gender="male" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LabProfile