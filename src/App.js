import logo from "./logo.svg";
//import "./App.css";
import React from "react";

import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Header
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      Footer
    </div>
  );
}

export default App;
