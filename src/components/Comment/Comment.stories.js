import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../../root/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Comment from './Comment';

storiesOf('Comment', module)
  .add('Default', () => (
  	<MuiThemeProvider theme={theme}>
    	<Comment comment={{name:'Dmitry Vdovichenko', text:'My new awesome comment'}} />
    </MuiThemeProvider>
  ));