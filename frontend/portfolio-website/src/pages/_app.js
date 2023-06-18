import "@/styles/base/index.scss";

import { SitePropsProvider } from "@/context/SitePropsContext";

function App({ Component, pageProps }) {
    return (
        <SitePropsProvider>
            <Component {...pageProps} />
        </SitePropsProvider>
    );
}

export default App;

