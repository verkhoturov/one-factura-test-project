import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_ID = "753188409598-qfaauh3j4kjqt8cdfd54enpqpd2s00nb.apps.googleusercontent.com";
const GOOGLE_SECRET = "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";

const options = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options);