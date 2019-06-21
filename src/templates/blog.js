import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

class BlogPostTemplate extends React.Component{
    render(){
        const post = this.props.data.markdownRemark

        return(
            <Layout>
            
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
                <br/>
                <Link className="goback" to="/posts">&#8592; Go back</Link>
            </Layout>
        )
    }
}
export default BlogPostTemplate

export const pageQuery = graphql`
         query BlogPostBySlug($slug: String!) {
           markdownRemark(fields: { slug: { eq: $slug } }) {
             id
             excerpt(pruneLength: 160)
             html
             frontmatter {
               title
               date(formatString: "DD/MM/YYYY")
             }
           }
         }
`