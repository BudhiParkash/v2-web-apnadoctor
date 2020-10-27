import React, { useEffect } from "react"
import "../StyleSheets/HospitalCategories.css"

const HospitalCategories = () =>{

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const categories = [{'name':'Eyes',
                         'value':'Eyes',
                         'img':'./assets/icons/eyes.svg'},
                        {'name':'Psychiatrist',
                         'value':'Brain',
                         'img':'./assets/icons/brain.svg'},
                        {'name':'Dental',
                         'value':'Dental',
                         'img':'./assets/icons/dental.svg'},
                        {'name':'Orthopedic',
                         'value':'Bone',
                         'img':'./assets/icons/bone.svg'},
                        {'name':'Child Care',
                         'value':'Child',
                         'img':'./assets/icons/child.svg'},
                        {'name':'Cardiologist',
                         'value':'Heart',
                         'img':'./assets/icons/heart.svg'},
                        {'name':'Homeopathy',
                         'value':'Homeopathy',
                         'img':'./assets/icons/homeo.svg'},
                        {'name':'Kidney',
                         'value':'Kidney',
                         'img':'./assets/icons/kidney.svg'},
                        {'name':'Gynecologist',
                         'value':'Ladies',
                         'img':'./assets/icons/lady.svg'},
                        {'name':'ENT',
                         'value':'Nose',
                         'img':'./assets/icons/nose.svg'},
                        {'name':'General physician',
                         'value':'General Physician',
                         'img':'./assets/icons/pshiotharapy.svg'},
                        {'name':'sexologist',
                         'value':'Sexologist',
                         'img':'./assets/icons/rog.svg'},
                        {'name':'Skin',
                         'value':'Skin',
                         'img':'./assets/icons/skin.svg'},
                        {'name':'Multispeciality',
                         'value':'Multi',
                         'img':'./assets/icons/slip.svg'},
                         {'name':'other',
                          'value':'Other',
                         'img':'./assets/icons/hospital.svg'},]

    return(
        <>
        <div className="category-container">
            <div className="container">
                <form className="search-form">
                    <input type="text" className="search-inp" placeholder="Eg. Arya Hospital" />
                    <button type="submit" className="search-btn"><img src="./assets/icons/search.svg" width="20"></img></button>
                </form>
                <div className="search-heading">
                    <p>Seacrh By Speciality</p>
                </div>
                <div className="card-group">
                    {categories.map((item,index)=>{
                        return(
                            <div className="card" key={index}>
                                <img className="card-img" src={item.img}></img>
                                <p className="card-name">{item.name} <br />
                                <span className="card-desc">320 Rs.</span></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default HospitalCategories