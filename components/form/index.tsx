import React from "react";
import Link from "next/link";
import { H2 } from "../headings";
import { GoogleAuthButton } from "../google-auth-button";
import { Button } from "../button";
import { Input } from "../input";
import { Checkbox } from "../checkbox";

import styles from "./index.module.scss";

export const Form = () => {
  const [email, setEmail] = React.useState<string>("");
  const [pass, setPass] = React.useState<string>("");
  const [isTermsChecked, setTermsChecked] = React.useState<boolean>(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, pass, isTermsChecked);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <H2>Autorizare</H2>
      </div>
      <div className={styles.googleBtnWrapper}>
        <GoogleAuthButton />
      </div>
      <p className={styles.text}>sau</p>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          name="email"
          onChange={(value) => setEmail(value)}
          type="email"
          label="Email(Conectare)*"
        />
        <Input
          name="pass"
          onChange={(value) => setPass(value)}
          type="password"
          label="Parolă*"
        />
        <div className={styles.newPassWrapper}>
          <Link href="/">Recuperați parola?</Link>
        </div>

        <div className={styles.checkboxWrapper}>
          <Checkbox onClick={() => setTermsChecked(!isTermsChecked)}>
            Accept <Link href="/">&quot;Termenii de utilizare&quot;</Link> și{" "}
            <Link href="/">&quot;Politica de Confidențialitate&quot;</Link>
          </Checkbox>
        </div>

        <div className={styles.submitBtnWrapper}>
          <Button type="submit" disabled={!isTermsChecked}>
            Conectare
          </Button>
        </div>

        <p className={styles.text}>
          Dacă nu aveți un cont, vă rugăm să vă{" "}
          <Link href="/">înregistrați</Link>
        </p>
      </form>
    </div>
  );
};
