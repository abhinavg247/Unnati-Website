import FeeAmountTypes from './fee-amount.types';

export const fetchFeeAmountStart = (user_id, cafe_id) => ({
  type: FeeAmountTypes.FETCH_FEE_AMOUNT_START,
  payload: { user_id: user_id, cafe_id: cafe_id },
});

export const fetchFeeAmountSuccess = (feeAmount) => ({
  type: FeeAmountTypes.FETCH_FEE_AMOUNT_SUCCESS,
  payload: feeAmount,
});

export const fetchFeeAmountFailure = (errorMessage) => ({
  type: FeeAmountTypes.FETCH_FEE_AMOUNT_FAILURE,
  payload: errorMessage,
});