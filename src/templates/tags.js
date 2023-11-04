import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const TagRoute = (props) => {
  const {
    data: {
      site: {
        siteMetadata: { title },
      },
      allMarkdownRemark: { totalCount, edges: posts },
    },
    pageContext: { tag },
  } = props;

  const postLinks = posts.map((post) => (
    <div
      key={post.node.fields.slug}
      className="pv4 bb bt b--black-10 ph3 ph0-l"
    >
      <Link to={post.node.fields.slug} className="link dim no-underline black">
        <div>
          <img
            src={post.node.frontmatter.cover.publicURL}
            alt={post.node.frontmatter.title}
            className="w-60"
          />
        </div>
        <h2 className="f4 f3-m f2-l f-subheadline-l measure lh-title fw1 mt0 mb0">
          {post.node.frontmatter.title}
        </h2>
      </Link>
    </div>
  ));

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`;

  return (
    <Layout>
      <section className="pa3">
        <Helmet title={`${tag} | ${title}`} />

        <section className="mw7 center avenir">
          <div className="tc">
            <h3 className="f2 lh-title fw4 mb3 mt0 pt3 bw2 avenir">
              {tagHeader}
            </h3>

            <div className="taglist">{postLinks} </div>

            <p className="mb5">
              <Link
                to="/tags /
                        "
                className=" no -
                    underline black dim avenir"
              >
                {" "}
                Browse all tags
              </Link>
            </p>
          </div>
        </section>
      </section>
    </Layout>
  );
};

TagRoute.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }),
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
      totalCount: PropTypes.number,
    }),
  }),
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              publicURL
            }
          }
        }
      }
    }
  }
`;
