import { useState } from "react";
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
      <main className="flex flex-col max-w-max mx-auto mt-8 items-center">
        <h1 className="text-5xl">Log in</h1>
        <Button
          className="mt-8"
          onClick={() => {
            signIn("google", { callbackUrl });
          }}
        >
          Continue with Google
        </Button>
        <hr className="border-0.5 border-dashed border-gray-400 w-full mt-8" />
        <EmailLogin />
      </main>
    </>
  );
}

function EmailLogin() {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="flex flex-col items-start w-full mt-8">
        <label
          className="text-lg text-gray-700 leading-4"
          htmlFor="email-input"
        >
          Email
        </label>
        <input
          id="email-input"
          className={`
            w-full rounded-md p-2 text-gray-900 border-2 border-green-600 mt-2
            hover:ring-1 hover:ring-green-400 focus:outline-none focus:ring-1 focus:ring-green-600
          `}
          type="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>

      <Button
        className="mt-4"
        onClick={() => {
          signIn("email", { email, callbackUrl });
        }}
      >
        Continue with email
      </Button>
    </>
  );
}
