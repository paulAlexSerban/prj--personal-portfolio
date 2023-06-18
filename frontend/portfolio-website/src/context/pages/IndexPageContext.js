import { createContext } from "react";
import content from "@/content/pages/index.json";

export const IndexPageContext = createContext(null);

export function IndexPageProvider({ children }) {
    return <IndexPageContext.Provider value={content}>{children}</IndexPageContext.Provider>;
}
