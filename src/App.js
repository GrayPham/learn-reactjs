import logo from "./logo.svg";
//import "./App.css";
import React, { useEffect } from "react";

import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import productAPI from "./api/productAPI";
import CounterFeatures from "./features/Counter";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10, // lay gioi han 10 product
      };
      const productList = await productAPI.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);
  return (
    <div className="App">
      Header
      {/* Dùng link khi chỉ cần click và dẫn tới trang đó */}
      {/* <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p> */}
      {/* Dùng NavLink khi cần hiển thị link nào đang được active (sử dụng trong menu) */}
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      {/* Kiểm tra path xem có cái nào match đưuọc với path hiện tại hay không thì hiện ra nhưng chỉ một Route */}
      <Switch>
        {/* Điều hướng và ẩn link Url */}
        <Redirect from="/home" to="/"></Redirect>

        <Route path="/" component={CounterFeatures} exact />
        <Route path="/todo-list" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
