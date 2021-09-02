import Head from "next/head";
import { conferenceName, description } from "../utils/constants";

const urlPrefix =
  process.env.NODE_ENV === "production"
    ? "https://vscodejp.github.io/conf2021"
    : "";

const SEO = () => {
  return (
    <>
      <Head>
        <title>{conferenceName}</title>
        <link rel="icon" href={`${urlPrefix}/favicon.ico`} />
        <link rel="manifest" href={`${urlPrefix}/manifest.json`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="description" content={description} />
        <meta property="og:site_name" content={conferenceName} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={conferenceName} />
        <meta property="og:url" content={conferenceName} />
        <meta property="og:image" content={`${urlPrefix}/concept.png`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:title" content={conferenceName} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@vscodejp" />
        <meta property="twitter:creator" content="@vscodejp" />
        <meta property="twitter:site" content="@vscodejp" />
        <meta
          property="og:image"
          content={`${urlPrefix}/concept.png`}
          key="twitter:title"
        />
      </Head>
    </>
  );
};

export default SEO;
