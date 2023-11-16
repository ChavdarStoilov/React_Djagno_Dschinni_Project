import styles from "./Contacts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhone,
    faAt,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactsList() {
    return (
        <div className={`${styles.row} ${styles.mb5}`}>
            <div className={styles.colmd3}>
                <div
                    className={`${styles.dbox} ${styles.w100} ${styles.textcenter}`}
                >
                    <div
                        className={`${styles.icon} ${styles.dflex} ${styles.alignitemscenter} ${styles.justifycontentcenter}`}
                    >
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="icons"
                        />
                    </div>
                    <div className={styles.text}>
                        <p>
                            <span>Address:</span> 198 West 21th Street, Suite
                            721 New York NY 10016
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.colmd3}>
                <div
                    className={`${styles.dbox} ${styles.w100} ${styles.textcenter}`}
                >
                    <div
                        className={`${styles.icon} ${styles.dflex} ${styles.alignitemscenter} ${styles.justifycontentcenter}`}
                    >
                        <FontAwesomeIcon icon={faPhone} className="icons" />
                    </div>
                    <div className={styles.text}>
                        <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.colmd3}>
                <div
                    className={`${styles.dbox} ${styles.w100} ${styles.textcenter}`}
                >
                    <div
                        className={`${styles.icon} ${styles.dflex} ${styles.alignitemscenter} ${styles.justifycontentcenter}`}
                    >
                        <FontAwesomeIcon icon={faAt} className="icons" />
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
                <div
                    className={`${styles.dbox} ${styles.w100} ${styles.textcenter}`}
                >
                    <div
                        className={`${styles.icon} ${styles.dflex} ${styles.alignitemscenter} ${styles.justifycontentcenter}`}
                    >
                        <FontAwesomeIcon icon={faGlobe} className="icons" />
                    </div>
                    <div className={styles.text}>
                        <p>
                            <span>Website</span> <a href="#">yoursite.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
