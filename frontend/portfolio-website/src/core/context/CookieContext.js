import { createContext, useState, useEffect } from 'react';

export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
    const [cookieSettings, setCookieSettings] = useState({
        essential: true,
        analytics: false,
        marketing: false,
    });
    const [bannerVisible, setBannerVisible] = useState(true);

    useEffect(() => {
        const savedSettings = localStorage.getItem('cookieSettings');
        if (savedSettings) {
            setCookieSettings(JSON.parse(savedSettings));
            setBannerVisible(false);
        }
    }, []);

    const saveSettings = (settings) => {
        setCookieSettings(settings);
        localStorage.setItem('cookieSettings', JSON.stringify(settings));
        setBannerVisible(false);
    };

    return (
        <CookieContext.Provider value={{ cookieSettings, bannerVisible, saveSettings, setBannerVisible }}>
            {children}
        </CookieContext.Provider>
    );
};
