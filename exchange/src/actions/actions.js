// import axios from "axios";

// export const FETCH_CURRENCY_FAILURE = "FETCH_CURRENCY_FAILURE";

// // Redux is synchronous
// // we need to perform an async operation
// export const fetchCurrency = (c1, c2) => {
//   const API_KEY = "d6dfa0ebcbd627173591fb1b";
//   return (dispatch) => {
//     dispatch({ type: "FETCH_CURRENCY_START" });
//     axios
//       .get(`https://prime.exchangerate-api.com/v5/${API_KEY}/pair/${c1}/${c2}`)
//       .then((res) => {
//         // res.data.quote
//         dispatch({
//           type: "FETCH_CURRENCY_SUCCESS",
//           payload: res.conversion_rate,
//         });
//       });
//   };
// };
import axios from "axios";
export const FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE";

// Redux is synchronous
// we need to perform an async operation
export const fetchQuote = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_QUOTE_START" });
    axios
      .get("https://programming-quotes-api.herokuapp.com/quotes/random")
      .then((res) => {
        console.log(res);
        dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: res.data.en });
      })
      .catch((err) => {
        // message: err.response.data
        // status: err.response.status
        dispatch({
          type: "FETCH_QUOTE_FAILURE",
          payload: `Error ${err.response.status}: ${err.response.data}`,
        });
      });
  };
};

export const updateTitle = (newTitle) => {
  return {};
};
