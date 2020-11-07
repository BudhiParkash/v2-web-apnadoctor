import React, {useEffect} from "react"
import "../StyleSheets/SearchHospital.css"
import {Link, useLocation} from "react-router-dom"
import TestCard from "../Components/TestCard"

const SearchOutputLab = () => {

    const location = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0);
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
            <TestCard catName={location.state.name} gender="male" />
            <TestCard catName={location.state.name} gender="male" />
            <TestCard catName={location.state.name} gender="male" />
            <TestCard catName={location.state.name} gender="male" />
        </div>
    </>
    )
}

export default SearchOutputLab