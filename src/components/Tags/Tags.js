import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from "gatsby";
import Button from '@material-ui/core/Button';
import kebabCase from "lodash/kebabCase";
const useStyles = makeStyles(theme => ({
    tagIcon:{
        height:16,
        color:'lightgrey',
        
      },
    button: {
    margin: 0,
    padding:'2px',
    color:'grey',
    textTransform:'none',
    letterSpacing:0.1,
    fontWeight:'normal',
    minWidth:0,
     },
      tags:{
        display:'flex',
        flex:1,
        flexFlow:'row nowrap',
        justifyContent:'flex-end',
        padding:'0px 20px',
        color:'grey',
        alignItems:'center',
       
      },
    }));
    export default function Tags(props) {
        const classes = useStyles();
        return(
            
            <div className={classes.tags}>
                <CssBaseline />
                <Link to={`/tags/`}><LocalOfferIcon font-size="small" color="default" className={classes.tagIcon}/> </Link>        {props.tags.map((tag,i) => (
          <Link to={`/tags/${kebabCase(tag)}/`}><Button className={classes.button}>{ i < (props.tags.length-1) ? `${tag},\u00A0`:`${tag}`}</Button></Link>
          
          )

        

     

        

        )}
            </div>
        )
    }