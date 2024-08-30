import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      httpOptions: {
        timeout: 10000, // Set timeout to 10 seconds (10000 ms)
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      httpOptions: {
        timeout:60000, // Set timeout to 30 seconds (10000 ms)
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("Sign In Callback:", user, account, profile, email);
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect Callback:", url, baseUrl);
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  events: {
    async signIn({ account }) {
      if (account) {
        console.log("Account:", account);
      } else {
        console.log("Account is null or undefined");
      }
    },
  },
};
