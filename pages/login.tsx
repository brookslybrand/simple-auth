import Header from "next/head";
import { signIn } from "next-auth/client";

import Button from "../components/button";

const callbackUrl = `/`;
export default function Login() {
  return (
    <>
      <Header>
        <title>Login</title>
      </Header>
      <main className="flex flex-col max-w-max mx-auto mt-8 space-y-8 items-center">
        <h1 className="text-5xl">Log in</h1>
        <Button
          onClick={() => {
            signIn("google", { callbackUrl });
          }}
        >
          Continue with google
        </Button>
      </main>
    </>
  );
}
