import React, {Component, Fragment} from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { handleSignOut } from "../../../actions/authAction";


class Navbar extends Component {
    render() {

        const {auth, dispatch, profile} = this.props
        return (
            <div class="navbar navbar-default" role="navigation">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="right-pink-shape">
                                                <div class="navbar-header col-sm-3">
                                                    {/* <!-- Button For Responsive toggle --> */}
                                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                                    <span class="sr-only">Toggle navigation</span> 
                                                    <span class="icon-bar"></span> 
                                                    <span class="icon-bar"></span> 
                                                    <span class="icon-bar"></span>
                                                    </button> 
                                                    {/* <!-- Logo --> */}
                                                    <NavLink to = '/' class="navbar-brand" href="index.html">
                                            
                                                    <h1 class="site_logo" style={{color:"grey", lineHeight : "1em"}}>Wa3ia</h1>
                                                    </NavLink>
                                                </div>
                                                {/* <!-- Navbar Collapse --> */}
                                                <div class="navbar-collapse collapse col-sm-7">
                                                    {/* <!-- nav --> */}
                                                    <ul class="nav navbar-nav">
                                                        {auth.uid ? 
                                                            <Fragment>

                                                            {/* <li><a href="#main_sliders" style = {{color : 'grey'}}>home</a></li> */}
                                                            <li><NavLink to = '/diagnosis' style = {{color : 'grey'}}>Diagnosis</NavLink></li>
                                                            <li><NavLink to = '/risk' style = {{color : 'grey'}}>Risk</NavLink></li>
                                                            <li><NavLink to = '/prediction' style = {{color : 'grey'}}>Prediction</NavLink></li>
                                                            <li><a href="login.html" style = {{color : 'grey'}}>Welcome, {auth.displayName? auth.displayName : profile.firstName}</a></li>
                                                            <li><a onClick = {() => {dispatch(handleSignOut())}} style = {{color : 'grey'}}>LogOut</a></li>


                                                            </Fragment>

                                                            :
                                                            <Fragment>
                                                            <li><NavLink to = '/diagnosis' style = {{color : 'grey'}}>Diagnosis</NavLink></li>
                                                            <li><NavLink to = '/risk' style = {{color : 'grey'}}>Risk</NavLink></li>
                                                            <li><NavLink to = '/prediction' style = {{color : 'grey'}}>Prediction</NavLink></li>
                                                            <li><NavLink to = '/signup' style = {{color : 'grey'}}>SignUp</NavLink></li>
                                                            <li><NavLink to = '/signin' style = {{color : 'grey'}}>LogIn</NavLink></li>
                                                    
                                                            </Fragment>
                                                        }
                                                        
                                                        
                                                    
                                                    </ul>
                                                </div>
                                                {/* <!-- navbar-collapse --> */}
                                                <div class="text-right col-sm-2 social_icon">
                                                    <ul class="social-icon">
                                                        {/* <li><a href="#" target="_blank"><i  style = {{color : 'grey', marginRight : 20}}>Welcome,Ahmed</i></a></li> */}
                                                        <li><a href="#" target="_blank"><i class="fa fa-facebook" style = {{color : 'grey'}}></i></a></li>
                                                        <li><a href="#" target="_blank"><i class="fa fa-twitter" style = {{color : 'grey'}}></i></a></li>
                                                        <li><a href="#" target="_blank"><i class="fa fa-google-plus" style = {{color : 'grey'}}></i></a></li>
                                                        <li><a href="#" target="_blank"><i class="fa fa-pinterest" style = {{color : 'grey'}}></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- col-md-12 --> */}
                                    </div>
                                    {/* <!-- row --> */}
                                </div>
                                {/* <!-- container --> */}
                            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar) 