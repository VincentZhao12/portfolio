import React, { FC } from 'react';
import Image from 'next/image';
import styles from './ProfilePicture.module.css';

interface ProfilePictureProps {}

const ProfilePicture: FC<ProfilePictureProps> = () => {
    return (
        <div className={styles.circularProfilePicture}>
            <Image
                priority
                src={'/images/profile.jpg'}
                alt={'pfp'}
                className={styles.image}
                width={1000}
                height={1000}
            />
        </div>
    );
};

export default ProfilePicture;
