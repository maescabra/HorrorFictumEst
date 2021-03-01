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
      // light: will be calculated from palette.primary.main,
      main: '#cf3c3c',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    text: {
        primary: '#bf1d1d',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    background: {
      default: '#0f0c0c',
      paper: '#333'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default theme;