import Head from "next/head";
import Header from "../components/Header";
import Press from "../components/FooterPages/Press";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div class="text-black bg-black">
      <NextSeo
        title="Press: M-Open73 | Press"
        description="Welcome to Press page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Press</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Press />
      <Footer />
    </div>
  );
}
