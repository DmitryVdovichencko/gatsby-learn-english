import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PostImg from '../../assets/images/cover.png'
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Tags from '../Tags/Tags'
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  tagIcon:{
    height:16,
    color:'lightgrey'
  },
  tags:{
    display:'flex',
    flex:1,
    flexFlow:'row nowrap',
    justifyContent:'flex-end',
    padding:'0px 20px',
    color:'grey',
  },
  cardFooter: {
    display:'flex',
    flex:1,
    flexFlow:'row nowrap',
    justifyContent:'flex-end',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostPreview(props) {
  const classes = useStyles();


  return (
    <Card className={classes.card}>
    <CssBaseline />
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <Tags tags={props.tags} />
      
      <CardMedia
        className={classes.media}
        image={PostImg}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions className={classes.cardFooter}>
        
        <Button size="small" color="primary">
          Read More
        </Button>

          
        
      </CardActions>
    </Card>
  );
}