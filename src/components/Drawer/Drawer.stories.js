import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../../root/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Drawer from './Drawer';

storiesOf('Drawer', module)
  .add('Default', () => (
  	<MuiThemeProvider theme={theme}>
    	<Drawer />
    </MuiThemeProvider>
  ));
