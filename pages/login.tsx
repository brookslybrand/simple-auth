import Header from "next/head";
import { signIn } from "next-auth/client";

const callbackUrl = `/`;
export default function Login() {
  return (
    <>
      <Header>
        <title>Login</title>
      </Header>
      <main>
        <div>
          <h1>Log in</h1>
          <button
            onClick={() => {
              signIn("google", { callbackUrl });
            }}
          >
            Continue with google
          </button>
        </div>
      </main>
    </>
  );
}
