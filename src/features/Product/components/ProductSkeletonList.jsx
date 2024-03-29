import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";
import { Grid, Box } from "@material-ui/core";
ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};
ProductSkeletonList.defaultProps = {
  length: 10,
};
function ProductSkeletonList({ length }) {
  return (
    <Box>
      <Grid container spacing={0}>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonList;
