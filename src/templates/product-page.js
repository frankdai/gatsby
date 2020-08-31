import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { HTMLContent } from '../components/Content'
import ImagesRotate from "../components/ImageRotate";


export const ProductPageTemplate = ({
  featureImage,
  title,
  content,
  images
}) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-11 is-offset-1">
              <h2 className="has-text-weight-bold is-size-1">{title}</h2>
            </div>
          </div>
          <div className="columns">
            <div className="column is-11 is-offset-1" style={{height: '300px', overflow: 'hidden'}}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: featureImage,
                  alt: `${title}`,
                }}
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-11 is-offset-1">
              <HTMLContent content={content} />
            </div>
          </div>
          <div className="columns">
            <div className="column is-11 is-offset-1">
              <ImagesRotate images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

const ProductPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const keys = Object.keys(frontmatter)
  let images = keys.filter((key)=>{
    return /^image\d$/.test(key)
  }).map((k)=>{
    return frontmatter[k]
  })
  return (
    <Layout>
      <ProductPageTemplate
        featureImage={frontmatter.featuredImage}
        title={frontmatter.title}
        content={html}
        images={images}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image1 {
          childImageSharp {
            fixed(height: 300) {
              src
            }
          }
        }
        image2 {
          childImageSharp {
            fixed(height: 300) {
              src
            }
          }
        }
        image3 {
          childImageSharp {
            fixed(height: 300) {
              src
            }
          }
        }
        image4 {
          childImageSharp {
            fixed(height: 300) {
              src
            }
          }
        }
        image5 {
          childImageSharp {
            fixed(height: 300) {
              src
            }
          }
        }
      }
    }
  }
`
