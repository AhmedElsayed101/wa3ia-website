import React, {Fragment} from 'react';
import  LoadingBar  from "react-redux-loading";

import Preloader from "./components/home/components/Preloader";
import Home from './components/home/components/Home';
import Navbar from './components/home/components/Navbar';
import Header from './components/home/components/Header';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import DiagnosisPage from "./components/diagnosis/DiagnosisPage";
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Footer from './components/home/components/Footer';
import Prediction from "./components/fileUpload/components/app";
import RiskPage from "./components/risk/RiskPage";


function App() {
  return (
    <Router>
    <Fragment>
        <LoadingBar/>
        <Preloader/>
        <Header/>
      <Switch>
      
        <Route path = '/' exact component = {Home} />
        {/* <Route path = '/project/:id' component = {ProjectDetails}/> */}
        <Route path = '/signin' component = {SignIn}/>
        <Route path = '/signup' component = {SignUp}/>
        <Route path = '/diagnosis' component = {DiagnosisPage} />
        <Route path = '/prediction' component = {Prediction}/>
        <Route path = '/risk' component = {RiskPage}/>



      </Switch>
      {/* <Footer/> */}
    </Fragment>
  </Router>
  );
}

export default App;
