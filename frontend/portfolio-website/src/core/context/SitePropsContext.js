import { createContext, useContext, useState, useEffect } from "react";
import { encodeToBase64 } from "@/core/utils/base64";
import content from "@/content/dist/siteProps.json";
const { GIT_BRANCH } = process.env;

export const SitePropsContext = createContext(null);
export function SitePropsProvider({ children }) {
    const [siteProps, setSiteProps] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        /**
         * Instead of modifying the original content object in the useEffect, consider creating a 
         * copy of content and modifying that instead. This ensures that you're not repeatedly 
         * modifying the same cached object each time the useEffect runs.
         */
        const contentDeepCopy = JSON.parse(JSON.stringify(content)); // Create a deep copy of content
        /**
         * By creating a copy of content before modifying it, you ensure that each render of the
         * SitePropsProvider component modifies a fresh copy of the content rather than repeatedly
         * modifying the same cached object.
         */
        contentDeepCopy?.socialMediaLinks.map((link) => {
            if (link.isEncoded) {
                link.href = encodeToBase64(link.href);
            }
            return link.href;
        });
        setSiteProps(contentDeepCopy);
        setIsLoading(false); // Once siteProps is set, update isLoading state to false
    }, []);

    // if siteProps is still loading, render a loading message or component
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <SitePropsContext.Provider value={siteProps}>{children}</SitePropsContext.Provider>;
}

