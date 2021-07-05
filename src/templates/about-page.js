import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import config from '../../config'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import AboutPageTemplate from '../components/AboutPageTemplate'

const AboutPage = (props) => {
  const { data: { markdownRemark: { html, frontmatter: { title, subtitle, author, metaTitle, metaDescription, image } } } } = props
  const breadcrumbSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': config.siteUrl,
          name: 'Home',
          image: config.siteUrl + '/icons/icon-512x512.png',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': config.siteUrl + '/about/',
          name: 'About',
          image: config.siteUrl + '/icons/icon-512x512.png',
        },
      },
    ],
  }

  const aboutPageSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'AboutPage',
    url: config.siteUrl + '/about/',
    headline: title,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': config.siteUrl + '/about/',
    },
    image: {
      '@type': 'ImageObject',
      url: image.publicURL,
      width: 3120,
      height: 1394,
    },
    publisher: {
      '@type': 'Organization',
      name: config.siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: config.siteUrl + '/icons/icon-512x512.png',
        width: 512,
        height: 512,
      },
    },
    description: metaDescription,
  }

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval'  https://code.jquery.com https://ajax.aspnetcdn.com *.facebook.com *.youtube.com *.googlesyndication.com *.googleapis.com  *.google-analytics.com *.googletagservices.com *.google.com.gh *.google.com *.googleadservices.com *.googletagmanager.com *.cloudflare.com *.cloudinary.com *.bootstrapcdn.com *.doubleclick.net *.vimeo.com *.disqus.com pagead2.googlesyndication.com partner.googleadservices.com tpc.googlesyndication.com www.googletagservices.com adservice.google.com adservice.google.ad adservice.google.ae adservice.google.com.af adservice.google.com.ag adservice.google.com.ai adservice.google.al adservice.google.am adservice.google.co.ao adservice.google.com.ar adservice.google.as adservice.google.at adservice.google.com.au adservice.google.az adservice.google.ba adservice.google.com.bd adservice.google.be adservice.google.bf adservice.google.bg adservice.google.com.bh adservice.google.bi adservice.google.bj adservice.google.com.bn adservice.google.com.bo adservice.google.com.br adservice.google.bs adservice.google.bt adservice.google.co.bw adservice.google.by adservice.google.com.bz adservice.google.ca adservice.google.cd adservice.google.cf adservice.google.cg adservice.google.ch adservice.google.ci adservice.google.co.ck adservice.google.cl adservice.google.cm adservice.google.cn adservice.google.com.co adservice.google.co.cr adservice.google.com.cu adservice.google.cv adservice.google.com.cy adservice.google.cz adservice.google.de adservice.google.dj adservice.google.dk adservice.google.dm adservice.google.com.do adservice.google.dz adservice.google.com.ec adservice.google.ee adservice.google.com.eg adservice.google.es adservice.google.com.et adservice.google.fi adservice.google.com.fj adservice.google.fm adservice.google.fr adservice.google.ga adservice.google.ge adservice.google.gg adservice.google.com.gh adservice.google.com.gi adservice.google.gl adservice.google.gm adservice.google.gr adservice.google.com.gt adservice.google.gy adservice.google.com.hk adservice.google.hn adservice.google.hr adservice.google.ht adservice.google.hu adservice.google.co.id adservice.google.ie adservice.google.co.il adservice.google.im adservice.google.co.in adservice.google.iq adservice.google.is adservice.google.it adservice.google.je adservice.google.com.jm adservice.google.jo adservice.google.co.jp adservice.google.co.ke adservice.google.com.kh adservice.google.ki adservice.google.kg adservice.google.co.kr adservice.google.com.kw adservice.google.kz adservice.google.la adservice.google.com.lb adservice.google.li adservice.google.lk adservice.google.co.ls adservice.google.lt adservice.google.lu adservice.google.lv adservice.google.com.ly adservice.google.co.ma adservice.google.md adservice.google.me adservice.google.mg adservice.google.mk adservice.google.ml adservice.google.com.mm adservice.google.mn adservice.google.ms adservice.google.com.mt adservice.google.mu adservice.google.mv adservice.google.mw adservice.google.com.mx adservice.google.com.my adservice.google.co.mz adservice.google.com.na adservice.google.com.ng adservice.google.com.ni adservice.google.ne adservice.google.nl adservice.google.no adservice.google.com.np adservice.google.nr adservice.google.nu adservice.google.co.nz adservice.google.com.om adservice.google.com.pa adservice.google.com.pe adservice.google.com.pg adservice.google.com.ph adservice.google.com.pk adservice.google.pl adservice.google.pn adservice.google.com.pr adservice.google.ps adservice.google.pt adservice.google.com.py adservice.google.com.qa adservice.google.ro adservice.google.ru adservice.google.rw adservice.google.com.sa adservice.google.com.sb adservice.google.sc adservice.google.se adservice.google.com.sg adservice.google.sh adservice.google.si adservice.google.sk adservice.google.com.sl adservice.google.sn adservice.google.so adservice.google.sm adservice.google.sr adservice.google.st adservice.google.com.sv adservice.google.td adservice.google.tg adservice.google.co.th adservice.google.com.tj adservice.google.tl adservice.google.tm adservice.google.tn adservice.google.to adservice.google.com.tr adservice.google.tt adservice.google.com.tw adservice.google.co.tz adservice.google.com.ua adservice.google.co.ug adservice.google.co.uk adservice.google.com.uy adservice.google.co.uz adservice.google.com.vc adservice.google.co.ve adservice.google.vg adservice.google.co.vi adservice.google.com.vn adservice.google.vu adservice.google.ws adservice.google.rs adservice.google.co.za adservice.google.co.zm adservice.google.co.zw adservice.google.cat; img-src * data:; frame-src *;frame-ancestors 'self'; "/>
        
        <meta name='description' content={metaDescription} />

        {/* Open Graph Tags */}
        <meta property='og:url' content={`${config.siteUrl}/about`} />

        <meta property='og:title' content={title} />

        <meta property='og:description' content={metaDescription} />

        <meta property='og:image' content={image} />

        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchemaOrgJSONLD)}
        </script>

        <script type='application/ld+json'>
          {JSON.stringify(aboutPageSchemaOrgJSONLD)}
        </script>

        <link rel='canonical' href={`${config.siteUrl}/about`} />
      </Helmet>

      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={title}
        subtitle={subtitle}
        author={author}
        image={image}
        content={html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.any,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        author: PropTypes.string,
        image: PropTypes.object,
        metaTitle: PropTypes.string,
        metaDescription: PropTypes.string,
      }),
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`query AboutPage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      subtitle
      author
      image {
        childImageSharp {
          gatsbyImageData(
              quality: 72, 
              placeholder: BLURRED, 
              width: 500, 
              layout: CONSTRAINED
          )
        }
        publicURL
      }
      metaTitle
      metaDescription
    }
  }
}
`
