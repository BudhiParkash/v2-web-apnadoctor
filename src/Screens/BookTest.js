import React from "react"

const BookTest = () =>{
    return(
        <div className="container" style={{position:"fixed",bottom:"0",left:"0",width:"100%",display:"flex",justifyContent:"space-around",marginBottom:"1rem"}}>
            <button style={{background:"#d20808",color:"white",border:"0",borderRadius:"8px",width:"45%",fontSize:"1.1rem",padding:"0.5rem 0.15rem",marginRight:"0.1rem"}}>Test From<br></br> Home</button>
            <button style={{background:"#d20808",color:"white",border:"0",borderRadius:"8px",width:"45%",fontSize:"1.1rem",padding:"0.5rem 0.15rem"}}>Test From <br></br> Lab</button>
        </div>
    )
}

export default BookTest