import Head from "next/head";
import { Main } from "../../components/layout";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>One factura</title>
        <meta name="description" content="one factura test project" />
      </Head>
      <Header />
      <Main>
        <Form />
      </Main>
      <Footer />
    </>
  );
}
