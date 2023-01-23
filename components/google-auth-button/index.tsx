import { Button } from "../button";
import { GoogleLogoIcon } from "./logo";
import { signIn } from "next-auth/react";

export const GoogleAuthButton = () => (
  <Button
    onClick={() =>
      signIn("google", {
        callbackUrl: "/profile",
      })
    }
    kind="secondary"
    icon={<GoogleLogoIcon />}
  >
    Autentificați-vă cu Google
  </Button>
);
