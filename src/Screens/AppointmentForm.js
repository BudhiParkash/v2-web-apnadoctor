import React, { useEffect } from "react"
import "../StyleSheets/AppointmentForm.css"

const AppointmentForm = () =>{

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <div className="container">
                <form className="appointment-form">
                    <label htmlFor="Hospital Name">Hospital Name</label>
                    <input type="text" placeholder="Hospital Name" id="Hospital Name" />
                    <label htmlFor="Doctor Name">Doctor Name</label>
                    <input type="text" placeholder="Doctor Name" id="Doctor Name" />
                    <label htmlFor="Patient Name">Patient Name</label>
                    <input type="text" placeholder="Patient Name" id="Patient Name" />
                    <label htmlFor="Contact Number">Contact Number</label>
                    <input type="text" placeholder="Patient's Contact Number" id="Contact Number" />
                    <label htmlFor="Patient's Age">Patient's Age</label>
                    <input type="text" placeholder="Patient's Age" id="Patient's Age" />
                    <label htmlFor="Date Of Appointment">Date Of Appointment</label>
                    <input type="text" placeholder="Date Of Appointment" id="Date Of Appointment" />
                    <label htmlFor="Charges">Charges</label>
                    <input type="text" placeholder="Charges" id="Charges" />
                    <label htmlFor="Appointment Period">Appointment Period</label>
                    <input type="text" placeholder="Appointment Period" id="Appointment Period" />
                    <label htmlFor="Appointment Timing">Appointment Timing</label>
                    <input type="text" placeholder="Appointment Timing" id="Appointment Timing" />
                    <label htmlFor="Symptoms">Symptoms</label>
                    <input type="text" placeholder="Symptoms" id="Symptoms" />
                    <input type="submit" value="Book Appointment" />
                </form>
            </div>
    )
}

export default AppointmentForm