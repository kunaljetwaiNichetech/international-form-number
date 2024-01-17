import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { InputMask } from "primereact/inputmask";
export default function Formval2({ InputField, det }) {
  const [Number, setNumber] = useState();
  //this is for number format
  let n = 123456789;
  const f = new Intl.NumberFormat(n, {
    initialCountry: "us",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
  console.log("this is format of phone number", f.format(n));

  ///////////////end format number
  const [oldValue, setOldvalue] = useState("");

  function PhoneFormating(newValue) {
    if (oldValue.length > newValue.length) {
      setOldvalue(newValue);
      return newValue;
    }

    var newText = newValue;
    if (newText.length == 1) {
      newText = "(" + newText;
    }
    if (oldValue.length == 6) {
      newText = oldValue + ") " + newText[newText.length - 1];
    }
    if (oldValue.length == 11) {
      newText = oldValue + "-" + newText[newText.length - 1];
    }
    console.log("this ", newText);
    setOldvalue(newText);
    return newText;
  }

  /////

  //////////////////

  const [kunal, setkunal] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const [email, Setemail] = useState("");
  const [error, seterror] = useState({});
  const history = useNavigate();
  const handelchange = (e) => {
    let { name, value } = e.target;
    let vaalues = e.target.value;

    if (name === "name") {
      const reg = /^[a-zA-Z]*$/;
      // if (vaalues.match(reg)) {
      if (vaalues.match(reg)) {
        setkunal({ ...kunal, [name]: value });
        seterror({
          name: "",
        });
      } else {
        seterror({
          name: "only charter are allowed",
        });
      }
    }
    setkunal({
      ...kunal,
      [name]: "+1" + PhoneFormating(e.target.value).replace("+1", ""),
    });
    seterror({ mobile: "" });
    if (name === "lastname") {
      if (kunal.lastname.length == 2 && kunal.lastname.includes("+1")) {
        setkunal({
          ...kunal,
          [name]: "",
        });
      }
      // const numericValue = e.target.value.replace(/\D/g, "");

      // Format the phone number as +1 (XXX) XXX-XXXX
      // const formattedPhoneNumber = `+1 (${numericValue.slice(
      // 0,
      // 3
      // )}) ${numericValue.slice(3, 6)}-${numericValue.slice(6, 10)}`;
      // setkunal({ ...kunal, [name]: formattedPhoneNumber });
      // console.log("formattedPhoneNumber", formattedPhoneNumber);
    } else {
      seterror({
        mobile: "only charter are allowed",
      });
    }

    if (name === "email") {
      setkunal({ ...kunal, [name]: value.trim() });
      const r = /^[^\s@]+@([\w-]+\.)+[\w-]{2,3}$/;
      // const r = /^[a-zA-Z]*$/;
      if (!vaalues.match(r)) {
        console.log("hiii this is");
        seterror({ email: "email.is not valid" });
      } else {
        Setemail(e.target.value);
        seterror("");
      }
    }
    // debugger;
    // if (name === "email") {
    //   const { name, value } = e.target;
    //   setkunal({ ...kunal, [name]: value });
    //   const input = e.target.value;

    //   const r = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
    //   if (r.test(input)) {
    //     // debugger;
    //     seterror({ email: "valid" });
    //     setkunal({ ...kunal, [name]: input });
    //   } else {
    //     seterror({ email: "please cheak email" });
    //   }
    //   console.log("this is input", input);
    // }
  };
  console.log("email is this", email);
  const handelsubmit = (e) => {
    e.preventDefault();
    const reg = /^[a-zA-Z]+$/;
    const regs = /^[0-9]*$/;
    const validation = {};

    if (kunal.name.length === 0) {
      validation.name = "name is required";
    }
    // if (!reg.test(kunal.name)) {
    //   validation.name = "please enter only char";
    // }
    if (kunal.lastname.length === 0) {
      validation.mobile = "mobile number is required";
    }
    // if (!reg.test(kunal.lastname)) {
    //   validation.mobile = "please enter only number";
    // }
    console.log("email", email);
    if (email.length === 0) {
      validation.namee = "email is required";
    }

    seterror(validation);
    console.log("", validation.error);

    // if (
    //   validation.name === "" &&
    //   validation.mobile === "" &&
    //   error.email === ""
    // ) {
    //   alert("done");
    // } else {
    //   debugger;
    //   alert("notnot");
    // }
    if (Object.keys(validation).length === 0) {
      console.log(error.email === undefined);
      if (error.email === undefined) {
        alert("the form submited");
        det(kunal);
        history("/details", { state: kunal });
      }
      // debugger;
    }

    // console.log("this is reges", reg.test(kunal.name));
    // console.log("errors", error);
  };

  // const validemail = (input) => {
  //   return /^[a-zA-z]*$/.test(input);
  // };

  /// trying email differently herer....
  // const handelchangeemail = (e) => {
  //   const r = /^[a-zA-z]*$/;

  // Setemail(e.target.value);
  // console.log("email", e.target.value);
  // let p = r.test(e.target.value);
  // console.log(p);
  // if (!p) {
  //   seterror({ email: "email.is not valid" });
  // } else {
  //   Setemail(e.target.value);
  //   seterror("");
  // }

  //   const valuu = validemail(e.target.value);
  //   setkunal(validemail(valuu));
  // };

  console.log("this is numnber console", Number);
  console.log(kunal);

  return (
    <div>
      <form onSubmit={handelsubmit}>
        <div>
          <label>name</label>
          <InputField
            type="text"
            // onKeyUp={onKeyUp}
            onChange={handelchange}
            value={kunal.name}
            name={"name"}
          />
        </div>
        {error && <span style={{ color: "red" }}>{error.name}</span>}
        <div>
          <label>Number</label>
          <InputField
            type="text"
            onChange={handelchange}
            // onKeyUp2={onKeyUp2}
            value={kunal.lastname}
            name={"lastname"}
            maxLength={16}
          />
          {/* <input
            type="text"
            // onKeyUp={testing}
            value={Number}
            onChange={(e) => testing(e.target.value)}
            maxLength={14}
          /> */}
        </div>
        {error && <span style={{ color: "red" }}>{error.mobile}</span>}
        <div>
          <label>email</label>
          <InputField
            type="text"
            onChange={handelchange}
            value={kunal.email}
            name={"email"}
          />
        </div>
        {error && <span style={{ color: "red" }}>{error.email}</span>}
        <div>
          <button type=" submit">submit</button>
        </div>
      </form>
    </div>
  );
}
