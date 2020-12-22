This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Modules included
- Typescript
- styled-components
- ant design
- eslint, prettier
- automatic daily deployment (need to configure on github actions)
- i18n internationalization with rosetta

- TODO add cookie banner?
## Configuration

### Setup sitemap
First add the following line to robots.txt

```
Sitemap: https://[FULL_URL]/sitemap.xml
```

Then add sitemap.xml to /public

### Setup ant landing
First copy all ant landing files. index.jsx goes into pages, less files go into assets/less, all other jsx files go into components, and data.source.js and util.js go into common.

Afterwards, just change the paths inside all files ('./util.js' into '../common/utils.js', etc) and you'll be ready to go!