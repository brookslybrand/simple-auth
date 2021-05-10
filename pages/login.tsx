import Header from "next/head";
import { signIn } from "next-auth/client";

const callbackUrl = `/`;
export default function Login() {
  return (
    <>
      <Header>
        <title>Login</title>
      </Header>
      <main className="flex flex-col max-w-max mx-auto mt-8 space-y-8 items-center">
        <h1 className="text-5xl">Log in</h1>
        <button
          className="
            rounded-md p-2 text-lg text-gray-900 border-2 border-green-600
            hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-green-600
          "
          onClick={() => {
            signIn("google", { callbackUrl });
          }}
        >
          Continue with google
        </button>
      </main>
    </>
  );
}
