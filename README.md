This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What is this?

Example on how to share components when migrating from Create React App to NextJS with being able to run both of them at the same time.

## How it works?

With the help of [react-app-rewire-alias](https://github.com/oklas/react-app-rewire-alias) we alias the /next folder of NextJS to Create React App. Therefore we can reuse the same components while migrating from one to another.

config-override.js:
```bash
module.exports = function override(config) {
  return alias({
    next: '../next',
  })(config);
};
```

## Getting Started

To run Create React App the development server (.env sets port 3001):

```bash
cd cra
npm run start
# or
yarn dev
```

To run the NextJS development server (by default port 3000):

```bash
cd next
npm run dev
# or
yarn dev
```

## Hot reloading

While changing next/src/components/Component.js to "hola mikko" you can see hot reloading in both Create React App and NextJS applications. Ole!
