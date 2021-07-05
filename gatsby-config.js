require('dotenv').config()
const path = require('path')
const config = require('./config')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    rssMetadata: {
      siteURL: config.siteUrl + pathPrefix,
      feedURL: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      imageURL: `${config.siteUrl + pathPrefix}/icons/icon-512x512.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `static`, `img`),
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `static`, `img`),
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/tags`, `/tags/*`, `/success`, `/subscribed`, `/unsubscribed`, `/unsubscribe`],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 500,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbersGlobal: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: true,
            },
          },
          `gatsby-remark-embedder`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-instagram-embed`,
    `gatsby-plugin-pinterest`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: '#ffa3d7',
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: 'aboelkassem', // DISQUS_SHORTNAME
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: 'GTM-57J8VXW', // leave empty if you want to disable the tracker // GTM_ID
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it // GTAGJS_ID
        trackingId: "UA-153855958-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "GTM-57J8VXW",
        // Enables Google Optimize Experiment ID
        experimentId: "hIwDYM3XS4mhBXoDrSLk7A",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "hIwDYM3XS4mhBXoDrSLk7A:0",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://blog.aboelkassem.me",
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-57J8VXW',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-1672384345508414`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['**/icon-*'],
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`,
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\/(page-data|app-data)\.json$/,
              handler: `NetworkFirst`,
              options: {
                networkTimeoutSeconds: 1,
              },
            },
            {
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: `StaleWhileRevalidate`,
            },
            {
              urlPattern: /\/$/,
              handler: `NetworkFirst`,
              options: {
                networkTimeoutSeconds: 1,
              },
            },
          ],
        },
        precachePages: [`/blog/*`, `/about`],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        setup (ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata
          ret.allMarkdownRemark = ref.query.allMarkdownRemark
          ret.generator = config.siteTitle
          return ret
        },
        query: `
                {
                  site {
                    siteMetadata {
                      rssMetadata {
                        siteURL
                        feedURL
                        title
                        description
                        imageURL
                        author
                        copyright
                      }
                    }
                  }
                }
              `,
        feeds: [
          {
            serialize (ctx) {
              const rssMetadata = ctx.query.site.siteMetadata.rssMetadata
              return ctx.query.allMarkdownRemark.edges
                .filter(
                  edge => edge.node.frontmatter.templateKey === 'article-page',
                )
                .map(edge => ({
                  categories: edge.node.frontmatter.tags,
                  date: edge.node.frontmatter.date,
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  image: edge.node.frontmatter.cover,
                  author: edge.node.frontmatter.author,
                  url: rssMetadata.siteURL + edge.node.fields.slug,
                  guid: rssMetadata.siteURL + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }))
            },
            query: `
                    {
                      allMarkdownRemark(
                        limit: 1000,
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        edges {
                          node {
                            excerpt(pruneLength: 400)
                            html
                            id
                            fields { slug }
                            frontmatter {
                              title
                              author
                              templateKey
                              cover {
                                publicURL
                              }
                              date(formatString: "MMMM DD, YYYY")
                              tags
                            }
                          }
                        }
                      }
                    }
                  `,
            output: config.siteRss,
            title: config.siteTitle,

          },
        ],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`, `author`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            author: node => node.frontmatter.author,
            tags: node => node.frontmatter.tags,
            slug: node => node.fields.slug,
            templateKey: node => node.frontmatter.templateKey,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: path.join(__dirname, `src`, `cms`, `cms.js`),
        stylesPath: path.join(__dirname, `src`, `assets`, `stylesheets`, `styles.scss`),
        enableIdentityWidget: true,
        htmlTitle: `CMS | ${config.siteTitle}`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: false,
        headers: {
          '/*.js': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/*.css': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/sw.js': [
            'cache-control: public, max-age=0, must-revalidate',
          ],
          '/*': [
            `X-Frame-Options: DENY`,
            `X-XSS-Protection: 1; mode=block`,
            `X-Content-Type-Options: nosniff`,
            `Referrer-Policy: no-referrer-when-downgrade`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeDefaultDirectives: true,
        directives: {
          'script-src': `'self' 'unsafe-inline' data: https://ssl.google-analytics.com googleads.g.doubleclick.net www.googleadservices.com www.google.com www.google-analytics.com https://www.googletagmanager.com pagead2.googlesyndication.com partner.googleadservices.com tpc.googlesyndication.com www.googletagservices.com adservice.google.com adservice.google.ad adservice.google.ae adservice.google.com.af adservice.google.com.ag adservice.google.com.ai adservice.google.al adservice.google.am adservice.google.co.ao adservice.google.com.ar adservice.google.as adservice.google.at adservice.google.com.au adservice.google.az adservice.google.ba adservice.google.com.bd adservice.google.be adservice.google.bf adservice.google.bg adservice.google.com.bh adservice.google.bi adservice.google.bj adservice.google.com.bn adservice.google.com.bo adservice.google.com.br adservice.google.bs adservice.google.bt adservice.google.co.bw adservice.google.by adservice.google.com.bz adservice.google.ca adservice.google.cd adservice.google.cf adservice.google.cg adservice.google.ch adservice.google.ci adservice.google.co.ck adservice.google.cl adservice.google.cm adservice.google.cn adservice.google.com.co adservice.google.co.cr adservice.google.com.cu adservice.google.cv adservice.google.com.cy adservice.google.cz adservice.google.de adservice.google.dj adservice.google.dk adservice.google.dm adservice.google.com.do adservice.google.dz adservice.google.com.ec adservice.google.ee adservice.google.com.eg adservice.google.es adservice.google.com.et adservice.google.fi adservice.google.com.fj adservice.google.fm adservice.google.fr adservice.google.ga adservice.google.ge adservice.google.gg adservice.google.com.gh adservice.google.com.gi adservice.google.gl adservice.google.gm adservice.google.gr adservice.google.com.gt adservice.google.gy adservice.google.com.hk adservice.google.hn adservice.google.hr adservice.google.ht adservice.google.hu adservice.google.co.id adservice.google.ie adservice.google.co.il adservice.google.im adservice.google.co.in adservice.google.iq adservice.google.is adservice.google.it adservice.google.je adservice.google.com.jm adservice.google.jo adservice.google.co.jp adservice.google.co.ke adservice.google.com.kh adservice.google.ki adservice.google.kg adservice.google.co.kr adservice.google.com.kw adservice.google.kz adservice.google.la adservice.google.com.lb adservice.google.li adservice.google.lk adservice.google.co.ls adservice.google.lt adservice.google.lu adservice.google.lv adservice.google.com.ly adservice.google.co.ma adservice.google.md adservice.google.me adservice.google.mg adservice.google.mk adservice.google.ml adservice.google.com.mm adservice.google.mn adservice.google.ms adservice.google.com.mt adservice.google.mu adservice.google.mv adservice.google.mw adservice.google.com.mx adservice.google.com.my adservice.google.co.mz adservice.google.com.na adservice.google.com.ng adservice.google.com.ni adservice.google.ne adservice.google.nl adservice.google.no adservice.google.com.np adservice.google.nr adservice.google.nu adservice.google.co.nz adservice.google.com.om adservice.google.com.pa adservice.google.com.pe adservice.google.com.pg adservice.google.com.ph adservice.google.com.pk adservice.google.pl adservice.google.pn adservice.google.com.pr adservice.google.ps adservice.google.pt adservice.google.com.py adservice.google.com.qa adservice.google.ro adservice.google.ru adservice.google.rw adservice.google.com.sa adservice.google.com.sb adservice.google.sc adservice.google.se adservice.google.com.sg adservice.google.sh adservice.google.si adservice.google.sk adservice.google.com.sl adservice.google.sn adservice.google.so adservice.google.sm adservice.google.sr adservice.google.st adservice.google.com.sv adservice.google.td adservice.google.tg adservice.google.co.th adservice.google.com.tj adservice.google.tl adservice.google.tm adservice.google.tn adservice.google.to adservice.google.com.tr adservice.google.tt adservice.google.com.tw adservice.google.co.tz adservice.google.com.ua adservice.google.co.ug adservice.google.co.uk adservice.google.com.uy adservice.google.co.uz adservice.google.com.vc adservice.google.co.ve adservice.google.vg adservice.google.co.vi adservice.google.com.vn adservice.google.vu adservice.google.ws adservice.google.rs adservice.google.co.za adservice.google.co.zm adservice.google.co.zw adservice.google.cat`,
          'style-src': `'self' 'unsafe-inline' https://tagmanager.google.com fonts.googleapis.com fonts.gstatic.com`,
          'img-src': `'self' data: https://ssl.gstatic.com https://www.gstatic.com pagead2.googlesyndication.com googleads.g.doubleclick.net www.google.com www.google-analytics.com www.googletagmanager.com`,
          'font-src': `'self' data: fonts.gstatic.com`,
          'connect-src': `'self' https://www.google-analytics.com pagead2.googlesyndication.com;`,
          'form-action': `'self' bid.g.doubleclick.net`,
          // you can add your directives or override defaults
        }
      }
    },
  ],
}
