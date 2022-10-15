import Head from 'next/head';
import { FC } from 'react';

interface MetaProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    keywords?: string;
}

const Meta: FC<MetaProps> = ({ title, keywords, description, url, image }) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Vincent Zhao" />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: 'Monta Vista CSF',
};

export default Meta;
