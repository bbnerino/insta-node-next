import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // const token = sessionStorage.getItem("token");

  const [isLogin, setIsLogin] = useState(!!sessionStorage.getItem("token"));
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      router.push("/main");
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Instagram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
