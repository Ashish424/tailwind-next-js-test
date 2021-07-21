import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'
import Head from "next/head";


function MyApp({ Component, pageProps }: AppProps) {
    //executed both on server and client
    console.log('HELLO from _app')

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                </Head>
                <Component {...pageProps} />
            </>
        )


}
export default MyApp
