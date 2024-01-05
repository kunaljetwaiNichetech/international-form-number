import React, { useContext } from "react";
import { Context } from "./COOntext";

export default function Tryingusecontext() {
  const valuee = useContext(Context);
  console.log("this is cheakingtrying", valuee);
  return <div>Tryingusecontext</div>;
}
