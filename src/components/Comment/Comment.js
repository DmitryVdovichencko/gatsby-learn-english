import PropTypes from "prop-types";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';
import ReplyIcon from '@material-ui/icons/Reply';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    comment:{
        width:'90%',
        borderRadius:'10px',
    },
    comment__content:{
        paddingLeft:'10px',
        paddingTop:'0px',

        
        flex:'1',
        
    },
    comment__author:{
        height:'36px',
        
        
        display:'flex',
        flexFlow:'column nowrap',
        justifyContent:'center',
        flex:'1',
        color:theme.palette.primary.main,
    },  
    comment__icon:{
      color:'lightgrey',
      '&:hover':{
        color:theme.palette.primary.main,
      },
      '&:nth-child(2):hover':{
        color:'red',
      },
    },
}))
export default function Comment(props) {
  const classes = useStyles();
    const {text,name}= props.comment
  return (
    <div className={classes.comment}>
      <CssBaseline />
      <Card className={classes.comment}>

      <CardContent>
        <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="flex-start"
>
 <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
          <CardContent className={classes.comment__content}>
          <Typography variant="h6" gutterBottom className={classes.comment__author}>{name}</Typography>
          <Typography variant="body2" gutterBottom>{text}</Typography>
          <CardActions>
        <ReplyIcon className={classes.comment__icon}/>
        <FavoriteIcon className={classes.comment__icon}/>
        </CardActions>
          </CardContent>
</Grid>
 </CardContent>
            
        
   
      </Card>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string.isRequired
  })
};
