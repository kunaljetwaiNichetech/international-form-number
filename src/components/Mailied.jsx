import React, { useState } from "react";

const PhoneNumberInput = () => {
  const [phoneNumber, setphoneNumber] = useState();

  let [MobileError, setMobileError] = useState();
  const [Mobile, setMobile] = useState();
  const [oldValue, setOldvalue] = useState("");

  function PhoneFormating(newValue) {
    var newText = newValue;
    if (newText.length == 1) newText = "(" + newText;
    if (oldValue.length == 4)newText = oldValue + ") " + newText[newText.length - 1];
    if (oldValue.length == 9)newText = oldValue + "-" + newText[newText.length - 1];
    console.log("this i s neew text seeting old value", newText);
    setOldvalue(newText);
    return newText;
  }
  const handleMobile = (e) => {
    let value = e.target.value.replace(/[\(\)\-\s]/g, "");
    const phoneNumber = value.slice(2);

    let regx2 = /^(\d)(?!\1+$)\d{10}$/;
    if (phoneNumber) {
      if (phoneNumber == 5555555555) {
      } else {
        if (/^\d{10}$/.test(phoneNumber) && new Set(phoneNumber).size === 1) {
          setMobileError("Please enter different number");
          return;
        }
      }
    }
    if (phoneNumber.match(regx2)) {
      setMobileError("");
    } else {
      setMobileError("Please enter valid number");
    }
    // if (Mobile.length == 2 && Mobile.includes("+1")) {
    //   setMobile("");
    // }

    var reg = /^[0-9+()\-\s]+$/;
    if (e.target.value.trim().match(reg))
      if (e.target.value.trim() != "+")
        setMobile(
          "+1" +
            PhoneFormating(
              e.target.value.trim().replace("+1", ""),
              setMobileError("")
            )
        );

    if (e.target.value.trim().match(reg))
      if (e.target.value.trim() != "+")
        setMobile(
          "+1" +
            PhoneFormating(
              e.target.value.trim().replace("+1", ""),
              setMobileError("")
            )
        );
    if (e.target.value.trim().match(reg))
      if (e.target.value.trim() != "+")
        setMobile(
          "+1" +
            PhoneFormating(
              e.target.value.trim().replace("+1", ""),
              setMobileError("")
            )
        );

    if (e.target.value.trim().length > 0) {
      if (e.target.value.trim().length > 0) {
        if (e.target.value.trim().length == 16) {
          setMobileError("");
        } else {
          // setMobileError("Please provide a complete phone number with different digits");
          // setEmailError("Please enter email id");
        }

        // setMobileError("")
        // setEmailError("")
      } else {
        setMobileError("Please enter phone number");
      }
      // } else {
      //   setMobileError("Please enter phone number");
      // }
    }
  };

  return (
    <input type="text" value={Mobile} maxLength={16} onChange={handleMobile} />
  );
};

export default PhoneNumberInput;
