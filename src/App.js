import React from "react"
import HospitalCategories from "./Screens/HospitalCategories"
import SearchHospital from "./Screens/SearchHospital"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

const App = () =>{
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={SearchHospital} />
          <Route exact path="/hospital-categories" component={HospitalCategories} />
        </Switch>
      </Router>
    )
}

export default App