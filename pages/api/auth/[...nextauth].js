import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options = {
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options);