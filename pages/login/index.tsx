import Head from "next/head";
import React from "react";
import Router from "next/router";
import { Main } from "../../components/layout";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";
import Script from "next/script";

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


      <Script type="text/javascript">
        {`(function (d,s,u,e,p) {
        p=d.getElementsByTagName(s)[0],e=d.createElement(s),e.async=1,e.src=u,p.parentNode.insertBefore(e, p);
        })(document, 'script', 'https://script.ringostat.com/v4/6e/6e8525886980fadf8fb8da26bdd0221a34394fb6.js');`}
      </Script>
    </>
  );
}
