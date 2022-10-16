import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container bg="gray.200" centerContent maxW="auto" height="100vh">
      <Head>
        <title>Basic Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}

      <footer className={styles.footer}>
        <a href="https://edg.io" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/edgio.svg" alt="Edgio Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Container>
  );
};

export default Layout;
