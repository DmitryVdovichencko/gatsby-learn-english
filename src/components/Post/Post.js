import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Tags from '../Tags/Tags';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
const useStyles = makeStyles(theme => ({
post__header:{
  marginTop: 0,
  marginBottom:10,
  width:'80%',
  
  borderBottom:'1px lightgrey solid'


},
dateIcon:{
        height:16,
        color:'lightgrey',
        padding:0,
        marginLeft:'-5px',
},
post:{
	flexGrow:1,
	height: '100%',
	
},
post__tags:{
	textAlign:'right',
	margin:0,

},
post__date:{
	
	padding:0,
	margin:0,
	        display:'flex',
        flex:1,
        flexFlow:'row nowrap',
        justifyContent:'flex-start',
        padding:'5px 0px',
        color:'grey',
        alignItems:'center',


        
},
post__content:{
	padding: '20px 0px 20px 10px',
}
}));

export default function Post(props) {
  const classes = useStyles();


  return (
  	<article className={classes.post}>
  	<CssBaseline />
  	<Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="center"
 
>
        <div className={classes.post__header}>
        <Grid container spacing={0}>
        <Grid item xs={12}>
        <Typography variant="h5" component="h3" >{props.title}</Typography> 
        </Grid>
        <Grid item xs={12} sm={6}><span className={classes.post__date}> <EventOutlinedIcon font-size="small" color="default" className={classes.dateIcon}/>{props.date}</span> </Grid>
        <Grid item xs={12} sm={6} className={classes.post__tags}><Tags tags={props.tags}/></Grid>
        </Grid>
        </div>
        <div className={classes.post__content}>    
         
         
          {props.children}

        
        </div>
        </Grid>
</article>
  );
}