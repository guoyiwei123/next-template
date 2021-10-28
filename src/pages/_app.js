import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store";
import "../../style/index.scss";
function MyApp({ Component, pageProps }) {
    const { seo } = pageProps;
    return (
        <Provider store={store}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                {seo ? <>
                    <meta name="description" content={seo.description || ""} />
                    <meta name="keywords" content={seo.keywords || ""} />
                    <title>{seo.title || ""}</title>
                </> : null}
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}
export default MyApp;