// import React, { useState } from "react";

// const PhoneNumberInput = () => {
//   const [isTyping, setIsTyping] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handleInputChange = (e) => {
//     const input = e.target.value.replace(/\D/g, "");

//     setIsTyping(true);

//     setPhoneNumber((prevPhoneNumber) => {
//       return formatPhoneNumber(input, prevPhoneNumber);
//     });
//   };

//   const formatPhoneNumber = (input, prevPhoneNumber) => {
//     const cleaned = input.replace(/\D/g, "");
//     const match = cleaned.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);

//     if (match) {
//       return ` ${isTyping ? "+1 " : ""}(${match[1]})${
//         match[2] ? " " + match[2] : ""
//       }${match[3] ? "-" + match[3] : ""}`;
//     }

//     return "";
//   };

//   return (
//     <input
//       type="text"
//       placeholder="+1 (123) 123-1234"
//       value={phoneNumber}
//       onChange={handleInputChange}
//     />
//   );
// };

// export default PhoneNumberInput;

// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/input";
import { useState } from "react";

function Example() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState();
  let handelchangenumber = (e) => {
    let p = e;
    // setValue(p);

    let newnumber = "";
    let cleaned = p.replace(/\D/g, "");
    debugger;
    for (let i = 0; i < cleaned.length; i++) {
      if (i === 0) {
        newnumber = newnumber + "+1(";
        newnumber += cleaned[i];
        return;
      }

      if (i === 3) {
        newnumber = newnumber + ") ";
        newnumber += cleaned[i];
        return;
      }

      if (i === 6) {
        newnumber = newnumber + "-";
        newnumber += cleaned[i];
        return;
      }

      newnumber += cleaned[i];
      setValue(newnumber);
    }
  };
  console.log(value);
  return (
    <PhoneInput
      defaultCountry="US"
      placeholder="Enter phone number"
      value={value}
      onChange={(e) => handelchangenumber(e)}
    />
  );
}
export default Example;
