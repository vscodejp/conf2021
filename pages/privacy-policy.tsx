import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import styles from "../static/Home.module.scss";

import ButtonElement from "../components/ButtonElement";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ terms }) {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>{"プライバシーポリシー"}</h1>

        <div className={styles.content}>
          <ReactMarkdown skipHtml={false}>{terms}</ReactMarkdown>
        </div>

        <ButtonElement path={"/"}>{"ページトップに戻る"}</ButtonElement>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const terms = fs.readFileSync(
    process.cwd() + "/docs/privacy-policy.md",
    "utf8"
  );
  return {
    props: {
      terms: terms,
    },
  };
};
