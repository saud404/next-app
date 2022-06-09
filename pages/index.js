import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div class="text-black bg-black">
      <NextSeo
        title="Home: M-Open73 Consultancy"
        description="Welcome to homepage."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-open73 Consultancy | Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
