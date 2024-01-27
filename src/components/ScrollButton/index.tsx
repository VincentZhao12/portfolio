'use client';
import React, { FC, ReactNode, RefObject } from 'react';
import styles from './ScrollButton.module.css';

interface ScrollButtonProps {
    scrollRef?: RefObject<HTMLDivElement> | null;
    children: ReactNode;
}

const ScrollButton: FC<ScrollButtonProps> = ({ scrollRef, children }) => {
    return (
        <a
            className={styles.button}
            onClick={() => {
                scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
                console.log('kljsadlf');
            }}
        >
            {children}
        </a>
    );
};

export default ScrollButton;
