[![Netlify Status](https://api.netlify.com/api/v1/badges/f43dd0bc-ce3d-4262-bef2-29b4c9347442/deploy-status)](https://app.netlify.com/sites/blog-aboelkassem/deploys)

# Gatsby Starter Blog Tachyons

A truly complete & feature rich Gatsby Blog Starter. Powered by Gatsby and Netlify CMS.

## Features

- Elastic-Lunr Search
- Pagination
- SEO Friendly(Slugs, Sitemap, Schemas, Robots.txt, Meta Tags, GTM etc.)
- Disqus and Share Support
- Tags and RSS Feed
- Progressive Web App with Offline Support
- Easy Configuration using `config.js` file
- Tachyons and Sass Support for styling
- Medium like progressive image loading
- Code Highlighting with Prism JS
- Embedding Support (Youtube, Twitter, Instagram etc)
- Forms using Netlify Forms, Formik & Yup
- GDPR Cookie Consent

## Getting Started

Create your own project with Gatsby CLI:

```shell
gatsby new <my-blog-name> https://github.com/aboelkassem/blog.git
```

## Environment Variables

- GTM_ID
- GTAGJS_ID
- DISQUS_SHORTNAME

## Available NPM Commands

### Develop

Start a hot-reloading development environment accessible at `localhost:8000`

```shell
yarn start
```

### Build

Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.

```shell
yarn build
```

### Serve

gatsby serve — Gatsby starts a local HTML server for testing your built site.

```shell
yarn serve
```

### Lint

Lint the code according to eslintrc file, for consistency.

```shell
yarn lint
```

### Lint Fix

Auto fix Lint issues.

```shell
yarn lint:fix
```

### Clean

Remove the .cache and public for a scratch compile.

```shell
yarn clean
```

## Configuration (Very Important!)

To personalize and configure this Starter open `config.js` file and replace the default values.

```javascript
const config = {
  siteTitle: `aboelkassem Blog`, // Site title.
  siteTitleAlt: `qassem blog`, // Alternative site title for SEO.
  siteLogo: `/icons/icon-512x512.png`, // Logo used for SEO and manifest.
  siteUrl: `https://blog.aboelkassem.tech/`, // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-business/.
  siteDescription: `aboelkassem Blog is the personal blog of Mohamed Abdelrahman. A Brew of Awesomeness with a Pinch of Magic...`, // Website description used for RSS feeds/meta description tag.
  siteRss: `/rss.xml`,
  userName: `Mohamed Abdelrahman`,
  userTwitter: `maboelkassim`,
  siteFBAppID: ``,
  userLocation: `Beni Suef, Egypt`,
  copyright: `Copyright © aboelkassem Blog 2020-${new Date()
    .getFullYear()
    .toString()
    .substr(2, 2)}. All Rights Reserved.`, // Copyright string for the footer of the website and RSS feed.
  themeColor: `#676767`, // Used for setting manifest and progress theme colors.
  backgroundColor: `#ffffff`, // Used for setting manifest background color.
  cookieConsent: `This website uses cookies which are used to collect anonymous information to improve your browsing experience and for analytics and metrics.`,
  keywords: `aboelkassem, aboelkassem blog, mohamed abdelrahman, mohamed aboelkassem, blog aboelkassem`,
};
```

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/aboelkassem/blog" target="_blank">
  <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg"/>
</a>
