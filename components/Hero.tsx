import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import HeroImage from '../assets/Hero.png';
import styles from '../styles/Hero.module.css';
import Button from './Button';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
    const router = useRouter();
    return (
        <div className={styles.hero}>
            <div className={styles.heroArea}>
                <div className={styles.heroTextArea}>
                    <h1 className={styles.heading}>
                        Hi, I'm <span className={styles.logo}>Vincent</span>
                    </h1>
                    <p>
                        I am a coder and a web editor for{' '}
                        <a
                            href="https://elestoque.org/"
                            target="_blank"
                            rel="noreferrer noopener"
                            title="Github"
                        >
                            El Estoque
                        </a>
                        . I am a fullstack web developer, if there's a website
                        you need, hit me up! I am proficient in various frontend
                        javascript frameworks and I am eager to learn.
                    </p>
                    <a
                        href="mailto:zhao.wentao.vincent@gmail.com"
                        rel="noreferrer noopener"
                    >
                        <Button variant="primary" className={styles.button}>
                            Contact Me!
                        </Button>
                    </a>
                </div>
            </div>

            <div className={styles.heroImage}>
                <div className={styles.imageContainer}>
                    <Image
                        src={HeroImage}
                        layout="responsive"
                        className={styles.image}
                        alt="hero"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
