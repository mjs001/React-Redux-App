// import React from "react";

// export const initialState = {
//   c1: "",
//   c2: "",
//   conversionRate: "",
//   isFetching: false,
//   error: "",
// };

// export const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_CURRENCY_START":
//       return {
//         ...state,
//         isFetching: true,
//       };
//     case "FETCH_CURRENCY_SUCCESS":
//       return {
//         ...state,
//         isFetching: false,
//         conversionRate: action.payload,
//         error: "",
//       };

//     default:
//       return state;
//   }
// };

const initialState = {
  quote: "",
  isFetching: false,
  error: "",
};

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUOTE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_QUOTE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        quote: action.payload,
        error: "",
      };
    case "FETCH_QUOTE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
