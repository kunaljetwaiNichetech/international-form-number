import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
// import { Context } from "./COOntext";

export default function Display() {
  const location = useLocation();
  const value = location.state;
  // const value = useContext(Context);
  // console.log("this is usecontex value", value);
  return (
    <div>
      <h1>this is the Name: {value.name}</h1>
      <h1>this is the number: {value.lastname}</h1>
      <h1>this is the email: {value.email}</h1>
    </div>
  );
}
