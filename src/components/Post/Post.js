import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
const useStyles = makeStyles(theme => ({
post__header:{
  marginTop: 0,
  marginBottom:10,
  width:'100%',
  padding: '20px 0px 20px 10px',
  borderBottom:'1px lightgrey solid'


},
post:{
	flexGrow:1,
	height: '100%',
	
}
}));

export default function Post() {
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
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography variant="h5" component="h3" >Awesome news</Typography> 
        </Grid>
        <Grid item xs={12} sm={6}> September 14, 2016 </Grid>
        <Grid item xs={12} sm={6}> <LocalOfferIcon font-size="small" color="default" className={classes.tagIcon}/> Music, Grammar </Grid>
        </Grid>
        </div>
              
         <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        </Grid>
</article>
  );
}