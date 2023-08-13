import { createContext } from "react";
export const PageContext = createContext(null);

export function PageProvider({ value, children }) {
    return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}
