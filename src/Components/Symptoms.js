import React from "react"

const Symptoms = ({redirect}) => {
    return(
        <div className="container" style={{width:"90%",margin:"auto",marginTop:"1.7rem",boxShadow:"1px 1px 3px grey",padding:"1rem 1rem"}}>
            <label htmlFor="symptoms" style={{fontSize:"1.2rem",fontWeight:"bold"}}>Symptoms</label><br></br>
            <input type="text" style={{width:"95%",padding:"0 0.3rem 0 0.3rem",height:"3rem",border:"0",borderBottom:"1px solid black",outline:"none",fontSize:"1rem"}} />
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"1rem"}}>
                <button className="" style={{marginTop:"1rem"}} onClick={()=>redirect(true)} style={{width:"45%",background:"#d20808",color:"white",border:"0",borderRadius:"8px",fontSize:"1.2rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}}>Next</button>
                <button className="" style={{marginTop:"1rem"}} onClick={()=>redirect(true)} style={{width:"45%",background:"#d20808",color:"white",border:"0",borderRadius:"8px",fontSize:"1.2rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}}>Skip</button>
            </div>
        </div>
    )
}

export default Symptoms