import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post/Post"
import Layout from "../global/Layout"


export default ({ data }) => {  
    const post = data.markdownRemark  
    return (
    <Layout>
    <Post 
    title={post.frontmatter.title}
    date={post.frontmatter.date}
    tags={post.frontmatter.tags}
    >
        <div dangerouslySetInnerHTML={{ __html: post.html }} /> 
    </Post>
    </Layout>
    
  )
}
export const query = graphql`  
    query($slug: String!) 
    {    
        markdownRemark(fields: 
            { slug: { eq: $slug } }) 
            {      
                html      
                frontmatter {        
                    title
                    date(formatString: "DD MMMM, YYYY")
                    tags      
                }    
            }  
    }`