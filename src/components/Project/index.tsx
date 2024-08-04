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
        <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            title="github"
        >
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
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                }}
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
                                style={{
                                    backgroundColor: '#4287f5',
                                    color: 'white',
                                }}
                            >
                                <TbWorld /> Website
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Project;
