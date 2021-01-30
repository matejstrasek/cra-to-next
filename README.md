This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What is this?

Example on how to share components when migrating from Create React App to NextJS with being able to run both of them at the same time.

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

## Getting Started

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

## Hot reloading

While changing next-js/src/components/Component.js to "hola mikko" you can see hot reloading in both Create React App and NextJS applications. Ole!
