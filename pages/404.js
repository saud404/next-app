import Head from "next/head";
import Link from 'next/link';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div class="text-black bg-black">
      <NextSeo
        title="404: M-Open73 | Page Not Found"
        description="404 page for all our missing pages"
        canonical="https://nine4-3.vercel.app/404"
        openGraph={{
          url: "https://nine4-3.vercel.app/404",
        }}
      />
      <Head>
        <title>M-Open73 | Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div class="flex flex-col justify-center mx-auto text-center mt-52 max-w-2x1">
        <h1 class="text-3xl font-bold tracking-tight text-white md:text-5xl">
          404 – Unavailable
        </h1>
        <br />
        <Link href="/">
          <a
            class="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4">
            Return Home
          </a>
        </Link>
      </div>
      <div class="mt-64"></div>
      <Footer />
    </div>
  );
}
