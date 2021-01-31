This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Next.js](https://nextjs.org/) with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Motivation

Idea on how to easier migrate parts of Create React App to NextJS step by step while being with both in production in the meantime.

## Problem

We want to share components between two projects and being able to run both of them at the same time. Problem occurs when we want to import code from outside the src of the current project.

```bash
Module not found: You attempted to import ../../components/Component which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
```

## How it works?

With the help of [react-app-rewire-alias](https://github.com/oklas/react-app-rewire-alias) we alias the /next-js folder of NextJS to Create React App. Therefore we can reuse the same components while migrating from one to another.

config-override.js for create-react-app:

```bash
module.exports = function override(config) {
  return alias({
    'next-js': '../next-js',
  })(config);
};
```

Note: In one-folder example we alias the /components folder.

## Folder structure

Repository contains two different approaches: two-folder-parallel-structure with Create React App and NextJS in parallel and one-folder-with-second-inside-structure with NextJS as primary and Create React App as secondary folder.

## Getting Started

Depending on the folder structure go into desired folder: two-folder-parallel-structure or one-folder-with-second-inside-structure.

To run Create React App the development server (.env sets port 3001):

```bash
cd create-react-app
npm install
npm run start
# or
yarn
yarn dev
```

To run the NextJS development server (by default port 3000):

```bash
cd next-js
npm install
npm run dev
# or
yarn
yarn dev
```

## Routing example

Example with two-folder-parallel-structure shows a case when we migrated only home page while /cats and /dogs routes are a rewrite to create-react-app.

NextJS next.config.js in the root handles rewrites of the non-migrated routes to Create React App.
```bash
// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        destination: `http://localhost:3001/:path*`, // Rewrite non-migrated routes to Create React App
      },
    ];
  },
};
```

Keep in mind is no problem to handle case like this also in production.

## Fun Fact: Hot Reloading

While changing component that both of the applications are using (one-folder-with-second-inside-structure/src/components/Component.js) to "hola mikko" you can see hot reloading in both Create React App and NextJS applications at the same time. Ole!
