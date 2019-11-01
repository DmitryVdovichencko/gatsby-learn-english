import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post/Post"
import Layout from "../global/Layout"


export default ({ data }) => {  
    const {post} = data
    const {fields, frontmatter, html} = post
    const {title, date, tags} = frontmatter
    const {slug} = fields
    const comments = data.comments.edges
    .filter((c)=> slug.indexOf(c.node.url) !== -1)
    .map((c) => ({ ...c.node}));
    console.log(comments) 
    return (
    <Layout>
    <Post 
        {...frontmatter}
    >
        <div dangerouslySetInnerHTML={{ __html: post.html }} /> 
    </Post>
  
    </Layout>
    
  )
}
export const query = graphql`  
    query($slug: String!) 
    {    
       post: markdownRemark(fields: { slug: { eq: $slug } }) 
            {      
                html 
                fields{
                    slug
                }     
                frontmatter {        
                    title
                    date(formatString: "DD MMMM, YYYY")
                    tags      
                }    
            }
            comments: allComment {
                edges {
                  node {
                    name
        
        text
        url
        
       
                  }
                }
              }
    }
    `