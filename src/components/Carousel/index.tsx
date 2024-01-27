import React, { FC, ReactNode } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
    items: ReactNode[];
}

const Carousel: FC<CarouselProps> = ({ items }) => {
    return (
        <div className={styles.carousel}>
            <div className={styles.carouselContainer}>
                {items.map((item, index) => (
                    <div key={index} className={styles.carouselItem}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
