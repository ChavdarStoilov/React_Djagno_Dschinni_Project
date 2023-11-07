import logo from "../assets/logo.webp";


export default function Footer() {
    return (
        <>
            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="footer_logo">
                        <a href="index.html">
                            <img src="images/footer-logo.png" />
                        </a>
                    </div>
                    <div className="contact_section_2">
                        <div className="row">
                            <div className="col-sm-4">
                                <h3 className="address_text">Contact Us</h3>
                                <div className="address_bt">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i
                                                    className="fa fa-map-marker"
                                                    aria-hidden="true"
                                                ></i>
                                                <span className="padding_left10">
                                                    Address : Loram Ipusm
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i
                                                    className="fa fa-phone"
                                                    aria-hidden="true"
                                                ></i>
                                                <span className="padding_left10">
                                                    Call : +01 1234567890
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i
                                                    className="fa fa-envelope"
                                                    aria-hidden="true"
                                                ></i>
                                                <span className="padding_left10">
                                                    Email : demo@gmail.com
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="footer_logo_1">
                                    <a href="index.html">
                                        <img src={logo} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="main">
                                    <h3 className="assets/address_text">
                                        Best Products
                                    </h3>
                                    <p className="ipsum_text">
                                        dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social_icon">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">
                        2020 All Rights Reserved. Design by{" "}
                        <a href="https://html.design">Free html Templates</a>
                    </p>
                </div>
            </div>
        </>
    );
}
