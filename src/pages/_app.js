import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/icon.css";
import "@/styles/taxi-styles.css";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
