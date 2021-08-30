import Head from 'next/head'
import { conferenceName, description } from '../utils/constants'

const urlPrefix = process.env.NODE_ENV === 'production' ? '/conf2021' : ''

const SEO = () => {
  return (
    <>
      <Head>
        <title>{conferenceName}</title>
        <link rel="icon" href={`${urlPrefix}/favicon.ico`} />
        <link rel="manifest" href={`${urlPrefix}/manifest.json`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="description" content={description} key="description" />
        <meta
          property="og:site_name"
          content={conferenceName}
          key="description"
        />
        <meta property="og:type" content="website" key="description" />
        <meta property="og:description" content={description} key="description" />
        <meta
          property="og:title"
          content={conferenceName}
          key="twitter:title"
        />
        <meta property="og:url" content={conferenceName} key="twitter:title" />
        <meta
          property="og:image"
          content={`${urlPrefix}/concept.png`}
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content={description}
          key="twitter:description"
        />
        <meta
          property="twitter:title"
          content={conferenceName}
          key="twitter:title"
        />
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        <meta property="twitter:site" content="@vscodejp" key="twitter:site" />
        <meta
          property="twitter:creator"
          content="@vscodejp"
          key="twitter:site"
        />
        <meta property="twitter:site" content="@vscodejp" key="twitter:site" />
        <meta
          property="og:image"
          content={`${urlPrefix}/concept.png`}
          key="twitter:title"
        />
      </Head>
    </>
  )
}

export default SEO
