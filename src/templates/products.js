import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <div key={post.node.fields.slug} className="columns">
        <div className="column picture-wrapper">
          <PreviewCompatibleImage
            imageInfo={{
              //style: {'max-height': '200px'},
              image: post.node.frontmatter.image1,
              alt: `${post.node.frontmatter.title}`,
            }}
          />
        </div>
        <div className="column">
          <h2 className="is-size-2">
            <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
          </h2>
          <p>{post.node.frontmatter.excerpt}</p>
        </div>
      </div>
    ))
    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{marginBottom: '6rem'}}
              >
                <div className="products-list">{postLinks}</div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query ProductList($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
            image1 {
              childImageSharp {
                fluid(maxWidth: 400, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
