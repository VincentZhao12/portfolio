'use client';
import React, { FC, ReactNode } from 'react';
import styles from './IconList.module.css';

export interface IconItem {
    icon: string | ReactNode;
    name: string;
}

interface IconListProps {
    list: IconItem[];
    center?: boolean;
}

const IconList: FC<IconListProps> = ({ list, center }) => {
    return (
        <div className={`${styles.itemList} ${center ? styles.center : ''}`}>
            {list.map((skill, index) => (
                <div
                    key={index}
                    className={`${styles.skillItem} ${
                        center ? styles.center : ''
                    }`}
                >
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                </div>
            ))}
        </div>
    );
};

export default IconList;
