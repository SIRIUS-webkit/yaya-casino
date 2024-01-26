import "../styles/styles.scss";
import wrapper from "../redux/store";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yaya Casino</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
