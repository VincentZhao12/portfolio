import React, { FC, ReactNode } from 'react';
import styles from './IconList.module.css';

export interface IconItem {
    icon: string | ReactNode;
    name: string;
}

interface IconListProps {
    list: IconItem[];
}

const IconList: FC<IconListProps> = ({ list }) => {
    return (
        <div className={styles.itemList}>
            {list.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                </div>
            ))}
        </div>
    );
};

export default IconList;
