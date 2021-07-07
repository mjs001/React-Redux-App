import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Reducer } from "./reducers/fetchReducer";
import Form from "./components/Form";
import Particles from "react-particles-js";
function App() {
  return (
    <div className="App">
      <>
        <Particles height="170px" />
        <Form />
        <Particles height="170px" />
      </>
    </div>
  );
}

export default App;
