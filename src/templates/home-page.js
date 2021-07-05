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
        <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval'  https://code.jquery.com https://ajax.aspnetcdn.com *.facebook.com *.youtube.com *.googlesyndication.com *.googleapis.com  *.google-analytics.com *.googletagservices.com *.google.com.gh *.google.com *.googleadservices.com *.googletagmanager.com *.cloudflare.com *.cloudinary.com *.bootstrapcdn.com *.doubleclick.net *.vimeo.com *.disqus.com pagead2.googlesyndication.com partner.googleadservices.com tpc.googlesyndication.com www.googletagservices.com adservice.google.com adservice.google.ad adservice.google.ae adservice.google.com.af adservice.google.com.ag adservice.google.com.ai adservice.google.al adservice.google.am adservice.google.co.ao adservice.google.com.ar adservice.google.as adservice.google.at adservice.google.com.au adservice.google.az adservice.google.ba adservice.google.com.bd adservice.google.be adservice.google.bf adservice.google.bg adservice.google.com.bh adservice.google.bi adservice.google.bj adservice.google.com.bn adservice.google.com.bo adservice.google.com.br adservice.google.bs adservice.google.bt adservice.google.co.bw adservice.google.by adservice.google.com.bz adservice.google.ca adservice.google.cd adservice.google.cf adservice.google.cg adservice.google.ch adservice.google.ci adservice.google.co.ck adservice.google.cl adservice.google.cm adservice.google.cn adservice.google.com.co adservice.google.co.cr adservice.google.com.cu adservice.google.cv adservice.google.com.cy adservice.google.cz adservice.google.de adservice.google.dj adservice.google.dk adservice.google.dm adservice.google.com.do adservice.google.dz adservice.google.com.ec adservice.google.ee adservice.google.com.eg adservice.google.es adservice.google.com.et adservice.google.fi adservice.google.com.fj adservice.google.fm adservice.google.fr adservice.google.ga adservice.google.ge adservice.google.gg adservice.google.com.gh adservice.google.com.gi adservice.google.gl adservice.google.gm adservice.google.gr adservice.google.com.gt adservice.google.gy adservice.google.com.hk adservice.google.hn adservice.google.hr adservice.google.ht adservice.google.hu adservice.google.co.id adservice.google.ie adservice.google.co.il adservice.google.im adservice.google.co.in adservice.google.iq adservice.google.is adservice.google.it adservice.google.je adservice.google.com.jm adservice.google.jo adservice.google.co.jp adservice.google.co.ke adservice.google.com.kh adservice.google.ki adservice.google.kg adservice.google.co.kr adservice.google.com.kw adservice.google.kz adservice.google.la adservice.google.com.lb adservice.google.li adservice.google.lk adservice.google.co.ls adservice.google.lt adservice.google.lu adservice.google.lv adservice.google.com.ly adservice.google.co.ma adservice.google.md adservice.google.me adservice.google.mg adservice.google.mk adservice.google.ml adservice.google.com.mm adservice.google.mn adservice.google.ms adservice.google.com.mt adservice.google.mu adservice.google.mv adservice.google.mw adservice.google.com.mx adservice.google.com.my adservice.google.co.mz adservice.google.com.na adservice.google.com.ng adservice.google.com.ni adservice.google.ne adservice.google.nl adservice.google.no adservice.google.com.np adservice.google.nr adservice.google.nu adservice.google.co.nz adservice.google.com.om adservice.google.com.pa adservice.google.com.pe adservice.google.com.pg adservice.google.com.ph adservice.google.com.pk adservice.google.pl adservice.google.pn adservice.google.com.pr adservice.google.ps adservice.google.pt adservice.google.com.py adservice.google.com.qa adservice.google.ro adservice.google.ru adservice.google.rw adservice.google.com.sa adservice.google.com.sb adservice.google.sc adservice.google.se adservice.google.com.sg adservice.google.sh adservice.google.si adservice.google.sk adservice.google.com.sl adservice.google.sn adservice.google.so adservice.google.sm adservice.google.sr adservice.google.st adservice.google.com.sv adservice.google.td adservice.google.tg adservice.google.co.th adservice.google.com.tj adservice.google.tl adservice.google.tm adservice.google.tn adservice.google.to adservice.google.com.tr adservice.google.tt adservice.google.com.tw adservice.google.co.tz adservice.google.com.ua adservice.google.co.ug adservice.google.co.uk adservice.google.com.uy adservice.google.co.uz adservice.google.com.vc adservice.google.co.ve adservice.google.vg adservice.google.co.vi adservice.google.com.vn adservice.google.vu adservice.google.ws adservice.google.rs adservice.google.co.za adservice.google.co.zm adservice.google.co.zw adservice.google.cat; img-src * data:; frame-src *;"/>
        
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
