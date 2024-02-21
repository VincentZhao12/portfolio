import React, { FC, ReactNode } from 'react';
import styles from './Project.module.css';
import Image from 'next/image';
import Button from '../Button';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import IconList, { IconItem } from '../IconList';

interface ProjectProps {
    name: string;
    image?: string;
    children?: ReactNode;
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
        <div className={styles.pane}>
            <div className={styles.vstack}>
                <div className={styles.toparea}>
                    <h3>{name}</h3>
                    <div className={styles.buttongroup}>
                        {github && (
                            <a href={github} target="_blank">
                                <Button color="black">
                                    <FaGithub />
                                </Button>
                            </a>
                        )}
                        {website && (
                            <a href={website} target="_blank">
                                <Button color="blue">
                                    <TbWorld />
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
                {image && (
                    <div className={styles.squareImage}>
                        <Image
                            src={image}
                            alt={name}
                            className={styles.image}
                            width={700}
                            height={700}
                        />
                    </div>
                )}
            </div>
            <span className={styles.desc}>{desc}</span>
            {skills && (
                <div className={styles.skills}>
                    <IconList list={skills} center={true} />
                </div>
            )}
        </div>
    );
};

export default Project;
