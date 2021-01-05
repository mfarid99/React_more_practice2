import React from "react";
import {Some} from "./Some.jsx"
import {Other} from "./Other.jsx"


export const App = (props) => {
  return (<>
    <Some IronMan = {<h1>Robert Downey Jr.</h1>} />
    <Other/>
  </>);
};