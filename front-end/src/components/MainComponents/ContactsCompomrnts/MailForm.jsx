
import { useState } from "react";
import styles from "./Contacts.module.css";
import * as api from "../../../api/mail_api";

export default function MailForm() {
    const [FormMsg, setFormMsg] = useState();
    const [inputFields, setInputFields] = useState({
        name:"",
        email: "",
        subject: "",
        message: null
      });

    const sentEmailHandler = (e) => {

        e.preventDefault();
        const { name, email, subject, message } = Object.fromEntries(
            new FormData(e.target)
        );

        if (name === "" || email === "" || subject === "" || message === "") {
            setFormMsg({status: 400, msg:'Please all fields, Thank you!'})
        }
        else{
            api.sentEmail({ name, email, subject, message })
            .then((result) => {
                console.log(result);
                setFormMsg({ status: result.status, msg: result.data });
            

            })
            .catch((err) => console.log(err))
        }

    };

    const CheckEmptyhandler = (e) => {

        if (!e.target.value){
            setFormMsg({status: 400, msg: `${e.target.placeholder} is empty`});
        }
        else if (e.target.placeholder === "Email" && !"@" in e.target.value) {
            setFormMsg({status: 400, msg: "Please enter a valid email address"});
        }
    }

    return (
        <div className={`${styles.row} ${styles.nogutters}`}>
            <div className={styles.colmd7}>
                <div
                    className={`${styles.contactwrap} ${styles.w100} ${styles.pmd5} ${styles.p4}`}
                >
                    <h3 className={styles.mb4}>Contact Us</h3>
                    {FormMsg && (
                        <>
                            {FormMsg.status === 400 ? (
                                <div className={`${styles.formMessageWarning} ${styles.mb4}`}>
                                    {FormMsg.msg}
                                </div>
                            ) : (
                                <div className={`${styles.formMessageSuccess} ${styles.mb4}`}>
                                    {FormMsg.msg}
                                </div>
                            )}
                        </>
                    )}
                    <form
                        id="contactForm"
                        name="contactForm"
                        className={styles.contactForm}
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
                                        onBlur={CheckEmptyhandler}
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
                                        onBlur={CheckEmptyhandler}
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
                                        onBlur={CheckEmptyhandler}


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
                                        onBlur={CheckEmptyhandler}


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
