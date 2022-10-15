import {
    query,
    collection,
    getDocs,
    Timestamp,
    orderBy,
} from 'firebase/firestore';
import React, { FC } from 'react';
import { db } from '../config/firebase';
import { Thing } from '../types';
import styles from '../styles/writing.module.css';

interface WritingProps {
    articles: Thing[];
}

const Writing: FC<WritingProps> = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Writing</h1>
        </div>
    );
};

export default Writing;

export const getServerSideProps = async () => {
    const eventsCollection = query(collection(db, 'writing'), orderBy('date'));

    const events = (await getDocs(eventsCollection)).docs.map((doc) => {
        const dateObj = (doc.data().date as Timestamp).toDate();

        return {
            ...doc.data(),
            date: dateObj.toJSON(),
        };
    });

    return {
        props: {
            events,
        },
    };
};
