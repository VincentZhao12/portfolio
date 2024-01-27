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
        <div className={styles.pane}>
            <div className={styles.hstack}>
                <div>
                    <h4>{name}</h4>
                    <i>
                        <p>{role}</p>
                    </i>
                </div>
                {image && (
                    <div className={styles.squareImage}>
                        <Image
                            src={image}
                            alt={name}
                            className={styles.image}
                            width={100}
                            height={100}
                        />
                    </div>
                )}
            </div>
            <div className={styles.desc}>{children}</div>
        </div>
    );
};

export default Experience;
