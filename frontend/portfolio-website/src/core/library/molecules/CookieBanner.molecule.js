import { useContext, useState, useEffect } from 'react';
import { CookieContext } from '@/context/CookieContext';
import styles, { base, header, content } from '@/styles/molecules/cookieBanner.module.scss';
import { Paragraph, Heading, Link } from '@/core/atoms/typography';
import ButtonGroup from '@/core/molecules/ButtonGroup.molecule';
import Section from '../organisms/Section.organism';
import { Button } from '@/core/atoms/form';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
    display: 'swap',
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    style: ['normal'],
    variable: '--text-regular',
});

const CookieBanner = () => {
    const [mounted, setMounted] = useState(false);
    const { bannerVisible, saveSettings } = useContext(CookieContext);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!bannerVisible) {
        return null;
    }

    const handleAcceptAll = () => {
        saveSettings({ essential: true, analytics: true, marketing: true });
    };

    const handleSettingsClick = () => {
        // Here you could open the CookieSettings Modal
    };

    return (
        <article className={[base, roboto.className, mounted ? '' : styles['base--hidden']].join(' ')}>
            <header className={header}>
                <Heading level="3">This website is using cookies to improve your experience. </Heading>
            </header>

            <div className={content}>
                <Paragraph>
                    The website is using cookies to provide you with the best possible experience. The website is using:
                    essential cookies to work correctly and secure, basic analytics cookies to know how the website is
                    used and to help improve how the site performs and marketing cookies to show relevant ads.
                    Non-essential cookies will not be placed unless you have given us permission to do so. You can read
                    more about the{' '}
                    <Link href="/privacy-policy" target="_blank" isInternal={true}>
                        Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link href="/cookie-policy" target="_blank" isInternal={true}>
                        Cookie Policy
                    </Link>
                    .
                </Paragraph>

                <ButtonGroup>
                    <Button label="Accept All" onClick={handleAcceptAll} styleType="primary" />
                    <Button label="Reject All" onClick={handleSettingsClick} styleType="secondary" />
                    <Button label="Settings" onClick={handleSettingsClick} styleType="secondary" />
                </ButtonGroup>
            </div>
        </article>
    );
};

export default CookieBanner;
