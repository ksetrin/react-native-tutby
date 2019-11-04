export const REQUEST_STATE_PENDING = {
  isError: false,
  isLoading: true,
  isSuccess: false,
  errorMessage: null,
};

export const REQUEST_STATE_SUCCESS = {
  isError: false,
  isSuccess: true,
  isLoading: false,
  errorMessage: null,
};

export const REQUEST_STATE_FAILURE = {
  isError: true,
  isLoading: false,
  isSuccess: false,
};
