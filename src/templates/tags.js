import React from "react"
import PropTypes from "prop-types"
import Layout from '../global/Layout';
import PostPreview from '../components/PostPreview/PostPreview';
import Typography from '@material-ui/core/Typography';
// Components
import { Link, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  content:{
    flex:1,
  },

container:{
  
},
item:{
  margin:theme.spacing(2),
},
 tags__header:{
    flex:2,
    textAlign:'center',
    padding:'20px 0px'
  },
}));

const Tags = ({ pageContext, data }) => {
  const classes = useStyles();
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout> 
          <Typography variant="h5" noWrap className={classes.tags__header}>
            {tagHeader}
          </Typography>
    
                     <Grid
  
  
  container 
    direction="row"
  justify="center"
  spacing={3}
  className={classes.container}
>
        {edges.map(({ node,index }) => {
          
          
          return (

        <Link key={index} to={node.fields.slug}>
      <Grid item  xs className={classes.item}>
       <PostPreview
       title={node.frontmatter.title}
       date={node.frontmatter.date}
       content={node.excerpt}
       tags={node.frontmatter.tags}
       />
       </Grid>
      
      </Link>

          )
        })}
        </Grid>
      
     <Typography variant="h5" noWrap className={classes.tags__header}>
            <Link to="/tags">All tags</Link>
          </Typography>
      
    
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
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
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          excerpt
        }
      }
    }
  }
`