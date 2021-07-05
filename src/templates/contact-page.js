import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import config from '../../config'
import Layout from '../components/Layout'
import ContactPageTemplate from '../components/ContactPageTemplate'

const ContactPage = props => {
  const { data: { markdownRemark: { frontmatter: { title, subtitle, metaTitle, metaDescription } } } } = props

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval'  https://code.jquery.com https://ajax.aspnetcdn.com *.facebook.com *.youtube.com *.googlesyndication.com *.googleapis.com  *.google-analytics.com *.googletagservices.com *.google.com.gh *.google.com *.cloudflare.com *.cloudinary.com *.bootstrapcdn.com; img-src * data:; frame-src *;  "></meta>

        <meta name='description' content={metaDescription} />
        {/* Open Graph Tags */}
        <meta property='og:url' content={`${config.siteUrl}/contact`} />

        <meta property='og:title' content={title} />

        <meta property='og:description' content={metaDescription} />

        <link rel='canonical' href={`${config.siteUrl}/contact`} />
      </Helmet>

      <ContactPageTemplate
        title={title}
        subtitle={subtitle}
        metaTitle={metaTitle}
        metaDescription={metaDescription}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        metaTitle: PropTypes.string,
        metaDescription: PropTypes.string,
      }),
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
          metaTitle
          metaDescription
      }
    }
  }
`
