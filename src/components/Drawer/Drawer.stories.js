import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../../root/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Drawer from './Drawer';
import informationCircleSharp from '@iconify/icons-ion/information-circle-sharp';
import pricetagsIcon from '@iconify/icons-ion/pricetags';
import libraryIcon from '@iconify/icons-ion/library';

storiesOf('Drawer', module)
  .add('Default', () => (
  	<MuiThemeProvider theme={theme}>
    	<Drawer 
    	title="Dimetrio English" 
    	menuTitle="My English Learning" 
    	links={[
    			{
    				text:'Articles',
    				icon: libraryIcon
    			},
    		
    			{
    				text:'Tags',
    				icon: pricetagsIcon
    			},
    				{
    				text:'About',
    				icon: informationCircleSharp
    			}

    		]}/>
    </MuiThemeProvider>
  ));
