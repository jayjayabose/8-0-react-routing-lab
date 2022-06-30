import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees,
      owners,
      pets,
    };
  }

  render() {
    const { employees, owners, pets } = this.state;
    return (
      <div className="wrapper">
        <Router>
          <Nav />          
          <Routes>
            <Route path="/" element={ <Home employees={employees} owners={owners} pets={pets} />}/>
            <Route path="/staff" element={ <StaffList employees={employees}/> }/>
            <Route path="/pets" element={ <PetsList pets={pets} petType="cats"/> }/>
            <Route path="/pets/cats" element={ <PetsList pets={pets} petType="cats"/> }/>
            <Route path="/pets/dogs" element={ <PetsList pets={pets} petType="dogs"/> }/>
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

/*
  <StaffList employees={employees} />
            <PetsList pets={pets} />
*/
export default App;
