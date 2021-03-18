import { createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-poppins';

const theme = createMuiTheme({
  typography:{
    fontFamily: 'Poppins',
    button: {
      fontWeight: 'semibold',
    }
  },
  palette: {
    primary: {
      main: '#cf3c3c',
    },
    text: {
        primary: '#bf1d1d',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    background: {
      default: '#0f0c0c',
      paper: '#333'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  overrides: {
    MuiButton: {
      contained: {
        color: 'black',
      },
    },
  },
});

export default theme;