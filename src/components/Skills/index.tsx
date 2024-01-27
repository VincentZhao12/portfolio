// components/SkillsList.js

import React from 'react';
import {
    FaPython,
    FaJava,
    FaJs,
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs,
    FaGit,
    FaFire,
    FaDocker,
} from 'react-icons/fa';
import {
    SiTensorflow,
    SiNextdotjs,
    SiFlutter,
    SiElectron,
    SiGithub,
    SiGooglecloud,
    SiOpencv,
    SiLinux,
    SiFirebase,
    SiRos,
    SiAdobeindesign,
} from 'react-icons/si';
import styles from './Skills.module.css'; // Import the CSS module
import IconList from '../IconList';

const Skills = () => {
    const programmingLanguages = [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'TypeScript', icon: '📄' },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3 /> },
        { name: 'R', icon: '📊' },
        { name: 'SQL', icon: '📂' },
        { name: 'C', icon: '👾' },
    ];

    const frameworks = [
        { name: 'ReactJS', icon: <FaReact /> },
        { name: 'Tensorflow', icon: <SiTensorflow /> },
        { name: 'NumPy', icon: '🧮' },
        { name: 'pandas', icon: '🐼' },
        { name: 'Express', icon: '🚂' },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'NextJS', icon: <SiNextdotjs /> },
        { name: 'React Native', icon: '📱' },
        { name: 'Electron', icon: <SiElectron /> },
        { name: 'Node JS', icon: <FaNodeJs /> },
        { name: 'pytest', icon: '🧪' },
    ];

    const technologies = [
        { name: 'Git', icon: <FaGit /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'OpenCV', icon: <SiOpencv /> },
        { name: 'ROS', icon: <SiRos /> },
        { name: 'Linux', icon: <SiLinux /> },
        { name: 'Unix', icon: '🔄' },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Google Cloud', icon: <SiGooglecloud /> },
        { name: 'REST API', icon: '🔄' },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Photoshop', icon: '🎨' },
        { name: 'InDesign', icon: <SiAdobeindesign /> },
    ];

    return (
        <div>
            <h2>Skills</h2>
            <div className={styles.category}>
                <h4>Programming Languages</h4>
                <IconList list={programmingLanguages} />
            </div>

            <div className={styles.category}>
                <h4>Frameworks</h4>
                <IconList list={frameworks} />
            </div>

            <div className={styles.category}>
                <h4>Technologies</h4>
                <IconList list={technologies} />
            </div>
        </div>
    );
};

export default Skills;
