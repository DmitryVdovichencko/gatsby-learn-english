import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CssBaseline from '@material-ui/core/CssBaseline';
const useStyles = makeStyles(theme => ({
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
    }));
    export default function Tags(props) {
        const classes = useStyles();
        return(
            
            <div className={classes.tags}>
                <CssBaseline />
                <LocalOfferIcon font-size="small" color="default" className={classes.tagIcon}/>         {props.tags.map(tag => (
          <span>{tag}</span>
          
          )

        

     

        

        )}
            </div>
        )
    }