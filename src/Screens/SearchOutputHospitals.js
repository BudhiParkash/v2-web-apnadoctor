import React, {useEffect, useState} from "react"
import "../StyleSheets/SearchHospital.css"
import {Link, useLocation} from "react-router-dom"
import TestCard from "../Components/TestCard"
import Axios from "axios"
import {search} from "../Api/hospital"
import {headers} from "../Api/headers"
import HospitalCard from "../Components/HospitalCard"

const SearchOutputHospitals = () => {

    const location = useLocation()
    const [hospitals, setHospitals] = useState([])

    useEffect(()=>{
        window.scrollTo(0,0);
        Axios.get(`${search}?hospi=${location.state.hospiSpeciality}`,{
            headers:headers
        })
        .then(res => setHospitals(res.data))
    },[])

    return(
        <>
        <div className="search-container">
            <div className="container">
                <p className="title-searchHospital">Find Your Consultation</p>
                <form className="search-form">
                    <label for="search-hospital">
                        <img src="./assets/icons/search.svg" width="17" />
                    </label>
                    <input type="text" id="search-hospital" className="search-inp" placeholder="Search" />
                </form>
            </div>
        </div>
        <div className="search-container">
        <p className="title-hospital-carasoul">Search Results For {location.state.name}</p>
            {hospitals.map((item, index) => {
                return(
                    <HospitalCard key={index} hospitalDetails={item} />
                )
            })}
        </div>
    </>
    )
}

export default SearchOutputHospitals