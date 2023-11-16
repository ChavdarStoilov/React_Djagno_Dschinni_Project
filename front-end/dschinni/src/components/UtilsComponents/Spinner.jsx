import styles from './Spinner.module.css';

export default function SpinnerModal({ cname, msg }) {
    return (
        <div className={cname === "detailsSpinner" ? styles.detailsSpinner + " " + styles.spinnerContainer : styles.spinnerContainer}>
            <div className={styles.loadingSpinner}></div>
            <h1 className={cname === "loginLoading" ? styles.loginLoading: styles.registerLoading}>{msg}</h1>
        </div>
    );
}
