import React, { FC } from 'react';
import styles from './Project.module.css';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import IconList, { IconItem } from '../IconList';

interface ProjectProps {
    name: string;
    image?: string;
    github?: string;
    website?: string;
    desc?: string;
    skills?: IconItem[];
}

const Project: FC<ProjectProps> = ({
    name,
    image,
    github,
    website,
    desc,
    skills,
}) => {
    return (
        <div className={styles.projectCard}>
            {image && (
                <div className={styles.imageContainer}>
                    <Image
                        src={image}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className={styles.image}
                    />
                </div>
            )}
            <div className={styles.content}>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.description}>{desc}</p>
                {skills && (
                    <div className={styles.skills}>
                        <IconList list={skills} center={true} />
                    </div>
                )}
                <div className={styles.links}>
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <FaGithub /> GitHub
                        </a>
                    )}
                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <TbWorld /> Website
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
