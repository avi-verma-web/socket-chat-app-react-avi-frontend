import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Join}></Route>
      <Route path="/chat" component={Chat}></Route>
    </BrowserRouter>
  );
}

export default App;
