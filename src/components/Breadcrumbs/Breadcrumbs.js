import React from "react";

const Breadcrumbs = () => {
    return (
        <>
            {/* Breadcrumbs Section Start  */}
            <div className="gamfi-breadcrumbs-section ProjectClasicBreadCumSect">
                <div className="ProjectClasicBreadCumBG">
                    <div className="ProjectClasicBreadCumImg">
                        <img
                            src="assets/images/bg/projectClasicBreadCambg.png"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="Project_clasicSliderSect">
                        <div className="liveProoject_Headings">
                            <h2 className="mb-50">SEED & PRIVATE SALE</h2>
                            <div className="video__icon">
                                <div className="circle--outer"></div>
                                <div className="circle--inner"></div>
                            </div>
                        </div>
                        <div className="slideshow-container">
                            {/* <div className="mySlides fade">
                            <div className="ProjectClasicSliderBG">
                                <div className="ProjectClasicSliderContent">
                                    <div className="ProjectClasicSliderLeftSect">
                                        <div className="ProjectClasicSlider_ImgAndTitleSect">
                                            <a href="project-details.html"><img src="assets/images/project/ninga-5.png" alt="img" className="img-fluid" /></a>
                                            <div className="ProjectClasicSlider_TextSect">
                                                <h3><a href="project-details.html">Pixels Run</a></h3>
                                                <p>price (PRC) = 0.22 BUSD</p>
                                            </div>
                                        </div>
                                        <div className="ProjectClasicSlider_LeftRiseSect">
                                            <div className="ProjectClasicSlider_RiseCeontent">
                                                <span>Targeted Raise</span>
                                                <h2>100,000 BUSD</h2>
                                            </div>
                                            <div className="ProjectClasicSlider_RiseCeontent">
                                                <span>Total Raised</span>
                                                <h2>75,999.70 BUSD</h2>
                                            </div>
                                        </div>
                                        <div className="ProjectClasicSlider_ClaimBtn">
                                            <button className="hover-shape" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                CLAIM TOKEN
                                                <span className="hover-shape1"></span>
                                                <span className="hover-shape2"></span>
                                                <span className="hover-shape3"></span>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="ProjectClasicSliderCenterSect">
                                        <span><img src="assets/images/project/icon-2.png" alt="img" className="img-fluid" /></span>
                                        <div className="ProjectClasicSlider_progressSect">
                                            <div className="Progress_container">
                                                <div className="progress">
                                                    <p className="title timer" data-from="0" data-to="78" data-speed="1500"><span className="counter">78</span>%</p>
                                                    <div className="overlay"></div>
                                                    <div className="left"></div>
                                                    <div className="right"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="ProjectClasicSlider_RightSect">
                                        <div className="ProjectClasicSlider_RightTimer">
                                            <h2>SALE END IN</h2>
                                            <div className="price-counter">
                                                <div className="timer timer_3">
                                                    <ul>
                                                        <li className="days">3<span>D</span></li>
                                                        <li className="hours">01<span>H</span></li>
                                                        <li className="minutes">13<span>M</span></li>
                                                        <li className="seconds">56<span>S</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ProjectClasicSlider_Right_Access_AllocationSect">
                                            <div className="Access_AllocationText">
                                                <span>Access</span>
                                                <h2>Public Access</h2>
                                            </div>
                                            <div className="Access_AllocationText">
                                                <span>Allocation</span>
                                                <h2>500 BUSD Max</h2>
                                            </div>
                                        </div>
                                        <ul className="ProjectClasicSliderSocialLinks">
                                            <li><a href="#"><i className="icon-telegram"></i></a></li>
                                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                                            <li><a href="#"><i className="icon-discord"></i></a></li>
                                            <li><a href="#"><i className="icon-medium"></i></a></li>
                                            <li><a href="#"><i className="icon-world"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>  */}

                            <div className="mySlides fade">
                                <div className="ProjectClasicSliderBG">
                                    <div className="ProjectClasicSliderContent">
                                        <div className="ProjectClasicSliderLeftSect">
                                            <div className="ProjectClasicSlider_ImgAndTitleSect">
                                                <a href="project-details.html">
                                                    <img
                                                        src="assets/images/project/ninga-4.png"
                                                        alt="img"
                                                        className="img-fluid"
                                                    />
                                                </a>
                                                <div className="ProjectClasicSlider_TextSect">
                                                    <h3>
                                                        <a href="project-details.html">
                                                            Galaxy War
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        price (GAC) = 0.59 BUSD
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <div className="ProjectClasicSlider_LeftRiseSect">
                                                <div className="ProjectClasicSlider_RiseCeontent">
                                                    <span>Targeted Raise</span>
                                                    <h2>300,000 BUSD</h2>
                                                </div>
                                                <div className="ProjectClasicSlider_RiseCeontent">
                                                    <span>Total Raised</span>
                                                    <h2>56,499.70 BUSD</h2>
                                                </div>
                                            </div> */}
                                            <div className="ProjectClasicSlider_ClaimBtn">
                                                <input type="text" placeholder="Amount to Buy" />
                                            </div>
                                            <div className="ProjectClasicSlider_ClaimBtn">
                                                <button
                                                    className="hover-shape"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                >
                                                    BUY TOKEN
                                                    <span className="hover-shape1"></span>
                                                    <span className="hover-shape2"></span>
                                                    <span className="hover-shape3"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="ProjectClasicSliderCenterSect">
                                            <span>
                                                <img
                                                    src="assets/images/project/icon-3.png"
                                                    alt="img"
                                                    className="img-fluid"
                                                />
                                            </span>
                                            <div className="ProjectClasicSlider_progressSect">
                                                <div className="Progress_container">
                                                    <div className="progress">
                                                        <p
                                                            className="title timer"
                                                            data-from="0"
                                                            data-to="88"
                                                            data-speed="1500"
                                                        >
                                                            <span className="counter">
                                                                88
                                                            </span>
                                                            %
                                                        </p>
                                                        <div className="overlay"></div>
                                                        <div className="left"></div>
                                                        <div className="right"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ProjectClasicSlider_RightSect">
                                            <div className="ProjectClasicSlider_RightTimer">
                                                <h2>SALE END IN</h2>
                                                <div className="price-counter">
                                                    <div className="timer timer_2">
                                                        <ul>
                                                            <li className="days">
                                                                3<span>D</span>
                                                            </li>
                                                            <li className="hours">
                                                                01<span>H</span>
                                                            </li>
                                                            <li className="minutes">
                                                                13<span>M</span>
                                                            </li>
                                                            <li className="seconds">
                                                                56<span>S</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="ProjectClasicSlider_Right_Access_AllocationSect">
                                                <div className="Access_AllocationText">
                                                    <span>Access</span>
                                                    <h2>Public Access</h2>
                                                </div>
                                                <div className="Access_AllocationText">
                                                    <span>Allocation</span>
                                                    <h2>500 BUSD Max</h2>
                                                </div>
                                            </div> */}
                                            <ul className="ProjectClasicSliderSocialLinks">
                                                {/* <li>
                                                    <a href="#">
                                                        <i className="icon-telegram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icon-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icon-discord"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icon-medium"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icon-world"></i>
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="mySlides fade">
                            <div className="ProjectClasicSliderBG">
                                <div className="ProjectClasicSliderContent">
                                    <div className="ProjectClasicSliderLeftSect">
                                        <div className="ProjectClasicSlider_ImgAndTitleSect">
                                            <a href="project-details.html"><img src="assets/images/project/ninga-3.png" alt="img" className="img-fluid" /></a>
                                            <div className="ProjectClasicSlider_TextSect">
                                                <h3><a href="project-details.html">Meta World</a></h3>
                                                <p>PRICE (MST) = 0.33 BUSD</p>
                                            </div>
                                        </div>
                                        <div className="ProjectClasicSlider_LeftRiseSect">
                                            <div className="ProjectClasicSlider_RiseCeontent">
                                                <span>Targeted Raise</span>
                                                <h2>700,000 BUSD</h2>
                                            </div>
                                            <div className="ProjectClasicSlider_RiseCeontent">
                                                <span>Total Raised</span>
                                                <h2>76,499.70 BUSD</h2>
                                            </div>
                                        </div>
                                        <div className="ProjectClasicSlider_ClaimBtn">
                                            <button className="hover-shape" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                CLAIM TOKEN
                                                <span className="hover-shape1"></span>
                                                <span className="hover-shape2"></span>
                                                <span className="hover-shape3"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ProjectClasicSliderCenterSect">
                                        <span><img src="assets/images/project/icon-4.png" alt="img" className="img-fluid" /></span>
                                        <div className="ProjectClasicSlider_progressSect">
                                            <div className="Progress_container">
                                                <div className="progress">
                                                    <p className="title timer" data-from="0" data-to="90" data-speed="1500"><span className="counter">90</span>%</p>
                                                    <div className="overlay"></div>
                                                    <div className="left"></div>
                                                    <div className="right"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ProjectClasicSlider_RightSect">
                                        <div className="ProjectClasicSlider_RightTimer">
                                            <h2>SALE END IN</h2>
                                            <div className="price-counter">
                                                <div className="timer timer_1">
                                                    <ul>
                                                        <li className="days">3<span>D</span></li>
                                                        <li className="hours">01<span>H</span></li>
                                                        <li className="minutes">13<span>M</span></li>
                                                        <li className="seconds">56<span>S</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ProjectClasicSlider_Right_Access_AllocationSect">
                                            <div className="Access_AllocationText">
                                                <span>Access</span>
                                                <h2>Public Access</h2>
                                            </div>
                                            <div className="Access_AllocationText">
                                                <span>Allocation</span>
                                                <h2>700 BUSD Max</h2>
                                            </div>
                                        </div>
                                        <ul className="ProjectClasicSliderSocialLinks">
                                            <li><a href="#"><i className="icon-telegram"></i></a></li>
                                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                                            <li><a href="#"><i className="icon-discord"></i></a></li>
                                            <li><a href="#"><i className="icon-medium"></i></a></li>
                                            <li><a href="#"><i className="icon-world"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>  */}

                            {/* <a className="prev ProjectClasicPrev" onclick="plusSlides(-1)"><img src="assets/images/icons/slide-left.png" alt="❮" className="img-fluid" /></a>
                        <a className="next ProjectClasicNxt" onclick="plusSlides(1)"><img src="assets/images/icons/slide-right.png" alt="❯" className="img-fluid" /></a>  */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumbs  Section End  */}
        </>
    );
};

export default Breadcrumbs;
