import React, { useState } from "react";

export default function Listing() {
  let [data, setdata] = useState();
  const testing = (phonenumberstring) => {
    let newtext = "";
    let cleaned = ("" + phonenumberstring).replace(/\D/g, "");
    for (let i = 0; i < cleaned.length; i++) {
      if (i == 1) {
        newtext = "(";
      }
      if (newtext.length == 3) {
        newtext = newtext + ")";
      }
      if (newtext.length == 6) {
        newtext = newtext + "-";
      }
      newtext = newtext + cleaned[i];
      return newtext;
    }
  };
  let phonenumberstring = [1, 23, 4, 5, 6, 7, 8, 9, 0];
  console.log(testing(phonenumberstring));
  console.log("this is damo", data);
  return <div>Listing</div>;
}
