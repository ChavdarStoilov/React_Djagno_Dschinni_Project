
export default function About() {
    
    return (
        <div className="about_section layout_padding">
            <div className="container">
                <div className="about_section_main">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_taital_main">
                                <h1 className="about_taital">About Us</h1>
                                <p className="about_text">
                                    Dschinni is a German hookah brand that is
                                    highly regarded for its unique and
                                    innovative designs, as well as its excellent
                                    performance.
                                </p>
                                <div className="readmore_bt">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 about_image">
                                <img
                                    src="images/dschinniLogo.webp"
                                    className="image_3"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
