import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./actionTypes";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCT_REQUEST
});

export const fetchProductsSuccess = (payload) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload
});

export const fetchProductsFailure = (payload) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload
});
