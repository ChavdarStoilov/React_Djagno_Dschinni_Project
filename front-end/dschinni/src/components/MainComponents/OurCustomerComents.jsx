
export default function OurClientsComments() {
    return (
        <div className="customer_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="customer_taital">What says customers</h1>
                    </div>
                </div>
                <div
                    id="main_slider"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="client_section_2">
                                <div className="client_main">
                                    <div className="client_left">
                                        <div className="client_img">
                                            <img src="images/client-img.png" />
                                        </div>
                                    </div>
                                    <div className="client_right">
                                        <h3 className="name_text">Jonyro</h3>
                                        <p className="dolor_text">
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation eu{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="client_section_2">
                                <div className="client_main">
                                    <div className="client_left">
                                        <div className="client_img">
                                            <img src="images/client-img.png" />
                                        </div>
                                    </div>
                                    <div className="client_right">
                                        <h3 className="name_text">Jonyro</h3>
                                        <p className="dolor_text">
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation eu{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="client_section_2">
                                <div className="client_main">
                                    <div className="client_left">
                                        <div className="client_img">
                                            <img src="images/client-img.png" />
                                        </div>
                                    </div>
                                    <div className="client_right">
                                        <h3 className="name_text">Jonyro</h3>
                                        <p className="dolor_text">
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation eu{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#main_slider"
                        role="button"
                        data-slide="prev"
                    >
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#main_slider"
                        role="button"
                        data-slide="next"
                    >
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
