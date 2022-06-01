import React from "react";
import { connect } from "react-redux";
import Web3 from "web3";
import { setCurrentLang } from "../store/Lang/LangAction";
import Preloader from "../components/Preloader/Preloader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ConnectWalletModal from "../components/ConnectWalletModal/ConnectWalletModal";

class App extends React.Component {
    // App contains routes and also wrapped with snackbar and intl for localization
    constructor(props) {
        super(props);

        this.slideIndex = -1;
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

    componentDidMount() {
        this.showSlides(this.slideIndex);
    }

    render() {
        return (
            <>
                <Preloader />
                <Header />
                <Breadcrumbs />
                <Footer />
                <ConnectWalletModal />
            </>
        );
    }
}

const mapStateToProps = ({ lang, loading }) => ({
    lang,
    loading,
});

export default connect(mapStateToProps, { setCurrentLang })(App);
