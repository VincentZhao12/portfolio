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

interface WebsitesProps {
    articles: Thing[];
}

const Websites: FC<WebsitesProps> = ({ articles }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Websites</h1>
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

export default Websites;

export const getServerSideProps = async () => {
    const articlesCollection = query(collection(db, 'websites'));

    const articles = (await getDocs(articlesCollection)).docs.map((doc) =>
        doc.data(),
    );

    console.log(articles);
    return {
        props: {
            articles,
        },
    };
};
