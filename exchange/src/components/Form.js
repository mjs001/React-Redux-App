// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchCurrency } from "../actions/actions";

// const Form = (props) => {
//   const [currency, setCurrency] = useState({ c1: "", c2: "" });
//   const [c2, setC2] = useState("");

//   useEffect(() => {
//     props.fetchCurrency();
//   }, []);

//   const handleChanges1 = (e) => {
//     e.preventDefault();
//     setCurrency({ [e.target.name]: e.target.value });
//   };
//   // const handleChanges2 = (e) => {
//   //   setC2({ [e.target.name]: e.target.value });
//   // };
//   const submitForm = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <div>
//       <form onSubmit={submitForm}>
//         <input
//           type="text"
//           name="c1"
//           value={currency.c1}
//           onChange={handleChanges1}
//           minLength="3"
//         ></input>
//         <input
//           type="text"
//           name="c2"
//           value={currency.c2}
//           onChange={handleChanges1}
//           minLength="3"
//         ></input>
//         <button
//           type="submit"
//           onClick={props.fetchCurrency(currency.c1, currency.c2)}
//         ></button>
//       </form>
//       <h3>1: {props.conversionRate}</h3>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     c1: state.currency.c1,
//     c2: state.currency.c2,
//     conversionRate: state.currency.conversionRate,
//     isFetching: state.currency.isFetching,
//     error: state.currency.error,
//   };
// };

// export default connect(mapStateToProps, { fetchCurrency })(Form);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchQuote } from "../actions/actions";

const Quote = (props) => {
  useEffect(() => {
    // call an action creator
    props.fetchQuote();
  }, []);

  // if (props.isFetching) {
  //   return <Loader />;
  // }

  return (
    <div className="box">
      <h2>Programming Quotes:</h2>
      {props.isFetching && (
        <Loader type="Grid" color="#seagreen" height={30} width={30} />
      )}
      {props.quote && <h4>"{props.quote}"</h4>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.fetchQuote}>Fetch a new quote</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    quote: state.quotes.quote,
    isFetching: state.quotes.isFetching,
    error: state.quotes.error,
  };
};

export default connect(mapStateToProps, { fetchQuote })(Quote);
