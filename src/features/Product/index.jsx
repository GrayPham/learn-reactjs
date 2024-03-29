import React from "react";
import PropTypes from "prop-types";
import ListPage from "./pages/ListPage";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Box } from "@mui/material";
ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
