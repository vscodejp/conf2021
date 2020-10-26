import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class MyDocument extends NextDocument<Props> {
    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
