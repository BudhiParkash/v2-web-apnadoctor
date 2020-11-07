import React, { useEffect } from "react"
import HospitalCategories from "./Screens/HospitalCategories"
import SearchHospital from "./Screens/SearchHospital"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HospitalProfile from "./Screens/HospitalProfile"
import DoctorProfile from "./Screens/DoctorProfile"
import AppointmentForm from "./Screens/AppointmentForm"
import SearchLab from "./Screens/SearchLab"
import LabProfile from "./Screens/LabProfile"
import SearchOutputLab from "./Screens/SearchOutputLab"
import BookTest from "./Screens/BookTest"
import SearchOutputHospitals from "./Screens/SearchOutputHospitals"

const App = () =>{

  useEffect(()=>{
    localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVmMzlmMmZjM2E1ZDBkYWU4NDVjYmUiLCJpYXQiOjE2MDI1ODE5ODl9.waYncm0GNdKxUsF7BhuPxIKVEAAV5QmroxQG7Ga438Y")
  },[])

    return(
      <Router>
        <Switch>
          <Route exact path="/" component={SearchHospital} />
          <Route exact path="/hospital-categories" component={HospitalCategories} />
          <Route exact path="/hospital-profile" component={HospitalProfile} />
          <Route exact path="/doctor-profile" component={DoctorProfile} />
          <Route exact path="/appointment-form" component={AppointmentForm} />
          <Route exact path="/search-lab" component={SearchLab} />
          <Route exact path="/lab-Profile" component={LabProfile} />
          <Route exact path="/search-output-lab" component={SearchOutputLab} />
          <Route exact path="/book-test" component={BookTest} />
          <Route exact path="/search-output-hospital" component={SearchOutputHospitals} />
        </Switch>
      </Router>
    )
}

export default App