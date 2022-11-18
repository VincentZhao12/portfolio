import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import Meta from '../components/Meta';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();
    return (
        <div>
            <Meta title="Vincent Zhao" />
            <Hero />
        </div>
    );
};

export default Home;
