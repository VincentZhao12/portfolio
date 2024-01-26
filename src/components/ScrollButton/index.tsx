import React, { FC, ReactNode } from 'react';

interface ScrollButtonProps {
    scrollRef?: HTMLDivElement | null;
    children: ReactNode;
}

const ScrollButton: FC<ScrollButtonProps> = ({ scrollRef, children }) => {
    return (
        <button
            onClick={() => scrollRef?.scrollIntoView({ behavior: 'smooth' })}
        >
            {children}
        </button>
    );
};

export default ScrollButton;
