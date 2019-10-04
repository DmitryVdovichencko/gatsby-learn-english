import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../global/Layout';
import Tag from "../components/Tag"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({

 tags__header:{
    flex:2,
    textAlign:'center',
    padding:'20px 0px'
  },
}));
const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const classes = useStyles();
  return(

    <Layout>
         <Typography variant="h5" noWrap className={classes.tags__header}>
            All tags
          </Typography>
      
                     <Grid
  
  
  container 
    direction="row"
  justify="center"
  spacing={3}
  
>

        {group.map(tag => (
          <Grid item>
                 <Tag

            tagName = {tag.fieldValue}
            tagCount = {tag.totalCount}
          >
          </Tag>
          </Grid>
          )

        

     

        

        )}
      </Grid>
    </Layout>

)}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`