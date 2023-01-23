import Head from "next/head";
import { Main } from "../components/layout";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log("session", session);

  return (
    <>
      <Head>
        <title>One factura</title>
        <meta name="description" content="one factura test project" />
      </Head>
      <Header />
      <Main>
        <div>
          {session && <button onClick={() => signOut()}>Sign out</button>}
        </div>
      </Main>
      <Footer />
    </>
  );
}
