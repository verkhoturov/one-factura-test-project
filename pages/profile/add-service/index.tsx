import Head from "next/head";
import { Main } from "../../../components/layout";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";
import { UserInfo } from "../../../components/user-info";
import { AddService } from "../../../components/add-service";

export default function Add() {
  return (
    <>
      <Head>
        <title>One factura</title>
        <meta name="description" content="one factura test project" />
      </Head>
      <Header>
        <UserInfo />
      </Header>
      <Main>
        <AddService />
      </Main>
      <Footer />
    </>
  );
}
