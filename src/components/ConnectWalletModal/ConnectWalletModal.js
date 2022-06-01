import React from "react";

const ConnectWalletModal = () => {
    return (
        <>
            {/* Modal Section Start*/}
            <div
                className="modal fade "
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4
                                className="modals-title  mb-0"
                                id="exampleModalLabel"
                            >
                                Connect Wallet
                            </h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="icon-x"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="mb-20">
                                Please select a wallet to connect to this
                                marketplace
                            </p>
                            <div className="connect-section">
                                <ul className="heading-list">
                                    <li>
                                        <a href="#">
                                            <span>
                                                <img
                                                    src="assets/images/icons/meta-mask.png"
                                                    alt="Meta-mask-Image"
                                                />
                                            </span>
                                            MetaMask
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <img
                                                    src="assets/images/icons/coinbase.png"
                                                    alt="Coinbase-Image"
                                                />
                                            </span>
                                            Coinbase
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <img
                                                    src="assets/images/icons/trust.png"
                                                    alt="Trust-Image"
                                                />
                                            </span>
                                            Trust Wallet
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <img
                                                    src="assets/images/icons/wallet.png"
                                                    alt="Wallet-Image"
                                                />
                                            </span>
                                            WalletConnect
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                By connecting your wallet, you agree to our{" "}
                                <a href="#">
                                    <span className="modal-title">
                                        Terms of Service{" "}
                                    </span>
                                </a>
                                and our{" "}
                                <a href="#">
                                    <span className="modal-title">
                                        {" "}
                                        Privacy Policy
                                    </span>
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Section End*/}
        </>
    );
};

export default ConnectWalletModal;
