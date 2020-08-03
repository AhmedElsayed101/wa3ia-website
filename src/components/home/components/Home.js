import React, {Component, Fragment} from "react";
import Header from "./Header";
import HomeBody from "./HomeBody";
import Footer from "./Footer";
import Navbar from "./Navbar";

class Home extends Component {

    render () {

        return(
            <Fragment>
                {/* <Navbar/>  */}
                <HomeBody/>   
                <Footer/>
            </Fragment>
        )
    }
}

export default Home