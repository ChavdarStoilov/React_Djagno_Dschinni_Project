import { useState } from "react";
import styles from "./Contacts.module.css";

export default function MailForm() {
    const [FromMsg, setFromMsg] = useState();


    const sentEmailHandler = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        const { name, email, subject, message } = Object.fromEntries(
            new FormData(e.target)
        );

        
        console.log(name, email, subject, message);
    }

    return (
        <div className={`${styles.row} ${styles.nogutters}`}>
            <div className={styles.colmd7}>
                <div
                    className={`${styles.contactwrap} ${styles.w100} ${styles.pmd5} ${styles.p4}`}
                >
                    <h3 className="mb-4">Contact Us</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                    </div>
                    <form
                        id="contactForm"
                        name="contactForm"
                        className={styles.contactForm}
                        noValidate="novalidate"
                        onSubmit={sentEmailHandler}
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
                                        required
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
                                        required
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
                                        required

                                    />
                                </div>
                            </div>
                            <div className={styles.colmd12}>
                                <div className={styles.formgroup}>
                                    <label className={styles.label} htmlFor="#">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        className={styles.formcontrol}
                                        id="message"
                                        cols="30"
                                        rows="4"
                                        placeholder="Message"
                                        required

                                    ></textarea>
                                </div>
                            </div>
                            <div className={styles.colmd12}>
                                <div className={styles.formgroup}>
                                    <input
                                        type="submit"
                                        defaultValue="Sent"
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
    );
}
