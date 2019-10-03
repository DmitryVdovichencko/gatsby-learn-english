import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../../root/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import PostPreview from './PostPreview';

storiesOf('PostPreview', module)
  .add('Default', () => (
  	<MuiThemeProvider theme={theme}>
    	<PostPreview tags={['Develop','Songs']}/>
    </MuiThemeProvider>
  ));