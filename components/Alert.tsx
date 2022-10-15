import { FC } from 'react';
import {
    AiFillExclamationCircle,
    AiFillAlert,
    AiFillCheckCircle,
} from 'react-icons/ai';
import styles from '../styles/Alert.module.css';

interface AlertProps {
    title: string;
    message: string;
    type?: 'success' | 'error' | 'warning';
}

const Alert: FC<AlertProps> = ({ title, message, type = 'success' }) => {
    return (
        <div className={`${styles.alert} ${styles[type]}`}>
            {type === 'success' ? (
                <AiFillCheckCircle
                    className={`${styles.icon} ${styles.successIcon}`}
                />
            ) : type === 'error' ? (
                <AiFillExclamationCircle
                    className={`${styles.icon} ${styles.errorIcon}`}
                />
            ) : (
                <AiFillAlert
                    className={`${styles.icon} ${styles.warningIcon}`}
                />
            )}
            <div className={styles.messageContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.message}>{message}</p>
            </div>
        </div>
    );
};

export default Alert;
