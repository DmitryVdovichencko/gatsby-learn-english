import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../../root/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Post from './Post';

storiesOf('Post', module)
  .add('Default', () => (
  	<MuiThemeProvider theme={theme}>
    	<Post tags={['Develop','Songs']} date='18 August, 2019' title='New Post' />
    </MuiThemeProvider>
  ));