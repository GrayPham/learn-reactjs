import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import NotFound from "../../components/NotFound";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  //Sử dụng một hook
  const match = useRouteMatch(); // Hạn chế việc thay đổi và lặp lại cũng như tận dụng nhận được Url từ componet cha gửi về
  return (
    <div>
      Todo Share UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
