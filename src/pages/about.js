import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../global/Layout';
import Tag from "../components/Tag"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AvatarImg from '../assets/images/profile.jpeg'

const useStyles = makeStyles(theme => ({
about__header:{
    flex:2,
    textAlign:'center',
    padding:'20px 0px'
  },
  about__image:{
  	height:'150px',
  	margin:'0px 10px 10px 0px',
  	borderRadius:'5px',
  	float:'left',
  },

}));
const AboutPage = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const classes = useStyles();
  return(

    <Layout>
    <div className={classes.about}>
         <Typography variant="h5" noWrap className={classes.about__header}>
            About
          </Typography>
      
                     <Grid
  
  
  container 
    direction="column"
  justify="center"
  spacing={3}
  
>

       
          <Grid item>
       
			
          	<Typography paragraph> 
          	<img src={AvatarImg} className={classes.about__image}></img>
          	This is project about my learning English process
          	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          	</Typography>
          	</Grid>
          </Grid>
          

        
          </div>
     

        

        
      
    </Layout>

)}

AboutPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

  }
`