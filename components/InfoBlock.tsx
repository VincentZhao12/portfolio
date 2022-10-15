import Image, { StaticImageData } from 'next/image';
import React, { FC, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import styles from '../styles/InfoBlock.module.css';

interface InfoBlockProps {
    color: 'green' | 'fuzzywuzzy' | 'beige';
    icon: StaticImageData;
    heading: string;
    text: string;
    iconfirst?: boolean;
}

const InfoBlock: FC<InfoBlockProps> = ({
    color,
    icon,
    heading,
    text,
    iconfirst,
}) => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    return (
        <div ref={ref} className={styles.papa}>
            <div
                className={`${styles.container} ${styles[color]} ${
                    iconfirst ? styles.slideInLeftItem : styles.slideInRightItem
                } ${isVisible ? styles.run : ''}`}
            >
                {iconfirst && (
                    <div className={styles.image}>
                        <Image
                            alt="icon"
                            className={styles.img}
                            src={icon}
                            layout="responsive"
                        />
                    </div>
                )}
                <div className={styles.textArea}>
                    <h1 className={styles.heading}>{heading}</h1>
                    <p>{text}</p>
                </div>
                {!iconfirst && (
                    <div className={styles.image}>
                        <Image alt="icon" src={icon} className={styles.img} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfoBlock;
