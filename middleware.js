import NextAuth from "next-auth";
import { authConfig } from "./src/app/authconfig";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
export default NextAuth(authConfig).auth;
