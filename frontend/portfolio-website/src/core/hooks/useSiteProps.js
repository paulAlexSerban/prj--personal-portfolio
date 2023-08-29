import { useContext } from "react";
import { SitePropsContext } from "@/core/context/SitePropsContext";
/**
 * This hook is used to access the site props from the SitePropsContext.
 * @returns {Object} Returns the site props.
 * 
 * Useful for ensuring that the site props are available before rendering the page.
 * Instead of exporting SitePropsContext directly without any checks, you can export a custom hook
 * that throws an error if the site props are not available.
 */
export default function useSiteProps() {

  const context = useContext(SitePropsContext);
  if (context === null) {
      throw new Error("useSiteProps must be used within a SitePropsProvider");
  }
  return context;
}
