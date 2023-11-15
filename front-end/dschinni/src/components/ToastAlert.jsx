import React from 'react';
import styles from "./Toast.module.css";

export default function ToastAlertModal() {
    return (
        <div className={`${styles.toast} ${styles.active}`}>
            <div className={styles.toast - content}>
                <i className="fas fa-solid fa-check check"></i>

                <div className={styles.message}>
                    <span className={`${styles.text} ${styles.text - 1}`}>
                        Success
                    </span>
                    <span className={`${styles.text} ${styles.text - 2}`}>
                        Your changes has been saved
                    </span>
                </div>
            </div>
            <i className="fa-solid fa-xmark close"></i>

            <div className={`${styles.progress} ${styles.active}`}></div>
        </div>
    );
}
