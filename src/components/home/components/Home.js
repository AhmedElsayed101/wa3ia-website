import React, {Component, Fragment} from "react";
import { connect } from "react-redux";

import HomeBody from "./HomeBody";
import Footer from "./Footer";

class Home extends Component {

    render () {

        return(
            <Fragment>
                {/* <Preloader/>  */}
                <HomeBody/>   
                <Footer/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(Home)