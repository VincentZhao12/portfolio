import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import styles from '../styles/Nav.module.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Nav = () => {
    const [shown, setShown] = useState<boolean>(false);
    const router = useRouter();

    return (
        <div className={styles.nav}>
            <div className={styles.navbar}>
                <Link href="/">
                    <a>
                        <div className={styles.logoContainer}>
                            <h1 className={styles.logoText}>Vincent</h1>
                        </div>
                    </a>
                </Link>

                <div className={styles.subnav}>
                    <Link href="/writing">
                        <a className={styles.navlink}>Writing</a>
                    </Link>
                    <Link href="/websites">
                        <a className={styles.navlink}>Websites</a>
                    </Link>
                    <Link href="/random">
                        <a className={styles.navlink}>Random</a>
                    </Link>
                </div>
                <div
                    className={styles.menubuttonCont}
                    onClick={() => setShown(!shown)}
                >
                    <Button className={styles.menubutton}>
                        {shown ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </Button>
                </div>
            </div>
            <SideNav shown={shown} close={() => setShown(false)} />
        </div>
    );
};

interface SideNavProps {
    shown: boolean;
    close: () => void;
}

const SideNav: FC<SideNavProps> = ({ shown, close }) => {
    const router = useRouter();
    return (
        <>
            {shown && (
                <div className={styles.sidenav} onClick={close}>
                    <Link href="/writing">
                        <a className={styles.menulink + ' ' + styles.delay1}>
                            Writing
                        </a>
                    </Link>
                    <Link href="/websites">
                        <a className={styles.menulink + ' ' + styles.delay2}>
                            Websites
                        </a>
                    </Link>
                    <Link href="/random">
                        <a className={styles.menulink + ' ' + styles.delay3}>
                            Random
                        </a>
                    </Link>
                </div>
            )}
        </>
    );
};

export default Nav;
