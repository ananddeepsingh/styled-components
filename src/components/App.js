import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const GlobalStyle = createGlobalStyle`
  body{
    background: #fff;
    min-height: 100vh;
    color: #000;
  }

  *{
    margin: 0;
    padding: 0;
  }

  h1{
    color: blue;
  }
`

const theme = {
  primaryColor: "#f8049c",
  secondaryColor: "#fdd54f"
};

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/login"> <Login /></Route>
          <Route path="/"> <Home /> </Route>
        </Switch>
      </Router>
      {/* <h1>Hi</h1>

      <Button> Primary Login </Button>
      <Button secondary> Secondary Login </Button>
      <Button disabled> Disabled </Button>
      <Button large> Large </Button> */}
    </ThemeProvider>
  );
}

export default App;
