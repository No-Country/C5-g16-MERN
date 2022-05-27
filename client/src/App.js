import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";

import styled from "styled-components";

const Container = styled.div`
  background-color: #209724;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
