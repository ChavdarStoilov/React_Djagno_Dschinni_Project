import Transitions from "../UtilsComponents/Transition";

export default function Contacts() {
    return (
        <Transitions>
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="contact_taital">Get In Touch</h1>
                            <p className="contact_text">
                                Consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation eu{" "}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="contact_main">
                                <div className="contact_bt">
                                    <a href="#">Contact Form</a>
                                </div>
                                <div className="newletter_bt">
                                    <a href="#">Newletter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transitions>
    );
}
