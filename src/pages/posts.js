import React from 'react'
import { graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

class Posts extends React.Component{
    render(){
        const { data } = this.props
        const posts = data.allMarkdownRemark.edges

    return(
        <Layout>
            {posts.map(({node}) => {
                // const title = node.frontmatter.title || node.fields.slug
                return(
                  // <div className="blog-list"></div>
                  <article className="article" key={node.fields.slug}>
                  <div className="featured-image">
                  <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
                  </div>

                  <div className="article-content">
                    <h3 className="article-title">
                        <Link to={node.fields.slug}>
                            {node.frontmatter.title}
                        </Link>
                    </h3>
                    <small className="article-date">{node.frontmatter.date}</small>    
                    <p className="article-description" dangerouslySetInnerHTML={{__html: node.frontmatter.description || node.excerpt,}}></p>
                  </div>                       
              </article>    
                )
            })}
        </Layout>
        )
    }
}

export default Posts

export const pageQuery = graphql`
query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 30)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            featuredImage{
              childImageSharp{
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }  
`