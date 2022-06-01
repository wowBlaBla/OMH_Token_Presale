import React from "react";

const Header = () => {
    return (
        <>
            {/* Header Start */}
            <header
                id="gamfi-header"
                className="gamfi-header-section default-header"
            >
                <div className="menu-area menu-sticky">
                    <div className="container">
                        <div className="heaader-inner-area d-flex justify-content-between align-items-center">
                            <div className="gamfi-logo-area d-flex justify-content-between align-items-center">
                                <div className="logo">
                                    <a href="#">
                                        <img
                                            src="assets/images/logo.png"
                                            alt="logo"
                                            className="logo-img"
                                        />
                                    </a>
                                </div>
                                <div className="header-menu">
                                <ul className="nav-menu">
                                    <li><a href="#">Presale</a>
                                        {/* <ul className="sub-menu">
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index2.html">Home 2</a></li>
                                            <li><a href="index-V3.html">Home 3</a></li>
                                            <li><a href="index-V4.html">Home 4</a></li>
                                        </ul> */}
                                    </li>
                                    {/*  <li><a href="project.html">Projects</a>
                                        <ul className="sub-menu">
                                            <li><a href="Project-Clasic.html">Projects Clasic 1</a></li>
                                            <li><a href="Project-Clasic-2.html">Projects Clasic 2</a></li>
                                            <li><a href="project.html">Projects List</a></li>
                                            <li><a href="explore.html">Projects Grid</a></li>
                                            <li><a href="calendar.html">Project Calendar</a></li>
                                            <li><a href="project-details.html">Project Details 1</a></li>
                                            <li><a href="Project_Details2.html">Project Details 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="staking.html">Staking</a>
                                        <ul className="sub-menu">
                                            <li><a href="staking.html">Staking 1</a></li>
                                            <li><a href="staking-2.html">Staking 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="megaMenuHov"><a href="#">Pages +</a>
                                        <div className="Gamfi_Mega_Menu_Sect">
                                            <div className="Gamfi_Mega_Menu">
                                                <div className="container">
                                                    <div className="MegaMenuContent">
                                                        <div className="megaMenuLeftSect">
                                                            <div className="megaMenuLeftBgSect">
                                                                <div className="megaMenuLeftBg">
                                                                    <div className="megaMenuLeftBgColor">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="HomeMenuList">
                                                                <div className="HomeMenuListHeadings">
                                                                    <h2>Home Pages</h2>
                                                                    <span><img src="assets/images/megaMenu/border-buttomShape.png" alt="" className="img-fluid" /></span>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <a href="index.html">01 <span><img src="assets/images/megaMenu/index-V1.png" alt="Index V1" className="img-fluid" /></span></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="index2.html">02 <span><img src="assets/images/megaMenu/index-V2.png" alt="Index V2" className="img-fluid" /></span></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="index-V3.html">03 <span><img src="assets/images/megaMenu/index-V3.png" alt="Index V3" className="img-fluid" /></span></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="index-V4.html">04 <span><img src="assets/images/megaMenu/index-V4.png" alt="Index V3" className="img-fluid" /></span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="megaMenuRightSect">
                                                            <div className="">

                                                            </div>
                                                            <div className="Menu_column ProjectColumn">
                                                                <div className="menuHeadings">
                                                                    <h2>PROJECT PAGES</h2>
                                                                    <span><img src="assets/images/megaMenu/border-buttomShape.png" alt="" className="img-fluid" /></span>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="Project-Clasic.html">Projects Clasic 1</a> <span className="hot">HOT</span></li>
                                                                    <li><a href="Project-Clasic-2.html">Projects Clasic 2</a> <span className="new">NEW</span></li>
                                                                    <li><a href="project.html">Projects List</a></li>
                                                                    <li><a href="explore.html">Project Grid</a></li>
                                                                    <li><a href="calendar.html">Project Calendar</a></li>
                                                                    <li><a href="project-details.html">Project Details 1</a></li>
                                                                    <li><a href="Project_Details2.html">Project Details 2</a> <span className="new">NEW</span></li>
                                                                    <li><a href="igo-ranking.html">Project Ranking</a></li>
                                                                </ul>
                                                            </div>

                                                            <div className="Two_menuColumn">
                                                                <div className="Menu_column ProjectColumn">
                                                                    <div className="menuHeadings">
                                                                        <h2>STAKE & Farm</h2>
                                                                        <span><img src="assets/images/megaMenu/border-buttomShape.png" alt="" className="img-fluid" /></span>
                                                                    </div>
                                                                    <ul>
                                                                        <li><a href="staking.html">Staking One</a></li>
                                                                        <li><a href="staking-2.html">Staking Two</a></li>
                                                                        <li><a href="farm.html">Farming</a></li>
                                                                        <li><a href="leaderboard.html">Leaderboard</a></li>
                                                                    </ul>
                                                                </div>

                                                                <div className="Menu_column ProjectColumn">
                                                                    <div className="menuHeadings">
                                                                        <h2>other Pages</h2>
                                                                        <span><img src="assets/images/megaMenu/border-buttomShape.png" alt="" className="img-fluid" /></span>
                                                                    </div>
                                                                    <ul>
                                                                        <li><a href="Get-In-touch.html">Contact Us</a></li>
                                                                        <li><a href="roadMap.html">Roadmap</a></li>
                                                                        <li><a href="FAQ.html">FAQs</a> <span className="new">NEW</span></li>
                                                                        <li><a href="igo-apply.html">Apply For Project</a></li>
                                                                        <li><a href="teamdetails.html">Team Details</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className="Two_menuColumn">
                                                                <div className="Menu_column ProjectColumn">
                                                                    <div className="menuHeadings">
                                                                        <h2>TOKENOMIC & TIER</h2>
                                                                        <span><img src="assets/images/megaMenu/border-buttomShape.png" alt="" className="img-fluid" /></span>
                                                                    </div>
                                                                    <ul>
                                                                        <li><a href="Tier.html">Tier System 1</a></li>
                                                                        <li><a href="Tier_v2.html">Tier System 2</a><span className="hot">HOT</span></li>
                                                                        <li><a href="Tier-V3.html">Tier System 3</a><span className="new">NEW</span></li>
                                                                        <li><a href="tokenomics.html">Tokenomics</a></li>
                                                                    </ul>
                                                                </div>

                                                                <div className="Menu_column ProjectColumn">
                                                                    <div className="menuHeadings">
                                                                        <h2>BLOG PAGES</h2>
                                                                        <span><img src="assets/images/megaMenu/border-buttomShape.png" alt="" className="img-fluid" /></span>
                                                                    </div>
                                                                    <ul>
                                                                        <li><a href="blog_grid.html">Blog Grid</a></li>
                                                                        <li><a href="blog_clasic.html">Blog Classic</a></li>
                                                                        <li><a href="blog-details.html">Artcles Details</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className="Menu_column ProjectColumn">
                                                                <div className="menuHeadings">
                                                                    <h2>AUth Pages</h2>
                                                                    <span><img src="assets/images/megaMenu/border-buttomShape.png" alt="" className="img-fluid" /></span>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="kyc_process.html">KYC Step 01</a> <span className="hot">HOT</span></li>
                                                                    <li><a href="kyc_process-Step2.html">KYC Step 02</a></li>
                                                                    <li><a href="kyc_process-Step3.html">KYC Step 03</a></li>
                                                                    <li><a href="Connect_Wallet.html">Connect Wallet</a></li>
                                                                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Wallet Module</a></li>
                                                                    <li><a href="signUp.html">Register</a></li>
                                                                    <li><a href="signin.html">Login</a></li>
                                                                    <li><a href="Forget-Password.html">Forget Password</a></li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>  */}
                                </ul>
                            </div>
                            </div>
                            <div className="gamfi-btn-area">
                                <ul>
                                    <li>
                                        <a
                                            id="nav-expander"
                                            className="nav-expander bar"
                                            href="#"
                                        >
                                            <div className="bar">
                                                <span className="dot1"></span>
                                                <span className="dot2"></span>
                                                <span className="dot3"></span>
                                            </div>
                                        </a>
                                    </li>
                                    {/* <li className="buy-token">
                                        <a
                                            className="readon black-shape"
                                            href="#"
                                        >
                                            <span className="btn-text">
                                                Buy Token{" "}
                                            </span>
                                            <i className="icon-arrow_down"></i>
                                            <span className="hover-shape1"></span>
                                            <span className="hover-shape2"></span>
                                            <span className="hover-shape3"></span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="assets/images/icons/pancake.png"
                                                        alt="pancake"
                                                    />{" "}
                                                    PancakeSwap
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="assets/images/icons/uniswap.png"
                                                        alt="uniswap"
                                                    />{" "}
                                                    UniSwap
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="assets/images/icons/market.png"
                                                        alt="market"
                                                    />{" "}
                                                    CoinMarketCap
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="assets/images/icons/gate.png"
                                                        alt="gate"
                                                    />{" "}
                                                    Gate.io
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li>
                                        <button
                                            type="button"
                                            className="readon white-btn hover-shape"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            <img
                                                src="assets/images/icons/connect.png"
                                                alt="Icon"
                                            />
                                            <span className="btn-text">
                                                Connect{" "}
                                            </span>
                                            <span className="hover-shape1"></span>
                                            <span className="hover-shape2"></span>
                                            <span className="hover-shape3"></span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Canvas Mobile Menu start  */}
                <nav
                    className="right_menu_togle mobile-navbar-menu"
                    id="mobile-navbar-menu"
                >
                    <div className="close-btn">
                        <a id="nav-close2" className="nav-close">
                            <div className="line">
                                <span className="line1"></span>
                                <span className="line2"></span>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-logo mb-30">
                        <a href="index.html">
                            <img src="assets/images/logo-dark.png" alt="" />
                        </a>
                    </div>
                    <ul className="nav-menu">
                        <li className="current-menu-item">
                            <a href="#">Presale</a>
                            {/* <ul className="sub-menu">
                                <li>
                                    <a href="index.html">Home 1</a>
                                </li>
                                <li>
                                    <a href="index2.html">Home 2</a>
                                </li>
                                <li>
                                    <a href="index-V3.html">Home 3</a>
                                </li>
                                <li>
                                    <a href="index-V4.html">Home 4</a>
                                </li>
                            </ul> */}
                        </li>
                        {/*  <li><a href="project.html">Projects</a>
                        <ul className="sub-menu">
                            <li><a href="Project-Clasic.html">Projects Clasic 1</a></li>
                            <li><a href="Project-Clasic-2.html">Projects Clasic 2</a></li>
                            <li><a href="project.html">Projects List</a></li>
                            <li><a href="explore.html">Project Grid</a></li>
                            <li><a href="calendar.html">Project Calendar</a></li>
                            <li><a href="project-details.html">Project Details 1</a></li>
                            <li><a href="Project_Details2.html">Project Details 2</a></li>
                            <li><a href="igo-ranking.html">Project Ranking</a></li>
                        </ul>
                    </li>
                    <li><a href="staking.html">Staking</a>
                        <ul className="sub-menu">
                            <li><a href="staking.html">Staking 1</a></li>
                            <li><a href="staking-2.html">Staking 2</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                            <li className="menu-item-has-children"><a href="project.html">Projects Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="Project-Clasic.html">Projects Clasic 1</a></li>
                                    <li><a href="Project-Clasic-2.html">Projects Clasic 2</a></li>
                                    <li><a href="project.html">Projects List</a></li>
                                    <li><a href="explore.html">Project Grid</a></li>
                                    <li><a href="calendar.html">Project Calendar</a></li>
                                    <li><a href="project-details.html">Project Details 1</a></li>
                                    <li><a href="Project_Details2.html">Project Details 2</a></li>
                                    <li><a href="igo-ranking.html">Project Ranking</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="signin.html">Stake & Farm</a>
                                <ul className="sub-menu">
                                    <li><a href="staking.html">Staking One</a></li>
                                    <li><a href="staking-2.html">Staking Two</a></li>
                                    <li><a href="farm.html">Farming</a></li>
                                    <li><a href="leaderboard.html">Leaderboard</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="signin.html">Other Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="Get-In-touch.html">Contact Us</a></li>
                                    <li><a href="roadMap.html">Roadmap</a></li>
                                    <li><a href="FAQ.html">FAQs</a></li>
                                    <li><a href="igo-apply.html">Apply For Project</a></li>
                                    <li><a href="teamdetails.html">Team Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="signin.html">Tokenomics & Tier</a>
                                <ul className="sub-menu">
                                    <li><a href="Tier.html">Tier System 1</a></li>
                                    <li><a href="Tier_v2.html">Tier System 2</a></li>
                                    <li><a href="Tier-V3.html">Tier System 3</a></li>
                                    <li><a href="tokenomics.html">Tokenomics</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="signin.html">Blog & Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="blog_grid.html">Blog Grid</a></li>
                                    <li><a href="blog_clasic.html">Blog Classic</a></li>
                                    <li><a href="blog-details.html">Artcles Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="signin.html">Auth Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="kyc_process.html">KYC Step 01</a></li>
                                    <li><a href="kyc_process-Step2.html">KYC Step 02</a></li>
                                    <li><a href="kyc_process-Step3.html">KYC Step 03</a></li>
                                    <li><a href="Connect_Wallet.html">Connect Wallet</a></li>
                                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Wallet Module</a></li>
                                    <li><a href="signUp.html">Register</a></li>
                                    <li><a href="signin.html">Login</a></li>
                                    <li><a href="Forget-Password.html">Forgot Password</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#">Buy Token</a>
                        <ul className="sub-menu">
                            <li><a href="#">PancakeSwap</a></li>
                            <li><a href="#">UniSwap</a></li>
                            <li><a href="#">CoinMarketCap</a></li>
                            <li><a href="#">Gate.io</a></li>
                        </ul>
                    </li>  */}
                        <li>
                            <button
                                type="button"
                                className="readon black-shape-big connectWalletBtnforMobile"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                <img
                                    src="assets/images/icons/connect_white.png"
                                    alt="Icon"
                                />
                                <span className="btn-text">Connect </span>
                                <span className="hover-shape1"></span>
                                <span className="hover-shape2"></span>
                                <span className="hover-shape3"></span>
                            </button>
                        </li>
                    </ul>
                </nav>
                {/*  Canvas Menu end  */}
            </header>
            {/* Header End */}
        </>
    );
};

export default Header;
