'use client';
import { useRef } from 'react';
import styles from './page.module.css';
import ScrollButton from '@/components/ScrollButton';
import ProfilePicture from '@/components/ProfilePicture';
import Experience from '@/components/Experience';
import Carousel from '@/components/Carousel';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import {
    FaCss3,
    FaEnvelope,
    FaGithub,
    FaHtml5,
    FaJava,
    FaLinkedin,
    FaPython,
    FaReact,
} from 'react-icons/fa';
import { SiFirebase, SiOpencv, SiSpotify, SiTensorflow } from 'react-icons/si';

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
                        <ScrollButton scrollRef={aboutRef}>
                            about me
                        </ScrollButton>
                        <ScrollButton scrollRef={expRef}>
                            my experience
                        </ScrollButton>
                        <ScrollButton scrollRef={skillsRef}>
                            my skills
                        </ScrollButton>
                        <ScrollButton scrollRef={projRef}>
                            my projects
                        </ScrollButton>
                        <ScrollButton scrollRef={contactRef}>
                            contact me
                        </ScrollButton>
                        <a
                            className={styles.link}
                            href="/vincent_zhao_resume.pdf"
                        >
                            resume
                        </a>
                    </div>
                </div>
                <div className={`${styles.content}`}>
                    <div className={styles.aboutme} ref={aboutRef}>
                        <ProfilePicture />
                        <h1>{'\u{1F44B}'} Hi, I'm Vincent Zhao</h1>
                        <p>
                            I'm a Computer Science Student at{' '}
                            <a href="https://www.cs.purdue.edu/" about="_blank">
                                Purdue University
                            </a>
                            .
                        </p>
                        <p>
                            I am interested in full-stack development, robotics,
                            computer vision, and data science.
                        </p>
                    </div>
                    <div ref={expRef}>
                        <h2>Work Experiences</h2>
                        <Carousel
                            items={[
                                <Experience
                                    name="Purdue Data Mine Space Biology Research"
                                    role="Researcher"
                                    image="/images/datamine.png"
                                >
                                    <ul>
                                        <li>
                                            Worked under Dr. Marshall
                                            Porterfield in using computational
                                            approaches to analyzing NASA's Space
                                            Biology datasets to understand the
                                            effects of microgravity on plants'
                                            photorespiration
                                        </li>
                                        <li>
                                            Used Python, R, and SQL to analyze
                                            data about different plant genomes
                                            on Purdue's “Anvil” computing
                                            cluster
                                        </li>
                                    </ul>
                                </Experience>,
                                <Experience
                                    name="Purdue IEEE ROV Team"
                                    role="Computer Vision Engineer"
                                    image="/images/rov.png"
                                >
                                    <ul>
                                        <li>
                                            Worked in a team of 40 to build an
                                            underwater vehicle to complete for
                                            the MATE International ROV
                                            Competition
                                        </li>
                                        <li>
                                            Used Computer Stereo Vision to
                                            create a 3D depth map to better
                                            understand robot pose using digital
                                            images
                                        </li>
                                        <li>
                                            Created 3d models of underwater
                                            environments using depth maps
                                            looking at the environment from
                                            different angles
                                        </li>
                                        <li>
                                            Worked with ROS to communicate
                                            control actions and calculations
                                            between Raspberry PI nodes and user
                                            interface nodes
                                        </li>
                                    </ul>
                                </Experience>,
                                <Experience
                                    name="Amazon AWS Open Search"
                                    role="Open Source Contributor"
                                    image="/images/osci.jpeg"
                                >
                                    <ul>
                                        <li>
                                            Collaborated with Amazon project
                                            maintainers and mentors in
                                            open-source workflow and OpenSearch
                                            codebase
                                        </li>
                                        <li>
                                            Wrote train_and_predict function for
                                            the Open Search Python ML package to
                                            interface with ML Commons Client
                                        </li>
                                        <li>
                                            Created unit tests for ML Commons
                                            Client using pytest framework to
                                            upload, load, and train models
                                        </li>
                                    </ul>
                                </Experience>,
                                <Experience
                                    name="Monta Vista Robotics Team"
                                    role="Director of Software"
                                    image="/images/mvrt.jpeg"
                                >
                                    <ul>
                                        <li>
                                            Managed a team of 15 to create robot
                                            code in Java for the team's 2022 and
                                            2023 world championship qualifying
                                            robots
                                        </li>
                                        <li>
                                            Created vision system for reflective
                                            and fiducial targets to localize
                                            robot relative to field within 0.1
                                            meters of its true pose
                                        </li>
                                        <li>
                                            Built mobile app and custom data
                                            visualization dashboard (React
                                            Native/React) for scouting to gain
                                            strategic advantages
                                        </li>
                                        <li>
                                            Implemented new systems for vision,
                                            control, and data analysis to help
                                            team's performance at competitions.
                                        </li>
                                        <li>
                                            Taught 50 incoming members basic
                                            Java, JavaScript, React, and robot
                                            control system concepts
                                        </li>
                                    </ul>
                                </Experience>,
                            ]}
                        />
                    </div>
                    <div ref={skillsRef}>
                        <Skills />
                    </div>
                    <div ref={projRef}>
                        <h2>Projects</h2>
                        <Carousel
                            items={[
                                <Project
                                    name="Monkey King Scavenger Hunt"
                                    image="/images/mk.png"
                                    github="https://github.com/VincentZhao12/monkey-king-scavenger-hunt"
                                    website="https://monkey-king-scavenger.web.app/"
                                    desc="ML scavenger hunt game for SCLA Creative Project"
                                    skills={[
                                        { name: 'TypeScript', icon: '📄' },
                                        { name: 'React Native', icon: '📱' },
                                        {
                                            name: 'Firebase',
                                            icon: <SiFirebase />,
                                        },
                                        { name: 'ReactJS', icon: <FaReact /> },
                                        {
                                            name: 'Tensorflow',
                                            icon: <SiTensorflow />,
                                        },
                                        { name: 'Python', icon: <FaPython /> },
                                    ]}
                                />,
                                <Project
                                    name="Emotional Oranges"
                                    image="/images/emotional.png"
                                    github="https://github.com/VincentZhao12/emotional-oranges"
                                    website="https://emotional-orangesweb.app"
                                    desc="ML Spotify API Hackathon Project"
                                    skills={[
                                        { name: 'TypeScript', icon: '📄' },
                                        { name: 'React Native', icon: '📱' },
                                        {
                                            name: 'Firebase',
                                            icon: <SiFirebase />,
                                        },
                                        { name: 'ReactJS', icon: <FaReact /> },
                                        {
                                            name: 'Tensorflow',
                                            icon: <SiTensorflow />,
                                        },
                                        {
                                            name: 'Spotify API',
                                            icon: <SiSpotify />,
                                        },
                                        { name: 'Python', icon: <FaPython /> },
                                    ]}
                                />,
                                <Project
                                    name="MVRT 2023 Robot"
                                    image={'/images/2k23.jpg'}
                                    github="https://github.com/mvrt-115/frc2k23"
                                    desc="2023 FRC World Championship
                                    Divisonal Semifinalist Robot"
                                    skills={[
                                        { name: 'Java', icon: <FaJava /> },
                                        {
                                            name: 'Computer Vision',
                                            icon: <SiOpencv />,
                                        },
                                        { name: 'Control Theory', icon: '⚙️' },
                                    ]}
                                />,
                                <Project
                                    name="Robot Scouting System"
                                    image={'/images/superscout.png'}
                                    github="https://github.com/mvrt-115/super-scout"
                                    website="https://mvrt115-scout.web.app/"
                                    desc="MVRT scouting data collection and analytics dashboard"
                                    skills={[
                                        { name: 'TypeScript', icon: '📄' },
                                        { name: 'React Native', icon: '📱' },
                                        {
                                            name: 'Firebase',
                                            icon: <SiFirebase />,
                                        },
                                        { name: 'ReactJS', icon: <FaReact /> },
                                    ]}
                                />,
                                <Project
                                    name="My Student Sidekick"
                                    image="/images/mystudentsidekick.png"
                                    github="https://github.com/VincentZhao12/my-student-sidekick"
                                    website="https://my-student-sidekick.web.app"
                                    desc="A collection of tools to aid students on their schoolwork"
                                    skills={[
                                        { name: 'TypeScript', icon: '📄' },
                                        { name: 'React Native', icon: '📱' },
                                        {
                                            name: 'Firebase',
                                            icon: <SiFirebase />,
                                        },
                                        { name: 'ReactJS', icon: <FaReact /> },
                                    ]}
                                />,
                                <Project
                                    name="MVRT 2022 Robot"
                                    image={'/images/2k22.jpeg'}
                                    github="https://github.com/mvrt-115/frc2k22"
                                    desc="2022 FRC World Championship
                                    Qualifying Robot"
                                    skills={[
                                        { name: 'Java', icon: <FaJava /> },
                                        {
                                            name: 'Computer Vision',
                                            icon: <SiOpencv />,
                                        },
                                        { name: 'Control Theory', icon: '⚙️' },
                                    ]}
                                />,
                                <Project
                                    name="Legal Nest"
                                    image="/images/legalnest.jpg"
                                    github="https://github.com/VincentZhao12/legal-nest-website"
                                    website="https://legal-nest.web.app/"
                                    desc="2nd Place at Cupertino Hackathon"
                                    skills={[
                                        { name: 'TypeScript', icon: '📄' },
                                        { name: 'React Native', icon: '📱' },
                                        {
                                            name: 'Firebase',
                                            icon: <SiFirebase />,
                                        },
                                        { name: 'ReactJS', icon: <FaReact /> },
                                    ]}
                                />,
                            ]}
                        />
                    </div>
                    <div className={styles.footer} ref={contactRef}>
                        <div className={styles.contact}>
                            <a
                                href="zhao1322@purdue.edu"
                                className={styles.iconLink}
                            >
                                <FaEnvelope /> Email
                            </a>
                            <a
                                href="https://github.com/VincentZhao12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconLink}
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vincent-zhao-aa3357267/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconLink}
                            >
                                <FaLinkedin /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
