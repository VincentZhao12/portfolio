import { FC } from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Nav from './Nav';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
