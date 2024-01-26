'use client';
import { useRef } from 'react';
import styles from './page.module.css';
import ScrollButton from '@/components/ScrollButton';

const Home = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const expRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    return (
        <main className={styles.main}>
            <div className={styles.hstack}>
                {/*overall container*/}
                <div className={styles.sidebar}>
                    <div className={styles.vstack}>
                        <ScrollButton scrollRef={aboutRef?.current}>
                            about me
                        </ScrollButton>
                        <ScrollButton scrollRef={expRef?.current}>
                            my experience
                        </ScrollButton>
                        <ScrollButton scrollRef={skillsRef?.current}>
                            my skills
                        </ScrollButton>
                        <ScrollButton scrollRef={projRef?.current}>
                            my projects
                        </ScrollButton>
                        <ScrollButton scrollRef={contactRef?.current}>
                            contact me
                        </ScrollButton>
                    </div>
                </div>
                <div className={`${styles.content}`}>
                    {/*main content area*/}
                    <div ref={aboutRef}>
                        <h1>Hi, I'm Vincent Zhao</h1>
                    </div>
                    <div ref={expRef}>
                        <p>Here are my experiences</p>
                    </div>
                    <div ref={skillsRef}>
                        <p>Here are my skills</p>
                    </div>
                    <div ref={projRef}>
                        <p>Here are my projects</p>
                    </div>
                    <div ref={contactRef}>
                        <p>Here is how to contact me</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
