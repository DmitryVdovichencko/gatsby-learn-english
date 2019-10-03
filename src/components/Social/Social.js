import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from "gatsby";
import Button from '@material-ui/core/Button';
import kebabCase from "lodash/kebabCase";
import { InlineIcon } from '@iconify/react';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles(theme => ({
    contactIcon:{
        margin:5,
       
        
      },

    }));
    export default function Social(props) {
        const classes = useStyles();
        return(
            
            <div className={classes.social}>
                <CssBaseline />

               {props.contacts.map((contact,i) => (
                 <Tooltip title={contact.tooltip} >
          <a href={contact.link} className={classes.contactIcon}>
         
          <InlineIcon icon={contact.icon} height='24px' color={props.color}/>
          
          </a>
          </Tooltip>
          )

        

     

        

        )}
            </div>
        )
    }