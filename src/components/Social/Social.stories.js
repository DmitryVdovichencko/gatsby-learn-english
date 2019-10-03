import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../../root/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Social from './Social';
import logoGithub from '@iconify/icons-ion/logo-github';
import logoTwitter from '@iconify/icons-ion/logo-twitter';

storiesOf('Social', module)
  .add('Default', () => (
  	<MuiThemeProvider theme={theme}>
    	<Social 
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
    		color="#333"
    		/>
    </MuiThemeProvider>
  ));