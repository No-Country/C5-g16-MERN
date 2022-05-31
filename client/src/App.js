import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import "./App.css";
import Home from "./pages/Home";

import styled from "styled-components";
import Login from "./components/Login";

// const Container = styled.div`
//   background-color: #209724;
// `;
const Container = styled.div``;

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={() => <Login />} />
          <Route path="/" exact render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
