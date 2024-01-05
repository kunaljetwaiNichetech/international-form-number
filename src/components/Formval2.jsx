import { useState } from "react";
import React from "react";
import Display from "./Display";

export default function Formval2({ InputField }) {
  const [kunal, setkunal] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const [email, Setemail] = useState("");
  const [error, seterror] = useState({});
  const handelchange = (e) => {
    const { name, value } = e.target;
    const vaalues = e.target.value;

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
    if (name === "lastname") {
      const regs = /^[0-9]*$/;
      if (vaalues.match(regs)) {
        setkunal({ ...kunal, [name]: value });
        seterror({ mobile: "" });
      } else {
        seterror({
          mobile: "only charter are allowed",
        });
      }
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

    // if (
    //   validation.name == "" &&
    //   validation.mobile == "" &&
    //   validation.email == ""
    // ) {
    //   alert("done");
    // } else {
    //   alert("notnot");
    // }
    if (Object.keys(validation).length === 0) {
      alert("the form submited");
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
          />
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
