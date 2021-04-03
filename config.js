const config = {
  siteTitle: `Aboelkassem Blog`, // Site title.
  siteTitleAlt: `aboelkassem blog`, // Alternative site title for SEO.
  siteLogo: `/icons/icon-512x512.png`, // Logo used for SEO and manifest.
  siteUrl: `https://blog.aboelkassem.com`, // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-business/.
  siteDescription: `aboelkassem blog is the personal blog of Mohamed Abdelrahman. My digital garden, a place to share my thoughts. A Brew of Awesomeness with a Pinch of Magic...`, // Website description used for RSS feeds/meta description tag.
  siteRss: `/rss.xml`,
  googleTagManagerID: `GTM-57J8VXW`, // GTM tracking ID //GTM_ID.
  userName: `Mohamed Abdelrahman`,
  coffeeLink: `https://www.buymeacoffee.com/aboelkassem`,
  userTwitter: `aboel_kassem`,
  siteFBAppID: `mo.aboelkassem`,
  userLocation: `Beni Suef, Egypt`,
  copyright: `Copyright © Aboelkassem Blog 2020-${new Date().getFullYear().toString().substr(2, 2)}. All Rights Reserved.`, // Copyright string for the footer of the website and RSS feed.
  themeColor: `#676767`, // Used for setting manifest and progress theme colors.
  backgroundColor: `#ffffff`, // Used for setting manifest background color.
  cookieConsent: `This website uses cookies which are used to collect anonymous information to improve your browsing experience and for analytics and metrics.`,
}

module.exports = config
