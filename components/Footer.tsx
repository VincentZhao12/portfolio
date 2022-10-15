import Link from 'next/link';
import React, { FC } from 'react';
import {
    AiFillInstagram,
    AiOutlineFacebook,
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMail,
} from 'react-icons/ai';
import styles from '../styles/Footer.module.css';
import Button from './Button';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.linkgroup}>
                <Link href="/">Home</Link>
                <Link href="/writing">Writing</Link>
                <Link href="/websites">Websites</Link>
                <Link href="/random">Random</Link>
            </div>
            <div>
                <h1 className={styles.logo}>Vincent</h1>
            </div>
            <div className={styles.socials}>
                <a
                    href="https://www.instagram.com/vin.kint/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Instagram"
                >
                    <AiOutlineInstagram color="white" />
                </a>
                <a
                    href="https://www.facebook.com/vincent.zhao.376/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Facebook"
                >
                    <AiOutlineFacebook color="white" />
                </a>

                <a
                    href="https://github.com/VincentZhao12"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Github"
                >
                    <AiOutlineGithub color="white" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
