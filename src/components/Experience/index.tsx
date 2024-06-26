import React, { FC, ReactNode } from 'react';
import styles from './Experience.module.css';
import Image from 'next/image';

interface ExperienceProps {
    name: string;
    role: string;
    image?: string;
    children?: ReactNode;
}

const Experience: FC<ExperienceProps> = ({ name, role, image, children }) => {
    return (
        <div className={styles.experienceCard}>
            <div className={styles.header}>
                <div className={styles.info}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.role}>{role}</p>
                </div>
                {image && (
                    <div className={styles.imageContainer}>
                        <Image
                            src={image}
                            alt={name}
                            layout="fill"
                            objectFit="cover"
                            className={styles.image}
                        />
                    </div>
                )}
            </div>
            <div className={styles.description}>{children}</div>
        </div>
    );
};

export default Experience;
