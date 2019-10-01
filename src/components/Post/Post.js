import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
const useStyles = makeStyles(theme => ({
post__header:{
	marginTop: 0,


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
        <Typography variant="h5" component="h3" className={classes.post__header}>
          This is a sheet of paper.
        </Typography>       
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