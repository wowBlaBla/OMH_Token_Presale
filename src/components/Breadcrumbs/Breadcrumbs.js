import React, { useEffect, useState } from "react";
import Web3Context from "../../context/Web3Context";
import { OMH_ABI, OMH_ADDRESS, PRESALE_ABI, PRESALE_ADDRESS } from "../../config";
import getWeb3 from "../../utils/getWeb3";
import { toast } from "react-toastify";

const Breadcrumbs = () => {
	const [amountToBuy, setAmountToBuy] = useState("");
	const [tokenPrice, setTokenPrice] = useState(0.065);
	const [soldAmount, setSoldAmount] = useState(0);

	useEffect(async () => {
		try {
			const _web3 = await getWeb3();
			const presaleContract = new _web3.eth.Contract(PRESALE_ABI, PRESALE_ADDRESS);
			const retSoldAmount = await presaleContract.methods.totalSoldAmount().call();
			console.log(retSoldAmount);
			setSoldAmount(retSoldAmount);
		} catch (e) {
			console.log(e);
		}
	}, []);

	const buyTokenInMatic = async (web3, account, presaleContract) => {
		// if (amountToBuy === "") return;
		if (amountToBuy === "") {
			console.log("must input");
			toast.error("Please input buy amount");
			return;
		}

		if ((amountToBuy < 10000) || (amountToBuy > 20000000)) {
			console.log("min amount 10000, max amount 20000000");
			toast.error("Please input correct buy amount, only 10,000 ~ 20,000,000 OMH token available");
			return;
		}

		try {
			const amount = web3.utils.toWei(amountToBuy);

			const estimatedMatic = await presaleContract.methods.estimatedMaticAmount(amount).call()
			presaleContract.methods.buyTokenWithMatic(amount).send({ from: account, value: estimatedMatic })
			.once("receipt", (receipt) => { toast.success("Congratulations"); console.log(receipt); });
		} catch (e) {
			console.log(e);
			toast.error("Error" + e);
			return;
		}
		
	}

	const buyTokenInUSDT = async (web3, account, presaleContract) => {
		// if (amountToBuy === "") return;

		if (amountToBuy === "") {
			console.log("must input");
			toast.error("Please input buy amount");
			return;
		}

		if ((amountToBuy < 10000) || (amountToBuy > 20000000)) {
			console.log("min amount 10000, max amount 20000000");
			toast.error("Please input correct buy amount, only 10,000 ~ 20,000,000 OMH token available");
			return;
		}

		try {
			const amount = web3.utils.toWei(amountToBuy);

			const estimatedUSDT = await presaleContract.methods.estimatedUSDTAmount(amount).call()
			presaleContract.methods.buyTokenWithUSDT(amount, estimatedUSDT).send({ from: account })
			.once("receipt", (receipt) => { toast.success("Congratulations"); console.log(receipt); });
		} catch (e) {
			console.log(e);
			toast.error("Error" + e);
			return;
		}
	}

	return (
		<Web3Context.Consumer>
			{/* Breadcrumbs Section Start  */}
			{({ web3, account, presaleContract }) => (
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
								<h2 className="mb-50">SEED SALE</h2>
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
															src="assets/images/fav.png"
															alt="img"
															height="70"
															width="70"
															// className="img-fluid"
														/>
													</a>
													<div className="ProjectClasicSlider_TextSect">
														<h3>
															<a href="project-details.html">
																Omveritas
															</a>
														</h3>
														<p>
															price (OMH) = {tokenPrice} USD
														</p>
													</div>
												</div>
												<div className="ProjectClasicSlider_LeftRiseSect">
													<div className="ProjectClasicSlider_RiseCeontent">
														<span>Targeted Seed Sale Amount</span>
														<h2>1,700,000,000 OMH</h2>
													</div>
													<div className="ProjectClasicSlider_RiseCeontent">
														<span>Total Sold Amount</span>
														<h2>{ soldAmount } OMH</h2>
													</div>
												</div>
												<div className="ProjectClasicSlider_Input">
													<input type="text" pattern="[0-9]*" placeholder="0.00" value={amountToBuy} onChange={(e) => { setAmountToBuy((v) => (e.target.validity.valid ? e.target.value : v)) }} />
												</div>
												<div className="ProjectClasicSlider_ClaimBtn">
													{ (!web3 || !account) && (
														<>
															<button
																className="hover-shape"
																data-bs-toggle="modal"
																data-bs-target="#exampleModal"
															>
																BUY IN MATIC
																<span className="hover-shape1"></span>
																<span className="hover-shape2"></span>
																<span className="hover-shape3"></span>
															</button>
															<button
																className="hover-shape"
																data-bs-toggle="modal"
																data-bs-target="#exampleModal"
															>
																BUY IN USDT
																<span className="hover-shape1"></span>
																<span className="hover-shape2"></span>
																<span className="hover-shape3"></span>
															</button>
														</>
													)}
													{ web3 && account && (
														<>
															<button
																className="hover-shape"
																onClick={() => { buyTokenInMatic(web3, account, presaleContract); }}
															>
																BUY IN MATIC
																<span className="hover-shape1"></span>
																<span className="hover-shape2"></span>
																<span className="hover-shape3"></span>
															</button>
															<button
																className="hover-shape"
																onClick={() => { buyTokenInUSDT(web3, account, presaleContract); }}
															>
																BUY IN USDT
																<span className="hover-shape1"></span>
																<span className="hover-shape2"></span>
																<span className="hover-shape3"></span>
															</button>
														</>
													)}
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
																data-to={ soldAmount / 17000000 }
																data-speed="1500"
															>
																<span className="counter">
																	{ soldAmount / 17000000 }
																</span>
																%
															</p>
															{/* <div className="overlay"></div> */}
															{/* <div className="left"></div>
															<div className="right"></div> */}
														</div>
													</div>
												</div>
											</div>
											<div className="ProjectClasicSlider_RightSect">
												<div className="ProjectClasicSlider_RightTimer">
													<h2>SEED SALE END IN</h2>
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
												<div className="ProjectClasicSlider_Right_Access_AllocationSect">
													<div className="Access_AllocationText">
														<span>10K - 10M OMH</span>
														<h2>Price: 0.065 USD</h2>
													</div>
													<div className="Access_AllocationText">
														<span>10M - 20M OMH</span>
														<h2>OMH Price: 0.05 USD</h2>
													</div>
												</div>
												<ul className="ProjectClasicSliderSocialLinks">
													<li>
														<a href="https://t.me/OMHtoken">
															<i className="icon-telegram"></i>
														</a>
													</li>
													<li>
														<a href="https://twitter.com/omhealthdata">
															<i className="icon-twitter"></i>
														</a>
													</li>
													<li>
														<a href="https://discord.gg/qSSrk7vz">
															<i className="icon-discord"></i>
														</a>
													</li>
													<li>
														<a href="https://medium.com/omh-token">
															<i className="icon-medium"></i>
														</a>
													</li>
													{/* <li>
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
			)}
			{/* Breadcrumbs  Section End  */}
		</Web3Context.Consumer>
	);
};

export default Breadcrumbs;
