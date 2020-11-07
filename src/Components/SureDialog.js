import React, { useState } from "react"

const SureDialog = ({yes,no,sure}) => {

    const [edit, setEdit] = useState(false)

    const submitForm = (e) =>{
        e.preventDefault()
        setEdit(false)
    }

    return(
        <div className="container" style={{width:"90%",margin:"auto",marginTop:"1.7rem",boxShadow:"1px 1px 3px grey",padding:"1rem 1rem"}}>
            {edit ? 
            <form onSubmit={(e)=>submitForm(e)}>
                <input type="text" id="name" placeholder="Enter name"  style={{border:"0",borderBottom:"1px solid black",height:"2rem",fontSize:"1rem",padding:"0 0.1rem",outline:"none",width:"90%",marginBottom:"0.5rem"}}/><br></br>
                <input type="text" id="phone number" placeholder="Enter Phone Number"  style={{border:"0",borderBottom:"1px solid black",height:"2rem",fontSize:"1rem",padding:"0 0.1rem",outline:"none",width:"90%",marginBottom:"0.5rem"}}/><br></br>
                <input type="text" id="address" placeholder="Enter Address"  style={{border:"0",borderBottom:"1px solid black",height:"2rem",fontSize:"1rem",padding:"0 0.1rem",outline:"none",width:"90%",marginBottom:"0.5rem"}}/><br></br>
                <input type="submit" value="Done"  style={{width:"45%",background:"#d20808",color:"white",border:"0",borderRadius:"8px",fontSize:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",marginTop:"1rem"}}/>
            </form>  
            : 
            <>
            <p style={{fontSize:"1.2rem",fontWeight:"bold"}}>Are you sure you want to book this appointment ?</p>
            <div className="" style={{fontSize:"1rem",margin:"1rem 0",display:"flex",justifyContent:"space-between"}}>
                <div className="" style={{width:"60%",wordWrap:"break-word"}}>
                    <p>Username</p>
                    <p>9306084676</p>
                    <p>24/13, Rajiv Colonyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <button style={{height:"2rem",width:"5rem",background:"#d20808",color:"white",border:"0",borderRadius:"8px"}} onClick={()=>setEdit(true)}>Edit</button>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"1rem"}}>
                <button className="" style={{marginTop:"1rem"}} onClick={()=>
                {
                    yes(false)
                    sure(false)
                }} style={{width:"45%",background:"#d20808",color:"white",border:"0",borderRadius:"8px",fontSize:"1.2rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}}>Yes</button>
                <button className="" style={{marginTop:"1rem"}} onClick={()=>
                {
                    no(false)
                    sure(false)
                }} style={{width:"45%",background:"#d20808",color:"white",border:"0",borderRadius:"8px",fontSize:"1.2rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}}>No</button>
            </div></>}
        </div>
    )
}

export default SureDialog