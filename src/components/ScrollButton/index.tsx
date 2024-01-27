import React, { FC, ReactNode } from 'react';
import styles from './ScrollButton.module.css';

interface ScrollButtonProps {
    scrollRef?: HTMLDivElement | null;
    children: ReactNode;
}

const ScrollButton: FC<ScrollButtonProps> = ({ scrollRef, children }) => {
    return (
        <a
            className={styles.button}
            onClick={() => scrollRef?.scrollIntoView({ behavior: 'smooth' })}
        >
            {children}
        </a>
    );
};

export default ScrollButton;
