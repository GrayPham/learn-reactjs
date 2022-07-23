import React from "react";
import PropTypes from "prop-types";

import { Box, Typography } from "@material-ui/core";
import { THUMBNAIL_PLACEHOLDER, STATIC_HOST } from "../../../constraints/index";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
  return (
    <Box padding={1}>
      <Box padding={1}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ""}
      </Typography>
      <Typography variant="body2">
        {product.salePrice} ____
        <Box component="span" fontSize="16px" color="EE4D2D" mr={1}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(
            product.promotionPercent > 0
              ? `${(product.salePrice * product.promotionPercent) / 100}`
              : product.salePrice
          )}
        </Box>
      </Typography>
    </Box>
  );
}

export default Product;
