import "@/styles/base/index.scss";

import { SitePropsProvider } from "@/core/context/SitePropsContext";

function App({ Component, pageProps }) {
    return (
        <SitePropsProvider>
            <Component {...pageProps} />
        </SitePropsProvider>
    );
}

export default App;

