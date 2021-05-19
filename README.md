## Overview

This is a demo application for a blog post about [Communicating with Developers](http://blog.bugreplay.com/2021/05/communicating-with-developers.html). You can view the deployed version of it [here](https://simple-auth-eight.vercel.app/)

The application consists of two pages:

1. The log in page, where you can use authenticate with Google
2. The home page, which will display your name if you are logged in

There is 1 pull request open which [implements magic links](https://github.com/brookslybrand/simple-auth/pull/2). This will remain open as it is part of the blog.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Note:** Authenticating with Google will only work on the [deployed application](https://simple-auth-eight.vercel.app/) or on http://localhost:3000, as those are the only authorized redirect URIs for this application, and Google does not allow wildcard URIs as a security mechanism.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## How this is built

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses [next-auth](https://next-auth.js.org/) for authentication, [tailwindcss](https://tailwindcss.com/) for styling, and a [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) instance for [magic link authentication](https://github.com/brookslybrand/simple-auth/pull/2).

Finally, this projected is hosted on [Vercel](https://vercel.com/)
