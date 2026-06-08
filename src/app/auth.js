import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { User } from "./lib/models";
import bcrypt from "bcrypt";
import { connectToDB } from "./lib/connect";
import { authConfig } from "./authconfig";

const login = async (credentials) => {
  try {
    await connectToDB();
    console.log("RAW CREDENTIALS:", credentials);
    console.log("INPUT PASSWORD:", credentials.password);

    const user = await User.findOne({
      username: credentials.username,
    });

    console.log("DB USER:", user);

    if (!user) throw new Error("Wrong credentials");

    console.log("DB PASSWORD:", user.password);

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password,
    );

    console.log("PASSWORD MATCH:", isPasswordCorrect);

    if (!isPasswordCorrect) throw new Error("Wrong credentials");

    return user;
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    throw err;
  }
};
export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log("🔥 AUTHORIZE RECEIVED:", credentials);

        const user = await login(credentials);
        return user;
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
