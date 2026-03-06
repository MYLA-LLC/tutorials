import type { ReactNode } from "react";

import clsx from "clsx";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.header}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            <Link className={clsx("card", styles.card)} to="/docs/dIVa">
              <div className="card__body">
                <Heading as="h2" className={styles.cardTitle}>
                  dIVa Tutorial
                </Heading>
                <p className={styles.cardDescription}>Learn how to use the dIVa application effectively with our comprehensive tutorial.</p>
              </div>
              <div className="card__footer">
                <span className={clsx("button button--primary", styles.cardCta)}>Go to dIVa Tutorial</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
