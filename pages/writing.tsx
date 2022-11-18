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
import Image from 'next/image';
import Article from '../assets/Article.png';
import Card from '../components/Card';

interface WritingProps {
    articles: Thing[];
}

const Writing: FC<WritingProps> = ({ articles }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Writing</h1>
            <div className={styles.grid}>
                {articles?.map((article) => (
                    <a
                        href={article.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        title={article.title}
                        key={article.title}
                    >
                        <Card className={styles.story}>
                            {article.image && (
                                <div className={styles.storyImage}>
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={10}
                                        height={10}
                                        layout="responsive"
                                        priority
                                        objectFit="cover"
                                    />
                                </div>
                            )}
                            <h3>{article.title}</h3>
                            <h4>{article.date}</h4>
                            <p>{article.description}</p>
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Writing;

export const getServerSideProps = async () => {
    const articlesCollection = query(
        collection(db, 'writing'),
        orderBy('date'),
    );

    const articles = (await getDocs(articlesCollection)).docs
        .map((doc) => {
            const dateObj = (doc.data().date as Timestamp).toDate();

            return {
                ...doc.data(),
                date:
                    dateObj.getMonth() +
                    1 +
                    '/' +
                    dateObj.getUTCDate() +
                    '/' +
                    dateObj.getUTCFullYear(),
            };
        })
        .reverse();

    console.log(articles);
    return {
        props: {
            articles,
        },
    };
};
