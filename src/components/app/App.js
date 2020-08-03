import React from 'react';
// import './App.css';

import { BrowserRouter as Router , Switch, Route} from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import Navbar from "../layout/Navbar";
import ProjectDetails from "../projects/ProjectDetail"
import SignIn from "../auth/SignIn"
import SignUp from "../auth/SignUp";
import CreateProject from "../projects/CreateProject";
import Base64 from "../fileUpload/components/app";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path = '/' exact component = {Dashboard} />
          <Route path = '/project/:id' component = {ProjectDetails}/>
          <Route path = '/signin' component = {SignIn}/>
          <Route path = '/signup' component = {SignUp}/>
          <Route path = '/new' component = {CreateProject}/>
          <Route path = '/predict' component = {Base64}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
