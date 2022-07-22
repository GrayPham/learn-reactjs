import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Grid, Container, Box, makeStyles } from "@material-ui/core";
import { Paper, Typography } from "@mui/material";
import productAPI from "../../../api/productAPI";
import ProductSkeletonList from "../components/ProductSkeletonList";

ListPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "190px",
  },
  right: {
    flex: "1 1 auto",
  },
}));
function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productAPI.getAll({ _page: 1, _limit: 10 });

        setProductList(data);
      } catch (error) {
        console.log("Fail to fetch product list: ", error);
      }

      //setLoading(false);
    })();
  }, []);
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {Loading ? (
                <ProductSkeletonList />
              ) : (
                <Typography>Product List</Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
