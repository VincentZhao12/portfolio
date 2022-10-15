import React, { FC, ReactNode } from 'react';
import styles from '../styles/Card.module.css';

interface CardProps {
    className?: string;
    children?: ReactNode;
}

const Card: FC<CardProps> = ({ className, children }) => {
    return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
