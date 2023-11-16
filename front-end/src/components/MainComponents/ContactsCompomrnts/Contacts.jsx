import Transitions from "../../UtilsComponents/Transition";
import styles from "./Contacts.module.css";
import ContactsList from "./Contactslist";
import MailForm from "./MailForm";

export default function Contacts() {
    return (
        <Transitions>
            <section className={styles.ftcoSection}>
                <div className={styles.container}>
                    <div className={`${styles.row} ${styles.justifycontentcenter}`}>
                        <div className={styles.colmd12}>
                            <div className={styles.wrapper}>
                                <ContactsList/>
                                <MailForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Transitions>
    );
}
