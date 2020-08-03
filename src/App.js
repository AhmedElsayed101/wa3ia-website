import React, {Fragment} from 'react';
// import './App.css';
import Preloader from "./components/home/components/Preloader";
import Home from './components/home/components/Home';
import Navbar from './components/home/components/Navbar';
import Header from './components/home/components/Header';
import SignIn from "./components/auth/SignIn";



function App() {
  return (
    <Fragment >
      <Preloader/>
      <Header/>      
      <Home/>
    </Fragment>
  );
}

export default App;
