import React from 'react';
import theme from './theme';
import { ThemeProvider, Container } from "@material-ui/core";
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import FilteredCatalog from './components/FilteredCatalog';
import Logo from './components/Logo';
import { makeStyles } from '@material-ui/core';
import storylist from './data/storylist';
//import StateExplication from './components/StateExplication';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Story from './components/Story';

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
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Link to="/">
            <div className={classes.divLogo}>
              <Logo />
            </div>
          </Link>
          {/*<LanguageSwitch/>
        <h1>{spacing}</h1>
        <h1>{width}</h1>
        <input type="number" value={spacing} onChange={handleSpacingChange}/>
        <input type="number" style={{marginBottom:100}} value={width} onChange={handleWidthChange}/>
          <StateExplication name="Jackson"/>*/}
          <Container className={classes.container} onContextMenu={(e)=> e.preventDefault()}>
            <Switch>
              <Route path="/stories/1">
                <Story story={storylist[0]}/>
              </Route>
              <Route path="/stories/2">
                <Story story={storylist[1]}/>
              </Route>
              <Route path="/stories/3">
                <Story story={storylist[2]}/>
              </Route>
              <Route path="/stories/4">
                <Story story={storylist[3]}/>
              </Route>
              <Route path="/stories/5">
                <Story story={storylist[4]}/>
              </Route>
              <Route path="/stories/6">
                <Story story={storylist[5]}/>
              </Route>
              <Route path="/stories/7">
                <Story story={storylist[6]}/>
              </Route>
              <Route path="/">
                <FilteredCatalog storylist={storylist} />
              </Route>
            </Switch>
          </Container>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
