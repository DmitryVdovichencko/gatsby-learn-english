import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../../root/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Post from './Post';

storiesOf('Post', module)
  .add('Default', () => (
  	<MuiThemeProvider theme={theme}>
    	<Post />
    </MuiThemeProvider>
  ));