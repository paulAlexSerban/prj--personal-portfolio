
import { useContext } from "react";
import { PageContext } from "@/core/context/PageContext";
/**
 * This hook is used to access the page props from the PageContext.
 * @returns {Object} Returns the page props.
 * @example
 * // Render the page title from the page props.
 * const pageProps = usePageProps();
 * return <h1>{pageProps.title}</h1>;
 *
 * Useful for ensuring that the page props are available before rendering the page.
 * Instead of exporting PageContext directly without any checks, you can export a custom hook
 * that throws an error if the page props are not available.
 */
export default function usePageProps() {
  const context = useContext(PageContext);
  if (context === null) {
      throw new Error("usePageProps must be used within a PageProvider");
  }
  return context;
}