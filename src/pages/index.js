import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from "gatsby"
import Layout from '../global/Layout';
import Image from '../components/Image';

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


const IndexPage = ({data}) => (
  <Layout>
    <Page>
      
      <Heading>Dimetrio English</Heading>
               <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node,index }) => (
      <Link key={index} to={node.fields.slug}>
        <h3>{node.frontmatter.title}</h3>
        <h4>{node.frontmatter.date}</h4>
        <p>{node.excerpt}</p>
      </Link>
      )
    
 
  )
}

      
    </Page>
  </Layout>
);

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
          }
          fields {            
            slug          
          }
          excerpt
        }
      }
    }
  }`