import Head from 'next/head'
import i18next from 'i18next'
import '../../i18n.init'
import { urlPrefix } from '@utils/endpoints.constants'

import { ColorThemeProvider } from '@lib/ColorThemeContext'

import '@static/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  i18next.changeLanguage(pageProps.language)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="manifest" href={`${urlPrefix}/manifest.json`} />
      </Head>
      <ColorThemeProvider>
        <Component {...pageProps} />
      </ColorThemeProvider>
    </>
  )
}

export default MyApp
