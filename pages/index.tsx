import Head from "next/head";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client";

import Button from "../components/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, loading] = useSession();
  const expired = useTimeout();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {loading ? (
        expired ? (
          <Spinner />
        ) : null
      ) : (
        <main className="flex flex-col max-w-max mx-auto mt-8 space-y-8 items-center text-gray-800">
          {session ? (
            <>
              <h1 className="text-5xl">Welcome {session.user.name}</h1>
              <Button onClick={() => signOut()}>Log out</Button>
            </>
          ) : (
            <>
              <h1 className="text-5xl">Welcome</h1>
              <Link href="/login">
                <a className="text-2xl p-1 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800">
                  Please log in
                </a>
              </Link>
            </>
          )}
        </main>
      )}
    </>
  );
}

function useTimeout(ms = 500) {
  const [expired, setExpired] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExpired(true);
    }, ms);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [ms]);

  return expired;
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-16 w-16 text-green-800 absolute inset-0 m-auto"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
