[![Netlify Status](https://api.netlify.com/api/v1/badges/a3b02aa4-93ac-47d9-b914-7eb42de75a83/deploy-status)](https://app.netlify.com/sites/theleakycauldronblog/deploys)

# Gatsby Starter Blog Tachyons

A truly complete & feature rich Gatsby Blog Starter. Powered by Gatsby and Netlify CMS.

## Features

* Elastic-Lunr Search
* Pagination
* SEO Friendly(Slugs, Sitemap, Schemas, Robots.txt, Meta Tags, GTM etc.)
* Disqus and Share Support
* Tags and RSS Feed
* Progressive Web App with Offline Support
* Easy Configuration using `config.js` file
* Tachyons and Sass Support for styling
* Medium like progressive image loading
* Code Highlighting with Prism JS
* Embedding Support (Youtube, Twitter, Instagram etc)
* Forms using Netlify Forms, Formik & Yup
* GDPR Cookie Consent

## Getting Started
Create your own project with Gatsby CLI:

```shell
gatsby new myblogname https://github.com/v4iv/theleakycauldronblog.git 
```
## Environment Variables

* GTM_ID
* DISQUS_SHORTNAME

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
  siteTitle: `The Leaky Cauldron Blog`, // Site title.
  siteTitleAlt: `TLC Blog`, // Alternative site title for SEO.
  siteLogo: `/icons/icon-512x512.png`, // Logo used for SEO and manifest.
  siteUrl: `https://theleakycauldronblog.com`, // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-business/.
  siteDescription: `The Leaky Cauldron Blog is the personal blog of Vaibhav Sharma. A Brew of Awesomeness with a Pinch of Magic...`, // Website description used for RSS feeds/meta description tag.
  siteRss: `/rss.xml`,
  userName: `Vaibhav Sharma`,
  userTwitter: `aleakycauldron`,
  siteFBAppID: ``,
  userLocation: `Delhi NCR, India`,
  copyright: `Copyright © The Leaky Cauldron Blog 2018-${new Date().getFullYear().toString().substr(2, 2)}. All Rights Reserved.`, // Copyright string for the footer of the website and RSS feed.
  themeColor: `#676767`, // Used for setting manifest and progress theme colors.
  backgroundColor: `#ffffff`, // Used for setting manifest background color.
  cookieConsent: `This website uses cookies which are used to collect anonymous information to improve your browsing experience and for analytics and metrics.`,
}
```

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/aboelkassem/blog" target="_blank">
  <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg"/>
</a>
