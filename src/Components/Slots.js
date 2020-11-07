import React from "react"
import "./StyleSheets/Slots.css"

const Slots = ({redirect}) => {

    const slotsTiming = ["11:00","11:00","11:00","11:00","11:00","11:00","11:00","11:00","11:00","11:00","11:00","11:00"]

    return(
        <div className="container">
            <div className="mr-ev">
                <button className="mr-ev-btn active-date">Morning</button>
                <button className="mr-ev-btn">Evening</button>
            </div>
            <div className="slots-box">
                <div className="dates">
                    <button className="date active-date">Today</button>
                    <button className="date">Tomorrow</button>
                    <button className="date">Other</button>
                </div>
                <div className="slots-timing">
                    {slotsTiming.map((item)=>{
                        return(
                            <p>{item}</p>
                        )
                    })}
                </div>
                <button className="btn-lg" onClick={()=>redirect(true)}>Book Appointment</button>
            </div>
        </div>
    )
}

export default Slots