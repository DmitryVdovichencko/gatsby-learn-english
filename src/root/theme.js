import { createMuiTheme } from '@material-ui/core/styles'
import 'typeface-roboto';
import PatuaOne from 'typeface-patua-one'
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

export default createMuiTheme({
  // https://material-ui-next.com/customization/themes/#the-other-variables
  // overrides
   palette: {
    primary: blue,
    secondary: pink,
    default:blue[50],
  },
  typography: {
    useNextVariants: true,
    h5:{
    	fontFamily:'Patua One',
    },
    h6:{
      fontFamily:'Patua One',
    }
  },
})

