import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../../root/theme'
import Layout from '../../global/Layout'
import TextContent from './TextContent';
import { MuiThemeProvider } from '@material-ui/core/styles'
import Drawer from '../Drawer/Drawer';
import informationCircleSharp from '@iconify/icons-ion/information-circle-sharp';
import pricetagsIcon from '@iconify/icons-ion/pricetags';
import libraryIcon from '@iconify/icons-ion/library';
import logoGithub from '@iconify/icons-ion/logo-github';
import logoTwitter from '@iconify/icons-ion/logo-twitter';
import AvatarImg from '../../assets/images/profile.jpeg'
import Typography from '@material-ui/core/Typography';

storiesOf('TextContent', module)
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

    		]}
            contacts={[
          {
            link:'https://github.com/DmitryVdovichencko',
            icon: logoGithub,
            tooltip:'My GitHub'
          },
        
          {
            link:'https://twitter.com/Dimetrio89',
            icon: logoTwitter,
            tooltip:'@Dimetrio89'
          },
          

        ]}
        avatar={AvatarImg}
        >
            	<TextContent>
            	<Typography paragraph>
    			This is project about my learning English process
          	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          	</Typography>
    	</TextContent>
        </Drawer>

    </MuiThemeProvider>
  	

    
  ));