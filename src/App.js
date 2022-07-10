import logo from "./logo.svg";
//import "./App.css";
import React from "react";

import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import { Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Header
      {/* Dùng link khi chỉ cần click và dẫn tới trang đó */}
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      {/* Dùng NavLink khi cần hiển thị link nào đang được active (sử dụng trong menu) */}
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      Footer
    </div>
  );
}

export default App;
