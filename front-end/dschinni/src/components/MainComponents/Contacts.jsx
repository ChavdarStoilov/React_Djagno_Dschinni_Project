import Transitions from "../UtilsComponents/Transition";
import styles from "./Contacts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhone,
    faAt,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export default function Contacts() {
    return (
        <Transitions>
            <section className={styles.ftcoSection}>
                <div className={styles.container}>
                    <div className={`${styles.row} ${styles.justifycontentcenter}`}>
                        <div className={styles.colmd12}>
                            <div className={styles.wrapper}>
                                <div className={`${styles.row} ${styles.mb5}`}>
                                    <div className={styles.colmd3}>
                                        <div className={`${styles.dbox} ${styles.w100} ${styles.textcenter}`}>
                                            <div className={`${styles.icon} ${styles.dflex} ${styles.alignitemscenter} ${styles.justifycontentcenter}`}>
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="icons"/>
                                            </div>
                                            <div className={styles.text}>
                                                <p>
                                                    <span>Address:</span> 198
                                                    West 21th Street, Suite 721
                                                    New York NY 10016
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.colmd3}>
                                        <div className={`${styles.dbox} ${styles.w100} ${styles.textcenter}`}>
                                            <div className={`${styles.icon} ${styles.dflex} ${styles.alignitemscenter} ${styles.justifycontentcenter}`}>
                                                <FontAwesomeIcon icon={faPhone} className="icons"/>
                                            </div>
                                            <div className={styles.text}>
                                                <p>
                                                    <span>Phone:</span>{" "}
                                                    <a href="tel://1234567920">
                                                        + 1235 2355 98
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className={styles.colmd3}>
                                        <div className={`${styles.dbox} ${styles.w100} ${styles.textcenter}`}>
                                            <div className={`${styles.icon} ${styles.dflex} ${styles.alignitemscenter} ${styles.justifycontentcenter}`}>
                                                <FontAwesomeIcon icon={faAt} className="icons"/>
                                            </div>
                                            <div className={styles.text}>
                                                <p>
                                                    <span>Email:</span>{" "}
                                                    <a href="mailto:info@yoursite.com">
                                                        info@yoursite.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.colmd3}>
                                        <div className={`${styles.dbox} ${styles.w100} ${styles.textcenter}`}>
                                            <div className={`${styles.icon} ${styles.dflex} ${styles.alignitemscenter} ${styles.justifycontentcenter}`}>
                                                <FontAwesomeIcon icon={faGlobe} className="icons"/>
                                            </div>
                                            <div className={styles.text}>
                                                <p>
                                                    <span>Website</span>{" "}
                                                    <a href="#">yoursite.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.row} ${styles.nogutters}`}>
                                    <div className={styles.colmd7}>
                                        <div className={`${styles.contactwrap} ${styles.w100} ${styles.pmd5} ${styles.p4}`}>
                                            <h3 className="mb-4">Contact Us</h3>
                                            <div
                                                id="form-message-warning"
                                                className="mb-4"
                                            ></div>
                                            <div
                                                id="form-message-success"
                                                className="mb-4"
                                            >
                                                Your message was sent, thank
                                                you!
                                            </div>
                                            <form
                                                method="POST"
                                                id="contactForm"
                                                name="contactForm"
                                                className={styles.contactForm}
                                                noValidate="novalidate"
                                            >
                                                <div className={styles.row}>
                                                    <div className="col-md-6">
                                                        <div className={styles.formgroup}>
                                                            <label
                                                                className={styles.label}
                                                                htmlFor="name"
                                                            >
                                                                Full Name
                                                            </label>
                                                            <input
                                                                type={styles.text}
                                                                className={styles.formcontrol}
                                                                name="name"
                                                                id="name"
                                                                placeholder="Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className={styles.formgroup}>
                                                            <label
                                                                className={styles.label}
                                                                htmlFor="email"
                                                            >
                                                                Email Address
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className={styles.formcontrol}
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={styles.colmd12}>
                                                        <div className={styles.formgroup}>
                                                            <label
                                                                className={styles.label}
                                                                htmlFor="subject"
                                                            >
                                                                Subject
                                                            </label>
                                                            <input
                                                                type={styles.text}
                                                                className={styles.formcontrol}
                                                                name="subject"
                                                                id="subject"
                                                                placeholder="Subject"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={styles.colmd12}>
                                                        <div className={styles.formgroup}>
                                                            <label
                                                                className={styles.label}
                                                                htmlFor="#"
                                                            >
                                                                Message
                                                            </label>
                                                            <textarea
                                                                name="message"
                                                                className={styles.formcontrol}
                                                                id="message"
                                                                cols="30"
                                                                rows="4"
                                                                placeholder="Message"
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className={styles.colmd12}>
                                                        <div className={styles.formgroup}>
                                                            <input
                                                                type="submit"
                                                                value="Send Message"
                                                                className={`${styles.btn} ${styles.btnprimary}`}
                                                            />
                                                            <div className={styles.submitting}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Transitions>
    );
}
