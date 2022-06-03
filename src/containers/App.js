import React from "react";
import { connect } from "react-redux";
import { setCurrentLang } from "../store/Lang/LangAction";
import Preloader from "../components/Preloader/Preloader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ConnectWalletModal from "../components/ConnectWalletModal/ConnectWalletModal";
import getWeb3 from "../utils/getWeb3";
import Web3Context from "../context/Web3Context";
import { OMH_ABI, OMH_ADDRESS, PRESALE_ABI, PRESALE_ADDRESS } from "../config";

class App extends React.Component {
	// App contains routes and also wrapped with snackbar and intl for localization
	constructor(props) {
		super(props);

		this.slideIndex = -1;

		this.loadWeb3 = async () => {
			const _web3 = await getWeb3();
			this.setState({ web3: _web3 });

			const chainId = await _web3.eth.net.getId();
			this.setState({ chainId: chainId });
			if (chainId != 137) {
				alert("Please change the chain to Polygon mainnet");
			}

			const accounts = await _web3.eth.getAccounts();
			this.setState({ account: accounts[0] });

			const omhContract = new _web3.eth.Contract(OMH_ABI, OMH_ADDRESS);
    	this.setState({ omhContract });

			const presaleContract = new _web3.eth.Contract(PRESALE_ABI, PRESALE_ADDRESS);
    	this.setState({ presaleContract });
		};

		this.unloadWeb3 = async () => {
			this.setState({ 
				web3: null,
				chainId: null,
				account: null,
				omhContract: null,
				presaleContract: null
			});
		};

		this.state = {
			web3: null,
			chainId: null,
			account: null,
			omhContract: null,
			presaleContract: null,
			loadWeb3: this.loadWeb3,
			unloadWeb3: this.unloadWeb3
		};
	}

	showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
		if (n > slides.length) {
			this.slideIndex = 1;
		}
		if (n < 1) {
			this.slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[this.slideIndex - 1].style.display = "block";
		// dots[this.slideIndex - 1].className += " active";
	}

	async componentWillMount() {
		// await this.loadWeb3();
	}

	componentDidMount() {
		this.showSlides(this.slideIndex);

		if (window.ethereum) {
			window.ethereum.on("accountsChanged", async (newAccounts) => {
				this.setState({ account: newAccounts[0] });
			});
			window.ethereum.on("chainChanged", (networkId) => {
				if (networkId != "0x89") {
					alert("Please change the chain to Polygon mainnet");
				}
			})
		}
	}

	render() {
		return (
			<Web3Context.Provider value={this.state}>
				<Preloader />
				<Header />
				<Breadcrumbs />
				<Footer />
				<ConnectWalletModal />
			</Web3Context.Provider>
		);
	}
}

const mapStateToProps = ({ lang, loading }) => ({
	lang,
	loading,
});

export default connect(mapStateToProps, { setCurrentLang })(App);
