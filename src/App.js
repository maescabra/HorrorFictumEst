import React, { useState } from 'react';
import logo from './logo.png';
import theme from './theme';
import { ThemeProvider, Grid, Container } from "@material-ui/core";
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import StoryCard from './components/StoryCard';
import { psychologique, paranormal, firstperson } from './types/genres';

const storylist = [
  {
    genre: [
      psychologique,
      paranormal,
      firstperson],
    longueur: 5,
    date: "10/02/2021",
    description:"Lorem ipsum dolores ombrage",
    url:"http://localhost:3000/stories/1",
    title:"Easy Street",
    image:"/assets/stories/easystreet.png",
  }
];

function App() {
  const [state, setState] = useState({ spacing: 4, width: 3 });
  const { spacing, width } = state;
  /*function handleSpacingChange(event) {
    setState({ ...state, spacing: event.target.value });
  }
  function handleWidthChange(event) {
    setState({ ...state, width: event.target.value });
  }*/
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<LanguageSwitch/>
        <h1>{spacing}</h1>
        <h1>{width}</h1>
        <input type="number" value={spacing} onChange={handleSpacingChange}/>
        <input type="number" style={{marginBottom:100}} value={width} onChange={handleWidthChange}/>*/}
        <Container>
          <Grid container spacing={spacing}>
            
            <Grid item xs={width}>
              <StoryCard title="Obscurité" date="24/02/2021" description="Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante" />
            </Grid>
            <Grid item xs={width}>
              <StoryCard title="Obscurité" date="24/02/2021" description="Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante" />
            </Grid>
            <Grid item xs={width}>
              <StoryCard title="Obscurité" date="24/02/2021" description="Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante" />
            </Grid>
            <Grid item xs={width}>
              <StoryCard title="Obscurité" date="24/02/2021" description="Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante" />
            </Grid>
            <Grid item xs={width}>
              <StoryCard title="Obscurité" date="24/02/2021" description="Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante" />
            </Grid>
            <Grid item xs={width}>
              <StoryCard title="Obscurité" date="24/02/2021" description="Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante" />
            </Grid>
            <Grid item xs={width}>
              <StoryCard title="Obscurité" date="24/02/2021" description="Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante Ceci est une description très intéressante sur une histoire tout aussi intéressante" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
