import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from "gatsby"
import Layout from '../global/Layout';
import Image from '../components/Image';
import PostPreview from '../components/PostPreview/PostPreview';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Twemoji } from 'react-emoji-render';
const useStyles = makeStyles(theme => ({
  content:{
    flex:1,
  },

container:{
  
},
title:{
  textAlign:'center',
  padding:'20px 0px'
},
item:{
  margin:theme.spacing(2),
},
}));

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #555;
  margin-top: 60px;
`;


const IndexPage = ({data}) =>{
  const classes = useStyles();
  return(
  <Layout>
         <Typography variant="h5" noWrap className={classes.title}>
            We have already {data.allMarkdownRemark.totalCount} posts to read <Twemoji text="❤️ 🇬🇧" />
          </Typography>
      

               
               <main className={classes.content}>
               <Grid
  
  
  container 
   
  
  spacing={3}
  className={classes.container}
>
    {data.allMarkdownRemark.edges.map(({ node,index }) => (

      <Link key={index} to={node.fields.slug}>
      <Grid item  xs={12} sm={12} className={classes.item}>
       <PostPreview
       title={node.frontmatter.title}
       date={node.frontmatter.date}
       content={node.excerpt}
       tags={node.frontmatter.tags}
       />
       </Grid>
      
      </Link>
      )
    
 
  )
}
</Grid>
</main>

      
    
  </Layout>
);

} 

export default IndexPage;
export const query = graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {            
            slug          
          }
          excerpt
        }
      }
    }
  }`