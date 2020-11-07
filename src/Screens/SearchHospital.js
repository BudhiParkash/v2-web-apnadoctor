import React, {useEffect, useState} from "react"
import card from "../Images/Cards/Card.png"
import card1 from "../Images/Cards/Card1.png"
import card2 from "../Images/Cards/Card2.png"
import card3 from "../Images/Cards/Card3.png"
import "../StyleSheets/SearchHospital.css"
import {Link, Redirect} from "react-router-dom"
import HospitalCard from "../Components/HospitalCard"
import Axios from "axios"
import {hospital} from "../Api/hospital"
import {headers} from "../Api/headers"

const SearchHospital = () => {

    const [hospitals, setHospitals] = useState([])
    const [search, setSearch] = useState("")
    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        window.scrollTo(0,0);
        Axios.get(`${hospital}/?city=hisar`,{
            headers:headers
        })
        .then(res => setHospitals(res.data))
    },[])

    const getRedirect = (redirect) =>{
        if(redirect){
            return <Redirect to={{pathname:"/search-output-hospital", state:{"hospiSpeciality":search, "name":search}}} />
        }
    }

    return(
        <>
        {getRedirect(redirect)}
        <div className="search-container">
            <div className="container">
                <p className="title-searchHospital">Find Your Consultation</p>
                <form className="search-form" onSubmit={(e)=>{
                    e.preventDefault()
                    setRedirect(true)
                }}>
                    <label for="search-hospital">
                        <img src="./assets/icons/search.svg" width="17" />
                    </label>
                    <input type="text" id="search-hospital" className="search-inp" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
                    <input type="submit" style={{display:"none"}} />
                </form>
            </div>
            <p className="title-hospital-carasoul">Categories</p>
        </div>
        <div className="hospital-carasoul">
            <div className="inner-div">
                <Link to={{pathname:"search-output-hospital", state:{hospiSpeciality:"General",name:"Cold & Cough"}}}>
                    <div className="carasoul-items"><img src={card} className="carasoul-img" /></div>
                </Link>
                <Link to={{pathname:"search-output-hospital", state:{hospiSpeciality:"Heart",name:"Heart Specialist"}}}>
                    <div className="carasoul-items"><img src={card1} className="carasoul-img" /></div>
                </Link>
                <Link to={{pathname:"search-output-hospital", state:{hospiSpeciality:"Dental",name:"Dental Care"}}}>
                    <div className="carasoul-items"><img src={card2} className="carasoul-img" /></div>
                </Link>
                <Link to={{pathname:"search-output-hospital", state:{hospiSpeciality:"Eyes",name:"Eye Specialist"}}}>
                    <div className="carasoul-items"><img src={card3} className="carasoul-img" /></div>
                </Link>
                <div className="carasoul-items" style={{display:"flex",alignItems:"center", background:"white"}}>
                    <Link to="/hospital-categories" style={{textDecoration:"none"}}><p style={{color:"black", textAlign:"center"}}>Click Here For More</p></Link>
                </div>
            </div>
        </div>
        <div className="search-container">
            <p className="title-hospital-carasoul">Hospitals</p>
                {hospitals.map((item,index)=>{
                return(
                    <HospitalCard hospitalDetails={item} key={index}/>
                )
            })}
        </div>
    </>
    )
}

export default SearchHospital