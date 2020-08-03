import React, {Component, } from "react";
import Navbar from "./Navbar";

class Header extends Component {
    render () {
        return (
            
            <header id="main-header" class="site-header">
                <div id="main-menu" class="wa-main-menu ae_menu">
                        {/* <!-- Menu --> */}
                        <div class="wathemes-menu relative">
                            {/* <!-- navbar --> */}
                            <Navbar/>
                            {/* <!-- navbar --> */}
                        </div>
                        {/* <!--  Menu --> */}
                </div>
            </header>

        )
    }
}

export default Header