import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    Providers.Email({
      server: process.env.EMAIL_SERVER ?? "",
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: {
    type: "postgres",
    url: process.env.DATABASE_URL,
    // this is fine since this is a very simple application
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
