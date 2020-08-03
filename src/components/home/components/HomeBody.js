import React, {Component, Fragment} from "react";

class HomeBody extends Component {
    render() {
        return (
            <Fragment> 
                    <div id="content" class="site-content">
                        {/* <!-- Slider --> */}
                    <section id="slider-section" class="main_slider">
                        <div id="main_sliders" class="slider">
                            
                                    <figure class="slider_image">
                                        <img src="assets/img/slider/ww.jpg" alt="slider_img"/>
                                    </figure>
                                    <div class="slider-text text-center">
                                        <div class="container">
                                            <div class="row">
                                            <div class="vertical-center full-width text-center caption">
                                        
                                        <h1 class="cd-headline clip">
                                            <span class="blc">We Are </span>
                                            <span class="cd-words-wrapper" style={{width: 413}}>
                                            <b class="is-hidden">Wa3ia</b>
                                            <b class="is-visible">Wa3ia</b>
                                            
                                            </span>
                                        </h1>
                                    </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                
                        
                        
                        </div>
                        <div class="arrow">
                            <a href="#about-sec" data-scroll-nav="1" class="">
                                <i class="fa fa-angle-down"></i>
                            </a>
                        </div>
                    </section>
                {/* <!-- Slider --> */}
        {/* 		   
                <!-- =====================================
                ==== Start About --> */}
                    <section id="about-sec" class="about section-padding" data-scroll-index="1">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5 col-md-5">
                                    <div class="about-img mb-md50">
                                        <img src="assets/img/www.jpg" alt=""></img>
                                    </div>
                                </div>
                                <div class="col-lg-7 col-md-7">
                                    <div class="content">
                                        <br></br>
                                        <br></br>
                                        <h4 class="theme-section-title">We are Wa3ia</h4>
                                        <p> <span>Wa3ia</span> It is the first platform of its kind in this field, it uses machine learning to help detect breast cancer.
                                        It provides alot of features to help the patients and the doctors of breast cancer </p>
                                        <p> It is an android application to help those who suffers from breast, want to avoid it or the doctors who are treating breast cancer patinets.  </p>

                                        <div class="social-icons">
                                            <a href="#">
                                                <span class="icon"><i class="fa fa-facebook"></i></span>
                                            </a>
                                            <a href="#">
                                                <span class="icon"><i class="fa fa-twitter"></i></span>
                                            </a>
                                            <a href="#">
                                                <span class="icon"><i class="fa fa-instagram"></i></span>
                                            </a>
                                            <a href="#">
                                                <span class="icon"><i class="fa fa-behance"></i></span>
                                            </a>
                                            <a href="#">
                                                <span class="icon"><i class="fa fa-vimeo"></i></span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/* <!-- End Hero ====
                ======================================= -->

                <!-- Service --> */}
                <section id="service" class="service_sec">
                    <div class="container">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="service">
                                <div class="service-icon">
                                    <i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>
                                </div>
                                <div class="service-text">
                                    <h4 class="title">Consultation</h4>
                                    <p>We provide you with a verified connecion with your doctor</p>
                                </div>
                            </div>
                        </div>
                            <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="service">
                                <div class="service-icon">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </div>
                                <div class="service-text">
                                    <h4 class="title">Risk assessment tool</h4>
                                    <p>Provides you with your risk of being diagnosed with brest cancer</p>
                                </div>
                            </div>
                        </div>
                            <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="service">
                                <div class="service-icon">
                                    <i class="fa fa-truck" aria-hidden="true"></i>
                                </div>
                                <div class="service-text">
                                    <h4 class="title">5-year survival rate</h4>
                                    <p>We help the doctor to detect hte best treatment track </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
                {/* <!-- Service --> */}
            
                
                
            {/* <!-- Testimonial --> */}
            <section id="testimonial" class="testimonial_section">
                <div class="container">
                <div class="row">
                    <div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
                        <div class="client-say text-center">
                            <span><i class="fa fa-comment-o"></i></span>
                            <h2 class="theme_title">What Clients Say ?</h2>
                                <div class="testimonial_slider owl-carousel owl-theme owl-loaded">
                                <div class="item">
                                        <p>It's a very beatiful and user-friendly platform...</p>
                                        <a href="3"><strong class="name">Mohamed Ahmed</strong></a> 
                                    </div>
                                    <div class="item">
                                        <p>You are the best platforn ever , You help us alot...</p>
                                        <a href="3"><strong class="name">Adel Ibrahim</strong></a> 
                                    </div>
                                </div>
                        </div>	
                    </div>
                </div>	   
                </div>
            </section>
            {/* <!-- Testimonial --> */}
            
            </div>
            <div class="clear"></div>
            </Fragment>
        )
    }
}

export default HomeBody