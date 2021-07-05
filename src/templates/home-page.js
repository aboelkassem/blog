import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import config from '../../config'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link
        to={props.url}
        className='f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4'
      >
        <span className='pl1'>{props.text}</span>
      </Link>
    )
  } else {
    return null
  }
}

PaginationLink.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
}

const HomePage = (props) => {
  const { pageContext: { group, index, first, last } } = props
  const previousUrl = index - 1 === 1 ? '/' : '/' + (index - 1).toString()
  const nextUrl = '/' + (index + 1).toString()

  /*eslint-disable */
  const websiteSchemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": config.siteUrl,
    "name": config.siteTitle,
    "alternateName": config.siteTitleAlt ? config.siteTitleAlt : '',
    "potentialAction": {
      "@type": "SearchAction",
      "name": `${config.siteTitle} Search`,
      "target": `${config.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
  /* eslint-enable */

  return (
    <Layout>
      <Helmet>
        <title>Home | {config.siteTitle}</title>

        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval'  https://code.jquery.com https://ajax.aspnetcdn.com *.facebook.com *.youtube.com *.googlesyndication.com *.googleapis.com  *.google-analytics.com *.googletagservices.com *.google.com.gh *.google.com  *.googletagmanager.com *.cloudflare.com *.cloudinary.com *.bootstrapcdn.com *.doubleclick.net *.vimeo.com *.disqus.com; img-src * data:; frame-src *;  "></meta>
        
        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(websiteSchemaOrgJSONLD)}
        </script>

        {/* Open Graph Tags */}
        <meta property='og:url' content={`${config.siteUrl}`} />

        <meta property='og:title' content={config.siteTitle} />

        <meta property='og:image' content={config.siteLogo} />
        <meta property='og:type' content='blog' />
        <meta property='og:site_name' content={config.siteTitle} />
        <meta property='og:description' content={config.siteDescription} />
        <meta property='description' content={config.siteDescription} />
        <meta property='twitter:description' content={config.siteDescription} />
        <meta property='twitter:creator' content={config.userTwitter} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content={config.siteTitle} />
        <meta property='twitter:image' content={config.siteLogo} />
        <meta property='twitter:url' content={config.siteUrl} />
        
        <meta name="google-site-verification" content="xg4ctI6bmMqXQoOhJwwZjL8Tq8GYcJPS2Uh0Xgw2oiQ"/>

        <link rel='canonical' href={`${config.siteUrl}`} />

        <meta property='keywords' content={config.keywords} />
      </Helmet>

      <div>
        <ArticleList posts={group} />

        <div className='flex items-center justify-center pa4'>
          <PaginationLink test={first} url={previousUrl} text='Previous Page' />

          <PaginationLink test={last} url={nextUrl} text='Next Page' />
        </div>
      </div>
    </Layout>
  )
}

HomePage.propTypes = {
  pageContext: PropTypes.shape({
    index: PropTypes.number,
    first: PropTypes.boolean,
    last: PropTypes.boolean,
    group: PropTypes.array,
  }),
}

export default HomePage
