import { useContext, useState } from 'react';
import { CookieContext } from '@/context/CookieContext';
import { base, header, content } from '@/styles/molecules/cookieSettings.module.scss';
import { Paragraph, Heading, Link } from '@/core/atoms/typography';
import { Button, Checkbox, Fieldset } from '@/core/atoms/form';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
    display: 'swap',
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    style: ['normal'],
    variable: '--text-regular',
});

const CookieSettings = () => {
    const { cookieSettings, saveSettings } = useContext(CookieContext);
    const [localSettings, setLocalSettings] = useState(cookieSettings);

    const handleSave = () => {
        saveSettings(localSettings);
    };

    const handleCheckboxChange = (e) => {
        setLocalSettings({
            ...localSettings,
            [e.target.name]: e.target.checked,
        });
    };

    return (
        <div className={[base, roboto.className].join(' ')}>
            <header className={header}>
                <Heading level="3">Cookie Settings</Heading>
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

                <Fieldset>
                    <Checkbox checked={localSettings.essential} name="essential" disabled={true} label="Essential" inputId="essentialCookiesCheck"/>
                    <Checkbox
                        checked={localSettings.analytics}
                        name="analytics"
                        onChange={handleCheckboxChange}
                        label="Analytics"
                        inputId="analyticsCookiesCheck"
                    />
                    <Checkbox
                        checked={localSettings.marketing}
                        name="marketing"
                        onChange={handleCheckboxChange}
                        label="Marketing"
                        inputId="marketingCookiesCheck"
                    />
                </Fieldset>

                <Button onClick={handleSave} styleType="primary">
                    Save Settings
                </Button>
            </div>
        </div>
    );
};

export default CookieSettings;
