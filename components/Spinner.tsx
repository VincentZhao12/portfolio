import React, { FC } from 'react';
import styles from '../styles/Spinner.module.css';

const Spinner: FC = () => {
    return (
        <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;
