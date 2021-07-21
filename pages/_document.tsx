import Document, { Html, Head, Main, NextScript } from 'next/document'



class CustomDocument extends Document {

    render() {
        // console.log("log in doc only in server");
        return (
            <Html>
                <Head>
                </Head>

                <body>
                        <Main />
                        <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument