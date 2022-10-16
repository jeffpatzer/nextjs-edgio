import Head from "next/head";
import Calculator from "./calculator";
import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Basic Calculator</title>
      </Head>
      <Calculator />
    </Layout>
  );
}
