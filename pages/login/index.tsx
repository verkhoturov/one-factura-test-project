import Head from "next/head";
import React from "react";
import Router from "next/router";
import { Main } from "../../components/layout";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";

import { useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (session?.user) {
      Router.push("/profile");
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>One factura</title>
        <meta name="description" content="one factura test project" />
      </Head>
      <Header />
      <Main>
        {status === "loading" ? (
          <p style={{ textAlign: "center" }}>încărcare...</p>
        ) : (
          <Form />
        )}
      </Main>
      <Footer />
    </>
  );
}
