import { createContext, useState, useEffect } from 'react';

export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [bannerVisible, setBannerVisible] = useState(true);
  const [cookieSettingsVisible, setCookieSettingsVisible] = useState(false);

  const cookieTTL = 365; // days
  const oneWeek = 7; // days

  useEffect(() => {
    const savedSettings = localStorage.getItem('cookieSettings');
    const savedExpirationDate = localStorage.getItem('cookieSettingsExpirationDate');

    if (savedSettings && savedExpirationDate) {
      const remainingDays = (new Date(savedExpirationDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
      if (remainingDays <= 0) {
        localStorage.removeItem('cookieSettings');
        localStorage.removeItem('cookieSettingsExpirationDate');
      } else if (remainingDays <= oneWeek) {
        renewCookie();
      } else {
        setCookieSettings(JSON.parse(savedSettings));
        setBannerVisible(false);
      }
    }
  }, []);

  const renewCookie = () => {
    const cookieSettingsTTL = new Date();
    cookieSettingsTTL.setDate(cookieSettingsTTL.getDate() + cookieTTL);
    localStorage.setItem('cookieSettingsExpirationDate', cookieSettingsTTL.toISOString());
  }

  const saveSettings = (settings) => {
    setCookieSettings(settings);
    renewCookie();
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    setBannerVisible(false);
    setCookieSettingsVisible(false);
  };

  return (
    <CookieContext.Provider
      value={{
        cookieSettings,
        bannerVisible,
        cookieSettingsVisible,
        saveSettings,
        setBannerVisible,
        setCookieSettingsVisible,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export default CookieProvider;
