import React from "react";
import Router from "./routes/Router"
import { GlobalStyle } from "./GlobalStyle"
import { GlobalState } from "./global/GlobalState"

const App = () => {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  )
}

export default App;
