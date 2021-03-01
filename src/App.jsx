import React from 'react';
import theme from './theme';
import { ThemeProvider, Container } from "@material-ui/core";
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import FilteredCatalog from './components/FilteredCatalog';
import Logo from './components/Logo';
import { makeStyles } from '@material-ui/core';
import storylist from './data/storylist';

const useStyles = makeStyles(theme=>({
  divLogo: {
      position:"absolute",
      top:theme.spacing(2),
      left:theme.spacing(2),
      
  },
  container: {
      paddingTop:theme.spacing(15),
  }
}))


function App() {
  /*const [state, setState] = useState({ spacing: 4, width: 3 });
  const { spacing, width } = state;
  function handleSpacingChange(event) {
    setState({ ...state, spacing: event.target.value });
  }
  function handleWidthChange(event) {
    setState({ ...state, width: event.target.value });
  }*/

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      
      <CssBaseline />
      <div className="App">
        <div className={classes.divLogo}>
          <Logo/>
        </div>
        {/*<LanguageSwitch/>
        <h1>{spacing}</h1>
        <h1>{width}</h1>
        <input type="number" value={spacing} onChange={handleSpacingChange}/>
        <input type="number" style={{marginBottom:100}} value={width} onChange={handleWidthChange}/>*/}
        <Container className={classes.container}>
          <FilteredCatalog storylist={storylist}/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
