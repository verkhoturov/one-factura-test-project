import Head from "next/head";
import React from "react";
import Router from "next/router";
import { Main } from "../components/layout";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Home() {
  React.useEffect(() => {
    Router.push("/login");
  }, []);

  return (
    <>
      <Head>
        <title>One factura</title>
        <meta name="description" content="one factura test project" />
      </Head>
      <Header />
      <Main>
        <div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
