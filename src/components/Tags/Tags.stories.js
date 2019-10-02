import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../../root/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Tags from './Tags';

storiesOf('Tags', module)
  .add('Default', () => (
  	<MuiThemeProvider theme={theme}>
    	<Tags tags={['Music','Grammar']}/>
    </MuiThemeProvider>
  ));