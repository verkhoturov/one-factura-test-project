import { Button } from "../button";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import styles from "./index.module.scss";

export const UserInfo = () => {
  const { data: session } = useSession();

  if (!session?.user) return null;

  const { name, email } = session.user;

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p className={styles.text}>
          {name} <br /> {email} <br />
          <Link href="/">modificarea detaliilor profilului</Link>
        </p>
      </div>

      <div className={styles.signOutBtnWrapper}>
        <Button
          onClick={() => signOut({ callbackUrl: "/login" })}
          kind="outline"
        >
          Ieșire
        </Button>
      </div>
    </div>
  );
};
