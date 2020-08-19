import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class SubMenuService extends React.Component {
  render() {
    const { data, show } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <ul className="mtor-sub-menu" style={{display: show?'block':'none'}}>
        {posts &&
          posts.map(({ node: post }) => (
            <li title={post.slug}>
              <Link
                  className="mtor-sub-menu-item"
                  to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </li>
          ))}
      </ul>
    )
  }
}

SubMenuService.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query SubMenuServiceQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "service" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data) => <SubMenuService data={data} show={props.show}/>}
  />
)
