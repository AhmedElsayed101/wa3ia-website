import React, {Component, Fragment} from "react";

class Navbar extends Component {
    render() {
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
                                                    <a class="navbar-brand" href="index.html">
                                            
                                                    <h1 class="site_logo" style={{color:"grey", lineHeight : "1em"}}>Wa3ia</h1>
                                                    </a>
                                                </div>
                                                {/* <!-- Navbar Collapse --> */}
                                                <div class="navbar-collapse collapse col-sm-7">
                                                    {/* <!-- nav --> */}
                                                    <ul class="nav navbar-nav">
                                                        <li><a href="#main_sliders" style = {{color : 'grey'}}>home</a></li>
                                                        <li><a href="#about-sec" style = {{color : 'grey'}}>About us</a></li>
                                                        <li><a href="#service" style = {{color : 'grey'}}>Service</a></li>
                                                        <li><a href="login.html" style = {{color : 'grey'}}>login</a></li>
                                                    
                                                    </ul>
                                                </div>
                                                {/* <!-- navbar-collapse --> */}
                                                <div class="text-right col-sm-2 social_icon">
                                                    <ul class="social-icon">
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


export default Navbar