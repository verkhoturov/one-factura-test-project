import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_ID = "753188409598-pnt0qqreldku0l2od20hdllbtcd6aucc.apps.googleusercontent.com";
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